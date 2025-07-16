import { useParams } from "react-router";
import { PiSealCheckFill } from "react-icons/pi";
import Loader from "../components/shared/Loader";
import TrackItem from "../components/tracks/TrackItem";
import { useArtistById } from "../hooks/useArtistById";

export default function SingleArtistPage() {
  const { id } = useParams();
  const { artistData, tracks, isLoading } = useArtistById(id);

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
