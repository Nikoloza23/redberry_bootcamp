import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import vector from "../../assets/Vector.png";

import "./userInfo.scss";

const UserInfo = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    const { name, surName, image, tel, email, about } = getValues();

    localStorage.setItem("joinedUserName", name);
    localStorage.setItem("joinedUserSurName", surName);
    localStorage.setItem("joinedUserProfile", JSON.stringify(image));
    localStorage.setItem("joinedUserMobile", tel);
    localStorage.setItem("joinedUserEmail", email);
    localStorage.setItem("joinedUserAbout", about);

    navigate("/experience");
  };

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
          <hr />
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="userInfo_left">
              <div className="inputs">
                <div>
                  <label htmlFor="">სახელი</label>
                  <input
                    defaultValue={localStorage.getItem("joinedUserName")}
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
                    {errors.name?.type === "minLength" &&
                      "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
                    {errors.name?.type === "pattern" &&
                      "გამოიყენეთ ქართული ასოები"}
                  </span>
                </div>
                <div>
                  <label htmlFor="">გვარი</label>
                  <input
                    defaultValue={localStorage.getItem("joinedUserSurName")}
                    type="text"
                    placeholder="გვარი"
                    className={errors.surName ? "input invalidInput" : "input"}
                    {...register("surName", {
                      required: true,
                      maxLength: 12,
                      minLength: 2,
                      pattern: /[ა-ზა-ზ]/gi,
                    })}
                  />
                  <span className="error_message">
                    {errors.surName?.type === "required" && "გთოხვთ შეავსოთ"}
                    {errors.surName?.type === "pattern" &&
                      "გამოიყენეთ ქართული ასოები"}
                    {errors.surName?.type === "minLength" &&
                      "სახელი უნდა შეიცავდეს 2 დან 12 სიმბოლომდე"}
                  </span>
                </div>
              </div>
            </div>
            <div className="bottom_section">
              <h1 className="add_photo">პირადი ფოტოს ატვირთვა</h1>
              <label htmlFor="fileInput" className="user_photo">
                <input
                  style={{ display: "none" }}
                  id="fileInput"
                  accept="image/png, image/jpeg, .txt, .doc"
                  type="file"
                  {...register("fileInput", {
                    required: false,
                  })}
                />
                ატვირთვა
              </label>
              <div className="about_yourself">
                <h1>ჩემ შესახებ (არასავალდებულოა)</h1>
                <input
                  defaultValue={localStorage.getItem("joinedUserAbout")}
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
                  defaultValue={localStorage.getItem("joinedUserEmail")}
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
                  defaultValue={localStorage.getItem("joinedUserMobile")}
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
        </nav>
      </div>
    </div>
  );
};

export default UserInfo;
