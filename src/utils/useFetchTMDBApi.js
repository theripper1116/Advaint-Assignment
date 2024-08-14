import { useEffect, useState } from "react";
import { TMDB__API, TMDB__API__KEY } from "./links";

const useFetchTMDBApi = (pageNumber) => {
  const [dataFromTMDB, setDataFromTMDB] = useState([]);
  const [page] = useState(pageNumber);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: TMDB__API__KEY,
    },
  };
  const fectchDataFromTMDBAPI = async (pageNumber) => {
    try {
      const getRawData = await fetch(TMDB__API + pageNumber, options);
      const getData = await getRawData.json();
      console.log(getData);
      setDataFromTMDB([...dataFromTMDB, ...getData.results]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fectchDataFromTMDBAPI(pageNumber);
  }, []);
  return dataFromTMDB;
};

export default useFetchTMDBApi;
