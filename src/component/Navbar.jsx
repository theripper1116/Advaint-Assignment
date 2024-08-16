import { useState } from "react";
import { _ } from "lodash";

import { LOGO, TMDB__SEARCH__MOVIE__API } from "../utils/links";
import { options } from "../utils/optionsForTMDBApi";
import ShowSearchResult from "./ShowSearchResult";

const Navbar = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [visibilityForSearchResult, setVisibilityForSearchResult] =
    useState(false);
  const debouncedFunc = _.debounce(async (e) => {
    try {
      const getRawData = await fetch(
        TMDB__SEARCH__MOVIE__API + e.target.value,
        options
      );
      const getData = await getRawData.json();
      setSearchedData(getData.results.slice(0, 5));
      if (searchedData.length > 0) setVisibilityForSearchResult(true);
      else setVisibilityForSearchResult(false);
    } catch (err) {
      console.log(err);
    }
  }, 500);

  return (
    <div className="navbar__UI">
      <img className="navbar__logo__image" src={LOGO}></img>
      <div className="navbar__input__div">
        <input
          className="navbar__input__box"
          placeholder="Search A Movie"
          onKeyUp={(e) => debouncedFunc(e)}
        />
        {visibilityForSearchResult && (
          <ShowSearchResult searchedData={searchedData} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
