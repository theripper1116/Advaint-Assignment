import { useEffect, useState } from "react";
import useFetchTMDBApi from "../utils/useFetchTMDBApi";

const MovieList = () => {
  let data = new Array();
  const [pageNumber, setPageNumber] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState();
  data.push(...useFetchTMDBApi(pageNumber));
  console.log(data);

  useEffect(() => {
    setDataToDisplay(data);
  }, []);
  return (
    <div className="movie__list__UI">
      {dataToDisplay &&
        dataToDisplay.map((ele) => {
          return <div>{ele.original_title}</div>;
        })}
    </div>
  );
};

export default MovieList;
