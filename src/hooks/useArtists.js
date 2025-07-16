import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";
import { artistsLinks } from "../utils";

export function useArtists() {
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

  return { artists, isLoading };
}
