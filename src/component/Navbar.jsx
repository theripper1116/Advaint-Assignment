import { LOGO } from "../utils/links";

const Navbar = () => {
  return (
    <div className="navbar__UI">
      <img className="navbar__logo__image" src={LOGO}></img>
      <input className="navbar__input__box" placeholder="Search A Movie" />
    </div>
  );
};

export default Navbar;
