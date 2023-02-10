import { Route, Routes } from "react-router";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import UserInformation from "./pages/UserInformation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path="/userInfo" element={<UserInformation />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
