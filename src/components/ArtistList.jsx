import { useEffect, useState } from "react";
import { artistsLinks } from "../utils/consts";
import ArtistItem from "./ArtistItem";
import Loader from "./Loader";

export default function ArtistList() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchArtists() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.spotify.com/v1/artists?ids=${artistsLinks.join(",")}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        const data = await response.json();
        setArtists(data.artists);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArtists();
  }, []);

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
