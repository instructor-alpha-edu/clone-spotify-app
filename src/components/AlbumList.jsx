import { useEffect, useState } from "react";
import { albumLinks } from "../utils/consts";
import AlbumItem from "./AlbumItem";
import Loader from "./Loader";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.spotify.com/v1/albums?ids=${albumLinks.join(",")}&market=KZ`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        const data = await response.json();
        setAlbums(data.albums);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAlbums();
  }, []);

  return (
    <div className="album-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="album-grid">
          {albums.map(item => (
            <AlbumItem
              id={item.id}
              title={item.name}
              author={item.artists[0].name}
              imageUrl={item.images[0].url}
              key={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
