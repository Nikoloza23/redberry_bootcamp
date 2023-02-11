import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import UserInformation from "./pages/UserInformation";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import SubmitedCv from "./pages/SubmitedCv";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path="/userInfo" element={<UserInformation />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/cv" element={<SubmitedCv />} />
      </Routes>
    </>
  );
}

export default App;
