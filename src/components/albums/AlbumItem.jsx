import { Link } from "react-router";
import { SINGLE_ALBUM_PAGE_ROUTE } from "../../utils";

export default function AlbumItem({ id, title, author, imageUrl }) {
  return (
    <Link to={SINGLE_ALBUM_PAGE_ROUTE.replace(":id", id)} className="album-item">
      <img src={imageUrl} alt={title} className="album-poster" />
      <h4 className="album-title">{title}</h4>
      <p className="album-artist">{author}</p>
    </Link>
  );
}
