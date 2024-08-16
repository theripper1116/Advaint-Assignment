import { useState } from "react";
import MovieList from "./component/MovieList";
import Navbar from "./component/Navbar";
import SortMovie from "./component/SortMovie";
import useFetchTMDBApi from "./utils/useFetchTMDBApi";
import useFetchGenre from "./utils/useFetchGenre";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [sortedMovieList, setSortedMovieList] = useState();
  const [sortButtonVisibility, setSortButtonVisibility] = useState(false);
  let movieData = useFetchTMDBApi(pageNumber);
  const changePageNumber = () => {
    setPageNumber((prev) => prev + 1);
  };
  let genreData = useFetchGenre();
  const sortedArrayList = [];
  const sortTheArray = (sortOrder, sortType) => {
    if (sortType === "genre") {
      const sortedArray = movieData.filter((ele) => {
        if (ele.genre_ids.includes(sortOrder.id)) return ele;
      });
      setSortedMovieList(sortedArray);
      setSortButtonVisibility(true);
    } else if (sortType === "year") {
      const sortedArray = movieData.filter((ele) => {
        if (ele.release_date.split("-")[0] === sortOrder) return ele;
      });
      setSortedMovieList(sortedArray);
      setSortButtonVisibility(true);
    } else if (sortType === "rating") {
      switch (sortOrder) {
        case "good": {
          const sortedArray = movieData.filter((ele) => ele.vote_average > 6);
          setSortedMovieList(sortedArray);
          setSortButtonVisibility(true);
          break;
        }
        case "average": {
          const sortedArray = movieData.filter(
            (ele) => ele.vote_average <= 6 && ele.vote_average > 5
          );
          setSortedMovieList(sortedArray);
          setSortButtonVisibility(true);
          break;
        }
        case "bad": {
          const sortedArray = movieData.filter((ele) => ele.vote_average <= 5);
          setSortedMovieList(sortedArray);
          setSortButtonVisibility(true);
          break;
        }
      }
    }
  };

  const clearSortArray = () => {
    setSortedMovieList();
    setSortButtonVisibility(false);
  };
  return (
    <>
      <div className="navbar__div">
        <Navbar />
      </div>
      {sortButtonVisibility && (
        <div className="clear__sort">
          <button className="clear__sort__button" onClick={() => clearSortArray()}>Clear</button>
        </div>
      )}

      <div className="movie__and__sort__div">
        <div className="movie__sort__div">
          <SortMovie
            sortTheArray={sortTheArray}
            movieData={movieData}
            genreData={genreData}
          />
        </div>
        <div className="movie__list__div">
          <MovieList
            movieData={sortedMovieList ? sortedMovieList : movieData}
            changePageNumber={changePageNumber}
          />
        </div>
      </div>
    </>
  );
}

export default App;
