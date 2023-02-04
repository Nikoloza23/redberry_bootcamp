import { Route, Routes } from "react-router";
import UserInfo from "./components/information/UserInfo";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
