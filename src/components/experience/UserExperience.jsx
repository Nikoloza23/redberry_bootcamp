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
    const { name, surName, image, tel, email, about } = getValues();

    localStorage.setItem("joinedUserName", name);
    localStorage.setItem("joinedUserSurName", surName);
    localStorage.setItem("joinedUserMobile", tel);
    localStorage.setItem("joinedUserEmail", email);
    localStorage.setItem("joinedUserAbout", about);
    navigate("/experience");
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
              <label htmlFor="">თანამდებობა</label>
              <input
                type="text"
                className={errors.name ? "input invalidInput" : "input"}
                {...register("name", {
                  required: true,
                  minLength: 2,
                  pattern: /[ა-ზა-ზ]/gi,
                })}
              />
              <span className="error_message">
                {errors.name?.type === "required" && "გთოხვთ შეავსოთ"}
                {errors.name?.type === "minLength" &&
                  "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
                {errors.name?.type === "pattern" && "გამოიყენეთ ქართული ასოები"}
              </span>
              <div className="about_yourself">
                <h1>ჩემ შესახებ (არასავალდებულოა)</h1>
                <input
                  type="text"
                  {...register("about", {
                    required: false,
                  })}
                />
                <div className="email">
                  <h1>ელ.ფოსტა</h1>
                  <input
                    type="email"
                    className={errors.email ? "input invalidInput" : "input"}
                    {...register("email", {
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@redberry.ge/,
                    })}
                  />
                  <span className="error_message">
                    {errors.email?.type === "required" &&
                      "მიუთითეთ თქვენი მეილი"}
                    {errors.email?.type === "pattern" &&
                      "არასწორი მეილის ნიმუში, მეილი უნდა მთავრდებოდეს @redberry.ge-ით"}
                  </span>
                </div>
                <div className="mobile">
                  <h1>მობილურის ნომერი</h1>
                  <input
                    type="tel"
                    placeholder="+9955__ __ __ __"
                    className={errors.tel ? "input invalidInput" : "input"}
                    {...register("tel", {
                      required: true,
                      maxLength: 13,
                      pattern: /^\+[0-9]{3}[0-9]{9}/g,
                    })}
                  />
                  <span className="error_message">
                    {errors.tel?.type === "required" &&
                      "მიუთითეთ თქვენი ნომერი სწორ ფორმატში"}
                    {errors.tel?.type === "pattern" &&
                      "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"}
                  </span>
                </div>
              </div>
              <button className="next">შემდეგი</button>
            </div>
          </form>
        </nav>
      </div>
      <div className="right">
        <img src={pirobiti} alt="" className="joined_user_profile"/>
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
