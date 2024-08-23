import { useEffect } from "react";
import DisplayMovie from "./DisplayMovie";

const MovieList = ({ movieData, changePageNumber, addToSaveList }) => {
  const handleInfinityScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      )
        changePageNumber();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfinityScroll);
    return () => window.removeEventListener("scroll", handleInfinityScroll);
  }, []);

  if (movieData.length < 1)
    return <div className="no__movies__found">No Movies Found</div>;
  else
    return (
      <div className="movie__list__UI">
        {movieData.map((ele) => (
          <DisplayMovie key={ele.id} ele={ele} addToSaveList={addToSaveList} />
        ))}
      </div>
    );
};

export default MovieList;
