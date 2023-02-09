import addres from "../../assets/email.png";
import mobile from "../../assets/tel.png";

import pirobiti from "../../assets/Rectangle 9.png";

import "./resume.scss";

const Resume = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userExperience = JSON.parse(localStorage.getItem("userExperience"));
  return (
    <div className="cv_container">
      <img src={pirobiti} alt="" className="joined_user_profile" />
      <div className="user_">
        <h1>{userInfo.FirstName}</h1>
        <h1 className="joined_user_surname">{userInfo.LastName}</h1>
      </div>
      <div className="user_communication">
        <div className="joined_user_email">
          {userInfo.Email ? <img src={addres} alt="" /> : ""}
          {userInfo.Email}
        </div>
        <div className="joined_user_email">
          {userInfo.Mobile ? <img src={mobile} alt="" /> : ""}
          {userInfo.Mobile}
        </div>
      </div>
      {userInfo.About ? <header>ჩემ შესახებ</header> : ""}
      <p className="joined_user_about">{userInfo.About}</p>
      {userInfo.About ? <hr /> : ""}
      <div className="experience_container">
        <header>გამოცდილება</header>
        <div className="user_position">
          {userExperience?.Position}
          <div className="user_employer">{userExperience?.Employer}</div>
        </div>
        <div className="user_start_date">
          {userExperience?.StartDate}
          <div className="user_last_date">{userExperience?.EndDate}</div>
        </div>
        <p className="user_added_description">{userExperience?.Description}</p>
        {userExperience.Description ? <hr /> : ""}
      </div>
    </div>
  );
};

export default Resume;
