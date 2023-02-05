import { Route, Routes } from "react-router";
import UserInfo from "./components/information/UserInfo";
import Experience from "./pages/Experience";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
