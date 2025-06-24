import { useEffect, useState } from "react";
import { ACCESS_TOKEN, albumLinks } from "../utils/consts";
import AlbumItem from "./AlbumItem";

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
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
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
    <div className="wrapper">
      <h1 className="wrapper-title">Популярные альбомы</h1>
      <div className="album-wrapper">
        {isLoading ? (
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="album-grid">
            {albums.map(item => (
              <AlbumItem
                title={item.name}
                author={item.artists[0].name}
                imageUrl={item.images[0].url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
