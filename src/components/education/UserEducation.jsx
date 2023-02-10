import { Link } from "react-router-dom";

import vector from "../../assets/Vector.png";

import Resume from "../cv/Resume";

const UserEducation = () => {
  return (
    <div className="userInfo_container">
      <div className="left">
        <nav className="navbar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={vector} alt="" className="vector" />
          </Link>
          <div className="personal_info">განათლება</div>
          <div className="page_point" style={{ left: "80%" }}>
            3/3
          </div>
        </nav>
        <hr />
      </div>
      <Resume />
    </div>
  );
};

export default UserEducation;
