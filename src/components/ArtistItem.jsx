import { Link } from "react-router";
import { SINGLE_ARTIST_PAGE_ROUTE } from "../utils/consts";

export default function ArtistItem({ id, name, imageUrl }) {
  return (
    <Link to={SINGLE_ARTIST_PAGE_ROUTE.replace(":id", id)} className="artist-item">
      <img src={imageUrl} alt={name} className="artist-poster" />
      <h4 className="artist-name">{name}</h4>
      <p className="artist-type">Исполнитель</p>
    </Link>
  );
}
