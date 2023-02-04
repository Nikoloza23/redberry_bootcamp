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
        <form>
          <div className="userInfo_left">
            <div className="inputs">
              <div>
                <label htmlFor="fname">სახელი</label>
                <input type="text" />
                <div className="error_message">min 2 aso</div>
              </div>
              <div>
                <label htmlFor="fname">გვარი</label>
                <input type="text" />
                <div className="error_message">min 2 aso</div>
              </div>
            </div>
          </div>
            <h1 className="add_photo">
              პირადი ფოტოს ატვირთვა <button>ატვირთვა</button>
            </h1>
            <div className="about_yourself">
             <h1>
                ჩემ შესახებ (არასავალდებულოა)
             </h1>
             <input type="text" />
            </div>
        </form>
      </div>
      <div className="right">Niko</div>
    </div>
  );
};

export default UserInfo;
