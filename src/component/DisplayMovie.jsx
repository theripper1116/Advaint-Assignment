import { useState } from "react";
import { TMDB__IMAGE__URL } from "../utils/links";

const DisplayMovie = ({ ele, addToSaveList }) => {
  const [stringForFavouriteButton, setStringForFavouriteButton] = useState(
    "Add to favourite"
  );

  return (
    <div className="movie__poster__UI">
      <img
        className="image__movie__poster"
        src={TMDB__IMAGE__URL + ele.poster_path}
        loading="lazy"
      />
      <h4>{ele.original_title}</h4>
      <h4>{ele.release_date}</h4>
      <span
        className="favourite__button"
        onClick={() => {
          addToSaveList(ele);
          setStringForFavouriteButton("Added to favourite");
        }}
      >
        {stringForFavouriteButton}
      </span>
    </div>
  );
};

export default DisplayMovie;
