import { useEffect, useState } from "react";
import { TMDB__API, TMDB__API__KEY } from "./links";

const useFetchTMDBApi = (pageNumber) => {
  const [dataFromTMDB, setDataFromTMDB] = useState([]);
  const [page] = useState(pageNumber);
  console.log(page);
  console.log("inside useFetch");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: TMDB__API__KEY,
    },
  };
  const fetchDataFromTMDBAPI = async (page) => {
    try {
      const getRawData = await fetch(TMDB__API + page, options);
      const getData = await getRawData.json();
      setDataFromTMDB([...dataFromTMDB, ...getData.results]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataFromTMDBAPI(page);
  }, []);
  return dataFromTMDB;
};

export default useFetchTMDBApi;
