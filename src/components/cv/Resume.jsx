import addres from "../../assets/email.png";
import mobile from "../../assets/tel.png";


import "./resume.scss";
import "./mini.scss";

const Resume = ({ type }) => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userExperience = JSON.parse(localStorage.getItem("userExperience"));
  const userEducation = JSON.parse(localStorage.getItem("userEducation"));

  return (
    <div className={type === "resume" ? "mini_cv" : "cv_container"}>
      <img src={userInfo?.Profile} alt="" className="joined_user_profile" />
      <div className="user_">
        <h1>{userInfo?.FirstName}</h1>
        <h1 className="joined_user_surname">{userInfo?.LastName}</h1>
      </div>
      <div className="user_communication">
        <div className="joined_user_email">
          {userInfo?.Email ? <img src={addres} alt="" /> : ""}
          {userInfo?.Email}
        </div>
        <div className="joined_user_email">
          {userInfo?.Mobile ? <img src={mobile} alt="" /> : ""}
          {userInfo?.Mobile}
        </div>
      </div>
      {userInfo?.About ? <header>ჩემ შესახებ</header> : ""}
      <p className="joined_user_about">{userInfo?.About}</p>
      {userInfo?.About ? <hr /> : ""}
      <div className="experience_container">
        {userExperience?.Position ? <header>გამოცდილება</header> : ""}
        <div className="user_position">
          {userExperience?.Position}
          <div className="user_employer">{userExperience?.Employer}</div>
        </div>
        <div className="user_start_date">
          {userExperience?.StartDate}
          <div className="user_last_date">{userExperience?.EndDate}</div>
        </div>
        <p className="user_added_description">{userExperience?.Description}</p>
        {userExperience?.Description ? <hr /> : ""}
      </div>
      <div className="experience_container">
        {userEducation?.School ? <header>განათლება</header> : ""}
        <div className="user_position">
          {userEducation?.School}
          <div className="user_employer">{userEducation?.Quality}</div>
        </div>
        <div className="user_start_date">
          <div className="user_last_date">{userEducation?.QualityDate}</div>
        </div>
        <p className="user_added_description">
          {userEducation?.QualityDescription}
        </p>
      </div>
    </div>
  );
};

export default Resume;
