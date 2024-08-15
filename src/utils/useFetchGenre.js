import { useEffect, useState } from "react";
import { TMDB__GENRE, TMDB__API__KEY } from "./links";

const useFetchGenre = () => {
  const [genreDataFromTMDB, setGenreDataFromTMDB] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: TMDB__API__KEY,
    },
  };
  const fetchGenreDataFromTMDBAPI = async () => {
    try {
      const getRawData = await fetch(TMDB__GENRE, options);
      const getData = await getRawData.json();
      setGenreDataFromTMDB(getData.genres);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGenreDataFromTMDBAPI();
  }, []);
  return genreDataFromTMDB;
};

export default useFetchGenre;
