import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import vector from "../../assets/Vector.png";
import addres from "../../assets/email.png";
import mobile from "../../assets/tel.png";

import pirobiti from "../../assets/Rectangle 9.png";

import "./userexperience.scss";
const UserExperience = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log("Data", data);
    const { position, employer, startDate, endDate, description } = getValues();

    localStorage.setItem("joinedUserPosition", position);
    localStorage.setItem("joinedUserEmployer", employer);
    localStorage.setItem("joinedUserStartDate", startDate);
    localStorage.setItem("joinedUserEndData", endDate);
    localStorage.setItem("joinedUserDescription", description);
    navigate("/education");
  };

  return (
    <div className="userInfo_container">
      <div className="left">
        <nav className="navbar">
          <Link to="/userInfo" style={{ textDecoration: "none" }}>
            <img src={vector} alt="" className="vector" />
          </Link>
          <div className="personal_info">გამოცდილება</div>
          <div className="page_point" style={{ left: "80%" }}>
            2/3
          </div>
          <hr />
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="userExperience_left">
              <div className="user_position">
                <label htmlFor="">თანამდებობა</label>
                <input
                  type="text"
                  placeholder="დეველოპერი, დიზაინერი, ა.შ."
                  className={errors.position ? "input invalidInput" : "input"}
                  {...register("position", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span className="error_message">
                  {errors.position?.type === "required" && "გთოხვთ შეავსოთ"}
                  {errors.position?.type === "minLength" &&
                    "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
                </span>
              </div>
              <div className="user_employer">
                <label htmlFor="">დამსაქმებელი</label>
                <input
                  type="text"
                  placeholder="დამსაქმებელი"
                  className={errors.employer ? "input invalidInput" : "input"}
                  {...register("employer", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span className="error_message">
                  {errors.employer?.type === "required" && "გთოხვთ შეავსოთ"}
                  {errors.employer?.type === "minLength" &&
                    "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
                </span>
              </div>
              <div className="user_dates">
                <div className="start_data">
                  <label htmlFor="">დაწყების რიცხვი</label>
                  <input
                    type="date"
                    className={
                      errors.startDate ? "input invalidInput" : "input"
                    }
                    {...register("startDate", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <span className="error_message">
                    {errors.startDate?.type === "required" && "გთოხვთ შეავსოთ"}
                    {errors.startDate?.type === "minLength" &&
                      "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
                  </span>
                </div>
                <div className="end_date">
                  <label htmlFor="">დამთავრების რიცხვი</label>
                  <input
                    type="date"
                    className={errors.endDate ? "input invalidInput" : "input"}
                    {...register("endDate", {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <span className="error_message">
                    {errors.startDate?.type === "required" && "გთოხვთ შეავსოთ"}
                    {errors.startDate?.type === "minLength" &&
                      "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
                  </span>
                </div>
              </div>
              <div className="user_description">
                <header>აღწერა</header>
                <input
                  type="text"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  className={
                    errors.description ? "input invalidInput" : "input"
                  }
                  {...register("description", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span className="error_message">
                  {errors.description?.type === "required" && "გთოხვთ შეავსოთ"}
                </span>
              </div>
              <hr />
              <button className="more_experience">
                მეტი გამოცდილების დამატება
              </button>
              <button className="next">შემდეგი</button>
            </div>
          </form>
        </nav>
      </div>
      <div className="right">
        <img src={pirobiti} alt="" className="joined_user_profile" />
        <div className="user_">
          <h1>{localStorage.getItem("joinedUserName")}</h1>
          <h1 className="joined_user_surname">
            {localStorage.getItem("joinedUserSurName")}
          </h1>
        </div>
        <div className="user_communication">
          <div className="joined_user_email">
            <img src={addres} alt="" />
            {localStorage.getItem("joinedUserEmail")}
          </div>
          <div className="joined_user_email">
            <img src={mobile} alt="" />
            {localStorage.getItem("joinedUserMobile")}
          </div>
        </div>
        <header>ჩემ შესახებ</header>
        <p className="joined_user_about">
          {localStorage.getItem("joinedUserAbout")}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default UserExperience;
