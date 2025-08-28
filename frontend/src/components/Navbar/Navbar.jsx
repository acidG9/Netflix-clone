import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navber = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="./logo.png" alt="logo" />
        <ul className="navbar-list">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src="search_icon.svg" alt="search" className="icons" />
        <img src="bell_icon.svg" alt="bell" className="icons" />
        <div className="navbar-profile">
          <img src="profile_img.png" alt="profile" className="profile" />
          <img src="caret_icon.svg" alt="caret" />
          <div className="dropdown">
            <p className="nav-mobile">TV Shows</p>
            <p className="nav-mobile">Movies</p>
            <p className="nav-mobile">My List</p>
            <p onClick={() => navigate("/")}>Signout of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
