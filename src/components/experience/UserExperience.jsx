import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import vector from "../../assets/Vector.png";

import "./userExperience.scss";

import Resume from "../cv/Resume";

const UserExperience = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    const { position, employer, startDate, endDate, description } = getValues();

    const enteredExperienceValues = {
      Position: position,
      Employer: employer,
      StartDate: startDate,
      EndDate: endDate,
      Description: description,
    };

    localStorage.setItem(
      "userExperience",
      JSON.stringify(enteredExperienceValues)
    );

    navigate("/education");
  };

  const userExperience = JSON.parse(localStorage.getItem("userExperience"));

  return (
    <div className="userInfo_container">
      <div className="left">
        <nav className="navbar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={vector} alt="" className="vector" />
          </Link>
          <div className="personal_info">გამოცდილება</div>
          <div className="page_point" style={{ left: "80%" }}>
            2/3
          </div>
        </nav>
        <hr className="underline" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="userExperience_left">
            <div className="user_position">
              <label htmlFor="">თანამდებობა</label>
              <input
                defaultValue={userExperience?.Position}
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
                defaultValue={userExperience?.Employer}
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
                  "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს "}
              </span>
            </div>
            <div className="user_dates">
              <div className="start_data">
                <label htmlFor="">დაწყების რიცხვი</label>
                <input
                  defaultValue={userExperience?.StartDate}
                  type="date"
                  className={errors.startDate ? "input invalidInput" : "input"}
                  {...register("startDate", {
                    required: true,
                  })}
                />
                <span className="error_message">
                  {errors.startDate?.type === "required" && "გთოხვთ შეავსოთ"}
                </span>
              </div>
              <div className="end_date">
                <label htmlFor="">დამთავრების რიცხვი</label>
                <input
                  defaultValue={userExperience?.EndDate}
                  type="date"
                  className={errors.endDate ? "input invalidInput" : "input"}
                  {...register("endDate", {
                    required: true,
                  })}
                />
                <span className="error_message">
                  {errors.endDate?.type === "required" && "გთოხვთ შეავსოთ"}
                </span>
              </div>
            </div>
            <div className="user_description">
              <header>აღწერა</header>
              <textarea
                defaultValue={userExperience?.Description}
                className={
                  errors.description ? "textarea invalidInput" : "textarea"
                }
                {...register("description", {
                  required: true,
                })}
              />
              <span className="error_message">
                {errors.description?.type === "required" && "გთოხვთ შეავსოთ"}
              </span>
            </div>
            <div className="stepper">
              <Link to="/userInfo" style={{ textDecoration: "none" }}>
                <div className="back">უკან</div>
              </Link>
              <button className="next">შემდეგი</button>
            </div>
          </div>
        </form>
        <hr className="decorate" />
      </div>
      <Resume />
    </div>
  );
};

export default UserExperience;
