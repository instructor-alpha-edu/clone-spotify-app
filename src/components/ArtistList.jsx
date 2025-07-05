import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";
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
        const { data } = await axiosInstance.get(`/artists?ids=${artistsLinks.join(",")}`);
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
