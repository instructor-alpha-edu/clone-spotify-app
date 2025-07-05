import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PiSealCheckFill } from "react-icons/pi";
import { axiosInstance } from "../services/axios";
import Loader from "../components/Loader";
import TrackItem from "../components/TrackItem";

export default function SingleArtistPage() {
  const [artistData, setArtistData] = useState({});
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchArtistById() {
      try {
        setIsLoading(true);
        const { data: dataArtist } = await axiosInstance.get(`/artists/${id}`);
        const { data: dataTopTracks } = await axiosInstance.get(`/artists/${id}/top-tracks`);
        setArtistData(dataArtist);
        setTracks(dataTopTracks.tracks);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArtistById();
  }, []);

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="album-wrapper">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="artist-wrapper">
        <div className="artist-header">
          <img
            src={artistData.images && artistData.images[0] && artistData.images[0].url}
            alt={artistData.name}
            className="artist-img"
          />
          <div className="artist-content">
            <p className="artist-content__verify">
              <PiSealCheckFill />
              Подтвержденный исполнитель
            </p>
            <h1 className="artist-content__name">{artistData.name}</h1>
            <div className="artist-content__audience">
              {artistData.followers && artistData.followers.total} слушателей за месяц
            </div>
          </div>
        </div>
        <div className="track-table">
          <h2 className="track-table__title">Популярные треки</h2>
          <div className="track-table__body">
            {tracks &&
              tracks.map((track, idx) => (
                <TrackItem
                  key={track.id}
                  index={idx + 1}
                  title={track.name}
                  author={track.artists.map(artist => artist.name).join(", ")}
                  duration={track.duration_ms}
                  posterUrl={track.album && track.album.images && track.album.images[0].url}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
