import shutter from "../../assets/shutterstock.png";
import logo from "../../assets/LOGO.png";

import "./welcome_design.scss";
import { Link } from "react-router-dom";

const WelcomeDesign = () => {
  return (
    <div className="welcome_container">
      <img src={shutter} alt="" className="shutter" />
      <img src={logo} alt="" className="logo" />
      <hr className="hr" />
      <div className="add_resume">
        <Link to="/userInfo" style={{ textDecoration: "none" }}>
          <h1>რეზიუმის დამატება</h1>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeDesign;
