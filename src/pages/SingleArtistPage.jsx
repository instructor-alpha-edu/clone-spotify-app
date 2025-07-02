import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PiSealCheckFill } from "react-icons/pi";
import Loader from "../components/Loader";
import { ACCESS_TOKEN } from "../utils/consts";
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
        const responseArtist = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });
        const dataArtist = await responseArtist.json();
        setArtistData(dataArtist);

        const responseTopTracks = await fetch(
          `https://api.spotify.com/v1/artists/${id}/top-tracks`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        const dataTopTracks = await responseTopTracks.json();
        setTracks(dataTopTracks.tracks);
        console.log(dataTopTracks);
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
