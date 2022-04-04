import { NavLink } from "react-router-dom";
import logo from "../src/assets/logo.svg";
import searchIcon from "../src/assets/Search.svg";
import love from "../src/assets/Union.svg";
const DevList = () => {
  return (
    <div className="side_bar">
      <img src={logo} alt="logo" className="img_div" />

      <div className="list_ul">
        <NavLink to="/" className="list_li">
          <div className="list_inner">
            <div className="icon_div">
              <img src={searchIcon} alt="search" />
            </div>
            &nbsp; &nbsp;
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/favourite" className="list_li">
          <div className="list_inner">
            <div className="icon_div">
              <img src={love} alt="love" width={15} />
            </div>
            &nbsp; &nbsp;
            <p>Favorites</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default DevList;
