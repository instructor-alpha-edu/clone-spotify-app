import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { axiosInstance } from "../services/axios";
import TrackItem from "../components/TrackItem";
import Loader from "../components/Loader";

export default function SearchPage() {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params] = useSearchParams();

  useEffect(() => {
    async function fetchTracksBySearchQuery() {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get("/search", {
          params: {
            q: params.get("query"),
            type: "track",
            market: "ES",
            limit: 10,
          },
        });
        console.log(data.tracks.items);
        setTracks(data.tracks.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTracksBySearchQuery();
  }, [params.get("query")]);

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
      <h2 className="wrapper-title">Результаты поиска</h2>
      <div className="search-list">
        {tracks.map((track, index) => (
          <TrackItem
            key={track.id}
            index={index + 1}
            title={track.name}
            author={track.artists.map(artist => artist.name).join(", ")}
            duration={track.duration_ms}
            posterUrl={track.album.images[0].url}
          />
        ))}
      </div>
    </div>
  );
}
