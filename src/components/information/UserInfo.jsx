import vector from "../../assets/Vector.png";
import "./userInfo.scss";

const UserInfo = () => {
  return (
    <div className="userInfo_container">
      <div className="left">
        <nav className="navbar">
          <img src={vector} alt="" className="vector" />
          <div className="personal_info">პირადი ინფო</div>
          <div className="page_point">1/3</div>
          <hr />
        </nav>
        <div className="userInfo_left">
          <form>
            <div className="input_wrapper">
              <div className="name_input">
                <label htmlFor="fname">სახელი</label>
                <input type="text" name="" id="" />
                <div className="error_message">min 2 aso</div>
              </div>
              <div className="surname_input">
                <label htmlFor="fname">გვარი</label>
                <input type="text" name="" id="" />
                <div className="error_message">min 2 aso</div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="right">Niko</div>
    </div>
  );
};

export default UserInfo;
