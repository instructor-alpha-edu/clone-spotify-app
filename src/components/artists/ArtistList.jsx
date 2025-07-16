import ArtistItem from "./ArtistItem";
import Loader from "../shared/Loader";
import { useArtists } from "../../hooks/useArtists";

export default function ArtistList() {
  const { artists, isLoading } = useArtists();

  return (
    <div className="artist-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="artist-grid">
          {artists.map(item => (
            <ArtistItem key={item.id} id={item.id} name={item.name} imageUrl={item.images[0].url} />
          ))}
        </div>
      )}
    </div>
  );
}
