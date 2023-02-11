import { Link } from "react-router-dom";

import vector from "../../assets/Vector.png";

import Resume from "../cv/Resume";

import "./usereducation.scss";

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
        <hr className="underline" />
        <div className="user_education_container">
          <div className="user_school">
            <label htmlFor="">სასწავლებელი</label>
            <input type="text" placeholder="სასწავლებელი" />
          </div>
          <div className="user_education_time">
            <div className="user_degree">
              <label htmlFor="">ხარისხი</label>
              <input type="text" placeholder="ხარისხი" />
            </div>
            <div className="user_end_date">
              <label htmlFor="">დამთავრების რიცხვი</label>
              <input type="date" />
            </div>
          </div>
          <div className="user_description">
            <header>აღწერა</header>
            <input
              type="text"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            />
          </div>
        </div>
        <a
          className="redberry_link"
          href="https://ge.linkedin.com/company/redberry-%E2%80%A2-%E1%83%A0%E1%83%94%E1%83%93%E1%83%91%E1%83%94%E1%83%A0%E1%83%98"
          style={{ textDecoration: "none" }}
        >
          <div>მეტი</div>
        </a>
        <hr className="decorate" />
        <div className="stepper">
          <div className="back">უკან</div>
          <button className="next">შემდეგი</button>
        </div>
      </div>
      <Resume />
    </div>
  );
};

export default UserEducation;
