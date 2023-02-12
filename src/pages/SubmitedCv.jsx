import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Resume from "../components/cv/Resume";

const SubmitedCv = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }, [navigate]);
  return (
    <div>
      <Resume type="resume" />
    </div>
  );
};

export default SubmitedCv;
