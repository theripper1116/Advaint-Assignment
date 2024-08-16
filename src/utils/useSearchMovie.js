import { useEffect, useState } from "react";
import { TMDB__SEARCH__MOVIE__API } from "./links";
import { options } from "./optionsForTMDBApi";

const useSearchMovie = () => {
  const [searchedData, setSearchedData] = useState();
  const searchMovie = async () => {
    const getRawData = await fetch(TMDB__SEARCH__MOVIE__API, options);
    const getData = await getRawData.json();
    setSearchedData(getData);
  };
  useEffect(() => {
    searchMovie();
  }, []);
  return searchedData;
};

export default useSearchMovie;
