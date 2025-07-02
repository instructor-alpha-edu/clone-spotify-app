import { convertMsToTime } from "../utils/utils";

export default function TrackItem({ index, title, author, duration, posterUrl }) {
  const classNames = posterUrl ? "track-line track-line__extended" : "track-line";

  return (
    <div className={classNames}>
      <div className="track-number">{index}</div>
      {posterUrl && (
        <div className="track-poster">
          <img src={posterUrl} alt="Poster" />
        </div>
      )}
      <div className="track-song">
        <h6 className="track-song__name">{title}</h6>
        <p className="track-song__author">{author}</p>
      </div>
      <div className="track-duration">{convertMsToTime(duration)}</div>
    </div>
  );
}
