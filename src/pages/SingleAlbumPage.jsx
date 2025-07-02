import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdNumbers } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import Loader from "../components/Loader";
import TrackItem from "../components/TrackItem";

export default function SingleAlbumPage() {
  const [albumData, setAlbumData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchAlbumById() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = await response.json();
        setAlbumData(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAlbumById();
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
      <div className="album-wrapper">
        <div className="album-header">
          <img
            src={albumData.images && albumData.images[0] && albumData.images[0].url}
            alt={albumData.name}
            className="album-img"
          />
          <div className="album-content">
            <p className="album-content__type">Альбом</p>
            <h1 className="album-content__name">{albumData.name}</h1>
            <div className="album-content__author">
              <span>{albumData.artists && albumData.artists[0] && albumData.artists[0].name}</span>
              <div className="album-content__circle"></div>
              <p>{albumData.release_date && albumData.release_date.substring(0, 4)}</p>
              <div className="album-content__circle"></div>
              <p>{albumData.total_tracks} треков</p>
            </div>
          </div>
        </div>
        <div className="track-table">
          <div className="track-table__header">
            <div className="track-header__text">
              <MdNumbers />
            </div>
            <div className="track-header__text">Название</div>
            <div className="track-header__text">
              <FaRegClock />
            </div>
          </div>
          <div className="track-table__body">
            {albumData.tracks &&
              albumData.tracks.items &&
              albumData.tracks.items.map(track => (
                <TrackItem
                  key={track.id}
                  index={track.track_number}
                  title={track.name}
                  author={track.artists.map(artist => artist.name).join(", ")}
                  duration={track.duration_ms}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
