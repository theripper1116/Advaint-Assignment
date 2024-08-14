import { useEffect, useState } from "react";
import useFetchTMDBApi from "../utils/useFetchTMDBApi";
import InfiniteScroll from "react-infinite-scroll-component";
import { TMDB__IMAGE__URL } from "../utils/links";

const MovieList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  let data = useFetchTMDBApi(pageNumber);

  useEffect(() => {
    setPageNumber((prev) => prev + 1);
  }, []);

  return (
    <div className="movie__list__UI">
      {/* <InfiniteScroll
        dataLength={data.length}
        next={useFetchTMDBApi}
        hasMore={true}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      > */}
        {data &&
          data.map((ele) => {
            return (
              <div key={ele.id}>
                <img
                  className="image__movie__poster"
                  src={TMDB__IMAGE__URL + ele.poster_path}
                ></img>
              </div>
            );
          })}
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default MovieList;
