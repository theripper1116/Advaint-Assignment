import { LOGO } from "../utils/links";

const Navbar = () => {
  return (
    <div className="navbar__UI">
      <img src={LOGO}></img>
      <input placeholder="Search A Movie" />
    </div>
  );
};

export default Navbar;
