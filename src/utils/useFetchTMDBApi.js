import { useEffect, useState } from "react";
import { TMDB__API } from "./links";
import { options } from "./optionsForTMDBApi";

const useFetchTMDBApi = (pageNumber) => {
  const [dataFromTMDB, setDataFromTMDB] = useState([]);
  const [page] = useState(pageNumber);

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
