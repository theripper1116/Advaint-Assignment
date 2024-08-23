import { _ } from "lodash";

import { LOGO, TMDB__SEARCH__MOVIE__API } from "../utils/links";
import { options } from "../utils/optionsForTMDBApi";

const Navbar = ({ setSearchedData }) => {
  const debouncedFunc = _.debounce(async (e) => {
    if (e.target.value !== "") {
      try {
        const getRawData = await fetch(
          TMDB__SEARCH__MOVIE__API + e.target.value,
          options
        );
        const getData = await getRawData.json();
        setSearchedData(getData.results);
      } catch (err) {
        console.log(err);
      }
    } else {
      setSearchedData();
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
      </div>
    </div>
  );
};

export default Navbar;
