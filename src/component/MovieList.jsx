import { useEffect, useState } from "react";
import { TMDB__IMAGE__URL } from "../utils/links";

const MovieList = ({ movieData, changePageNumber, addToSaveList }) => {
  const [stringForFavouriteButton, setStringForFavouriteButton] =
    useState("Add to favourite");
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

  return (
    <div className="movie__list__UI">
      {movieData &&
        movieData.map((ele) => {
          return (
            <div key={ele.id} className="movie__poster__UI">
              <img
                className="image__movie__poster"
                src={TMDB__IMAGE__URL + ele.poster_path}
              ></img>
              <h4>{ele.original_title}</h4>
              <h4>{ele.release_date}</h4>
              <span
                className="favourite__button"
                onClick={() => addToSaveList(ele)}
              >
                {stringForFavouriteButton}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
