import { useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import vector from "../../assets/Vector.png";

import "./userInfo.scss";

//User Info Section
const UserInfo = () => {
  const navigate = useNavigate();

  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    console.log(e);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    const { name, surName, tel, email, about } = getValues();

    const enteredValues = {
      FirstName: name,
      LastName: surName,
      Profile: baseImage,
      Mobile: tel,
      Email: email,
      About: about,
    };
    localStorage.setItem("user", JSON.stringify(enteredValues));

    navigate("/experience");
  };

  const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="userInfo_container">
      <div className="left">
        <nav className="navbar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={vector} alt="" className="vector" />
          </Link>
          <div className="personal_info">პირადი ინფო</div>
          <div className="page_point" style={{ left: "80%" }}>
            1/3
          </div>
        </nav>
        <hr className="underline" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="userInfo_left">
            <div className="inputs">
              <div>
                <label htmlFor="">სახელი</label>
                <input
                  defaultValue={userInfo?.FirstName}
                  placeholder="სახელი"
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
                  {errors.name?.type === "pattern" &&
                    "გამოიყენეთ ქართული ასოები"}
                  {errors.name?.type === "minLength" &&
                    "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"}
                </span>
              </div>
              <div>
                <label htmlFor="">გვარი</label>
                <input
                  defaultValue={userInfo?.LastName}
                  type="text"
                  placeholder="გვარი"
                  className={errors.surName ? "input invalidInput" : "input"}
                  {...register("surName", {
                    required: true,
                    minLength: 2,
                    pattern: /[ა-ზა-ზ]/gi,
                  })}
                />
                <span className="error_message">
                  {errors.surName?.type === "required" && "გთოხვთ შეავსოთ"}
                  {errors.surName?.type === "pattern" &&
                    "გამოიყენეთ ქართული ასოები"}
                  {errors.surName?.type === "minLength" &&
                    "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"}
                </span>
              </div>
            </div>
          </div>
          <div className="bottom_section">
            <label htmlFor="fileInput" className="user_photo">
              <input
                style={{ display: "none" }}
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
                id="fileInput"
              />
              ატვირთვა
            </label>
            {}
            <h1 className="add_photo">პირადი ფოტოს ატვირთვა</h1>
            <div className="about_yourself">
              <h1>ჩემ შესახებ (არასავალდებულოა)</h1>
              <input
                defaultValue={userInfo?.About}
                type="text"
                placeholder="ზოგადი ინფო შენს შესახებ"
                {...register("about", {
                  required: false,
                })}
              />
            </div>
            <div className="email">
              <h1>ელ.ფოსტა</h1>
              <input
                defaultValue={userInfo?.Email}
                type="email"
                placeholder="...@redberry.ge"
                className={errors.email ? "input invalidInput" : "input"}
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@redberry.ge/,
                })}
              />
              <span className="error_message">
                {errors.email?.type === "required" && "მიუთითეთ თქვენი მეილი"}
                {errors.email?.type === "pattern" &&
                  "არასწორი მეილის ნიმუში, მეილი უნდა მთავრდებოდეს @redberry.ge-ით"}
              </span>
            </div>
            <div className="mobile">
              <h1>მობილურის ნომერი</h1>
              <input
                defaultValue={userInfo?.Mobile}
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
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
