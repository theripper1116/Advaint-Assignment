import MovieList from "./component/MovieList";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="navbar__div">
        <Navbar />
      </div>
      <div className="movie__list__div">
        <MovieList />
      </div>
    </>
  );
}

export default App;
