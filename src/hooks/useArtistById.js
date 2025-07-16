import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";

export function useArtistById(id) {
  const [artistData, setArtistData] = useState({});
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchArtistById() {
      try {
        setIsLoading(true);
        const { data: dataArtist } = await axiosInstance.get(`/artists/${id}`);
        const { data: dataTopTracks } = await axiosInstance.get(`/artists/${id}/top-tracks`);
        setArtistData(dataArtist);
        setTracks(dataTopTracks.tracks);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArtistById();
  }, []);

  return { artistData, tracks, isLoading };
}
