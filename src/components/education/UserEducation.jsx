import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";

import Resume from "../cv/Resume";

import vector from "../../assets/Vector.png";

import "react-toastify/dist/ReactToastify.css";
import "./userEducation.scss";

//Education Page
const UserEducation = () => {
  const navigate = useNavigate();
  const [degree, setDegree] = useState(null);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => {
        setDegree(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onFormSubmit = () => {
    const { school, quality, QyDate, QyDescription } = getValues();

    const educations = {
      School: school,
      Quality: quality,
      QualityDate: QyDate,
      QualityDescription: QyDescription,
    };

    localStorage.setItem("userEducation", JSON.stringify(educations));

    navigate("/cv");
  };
  const userEducation = JSON.parse(localStorage.getItem("userEducation"));

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
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="user_education_container">
            <div className="user_school">
              <label htmlFor="">სასწავლებელი</label>
              <input
                defaultValue={userEducation?.School}
                type="text"
                placeholder="სასწავლებელი"
                className={errors.school ? "input invalidInput" : "input"}
                {...register("school", {
                  required: true,
                  minLength: 2,
                })}
              />

              <span className="error_message">
                {errors.school?.type === "required" && "გთოხვთ შეავსოთ"}
                {errors.school?.type === "minLength" &&
                  "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
              </span>
            </div>
            <div className="user_education_time">
              <div className="user_degree">
                <label htmlFor="">ხარისხი</label>
                <select
                  defaultValue={userEducation?.Quality}
                  className={errors.quality ? " invalidInput" : ""}
                  {...register("quality", {
                    required: true,
                  })}
                >
                  {degree &&
                    degree.map((degrees) => (
                      <option key={degrees.id}>{degrees.title}</option>
                    ))}
                </select>
                <span className="error_message">
                  {errors.quality?.type === "required" && "გთოხვთ შეავსოთ"}
                </span>
              </div>
              <div className="user_end_date">
                <label htmlFor="">დამთავრების რიცხვი</label>
                <input
                  defaultValue={userEducation?.QualityDate}
                  type="date"
                  className={errors.QyDate ? "input invalidInput" : "input"}
                  {...register("QyDate", {
                    required: true,
                  })}
                />
                <span className="error_message">
                  {errors.QyDate?.type === "required" && "გთოხვთ შეავსოთ"}
                </span>
              </div>
            </div>
            <div className="user_description">
              <header>აღწერა</header>
              <textarea
                defaultValue={userEducation?.QualityDescription}
                className={
                  errors.QyDescription ? "textarea invalidInput" : "textarea"
                }
                {...register("QyDescription", {
                  required: true,
                })}
              />
              <span className="error_message">
                {errors.QyDescription?.type === "required" && "გთოხვთ შეავსოთ"}
              </span>
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
            <Link to="/experience" style={{ textDecoration: "none" }}>
              <div className="back">უკან</div>
            </Link>
            <button className="next">შემდეგი</button>
          </div>
        </form>
      </div>
      <Resume />
    </div>
  );
};

export default UserEducation;
