import { useState } from "react";
import MovieList from "./component/MovieList";
import Navbar from "./component/Navbar";
import SortMovie from "./component/SortMovie";
import useFetchTMDBApi from "./utils/useFetchTMDBApi";
import useFetchGenre from "./utils/useFetchGenre";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  let movieData = useFetchTMDBApi(pageNumber);
  const changePageNumber = () => {
    setPageNumber((prev) => prev + 1);
  };
  let genreData = useFetchGenre();
  const sortTheArray = (sortOrder) => {
    console.log(genreData);
    switch (sortOrder) {
      case "genre": {
      }
    }
  };
  return (
    <>
      <div className="navbar__div">
        <Navbar />
      </div>
      <div className="movie__and__sort__div">
        <div className="movie__sort__div">
          <SortMovie sortTheArray={sortTheArray} genreData={genreData} />
        </div>
        <div className="movie__list__div">
          <MovieList
            movieData={movieData}
            changePageNumber={changePageNumber}
          />
        </div>
      </div>
    </>
  );
}

export default App;
