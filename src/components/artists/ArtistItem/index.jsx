import { Link } from "react-router";
import { SINGLE_ARTIST_PAGE_ROUTE } from "../../../utils";
import styles from "./ArtistItem.module.css";

export default function ArtistItem({ id, name, imageUrl }) {
  return (
    <Link to={SINGLE_ARTIST_PAGE_ROUTE.replace(":id", id)} className={styles.item}>
      <img src={imageUrl} alt={name} className={styles.poster} />
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.type}>Исполнитель</p>
    </Link>
  );
}
