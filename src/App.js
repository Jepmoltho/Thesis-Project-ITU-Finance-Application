import "./App.css";
import Parse from "parse";
import { Routes, Route } from "react-router-dom";
import UserRegistration from "./Pages/UserRegistration";
import UserLogin from "./Pages/UserLogin";
import DashBoard from "./Pages/DashBoard";

Parse.initialize(
  "oGOvL1CFBEnljLaloy0eCHmOmM74pmZ1XQRvdD1J", // Application ID
  "wecgeMN28czEiIsPPmXix5HfShAu2T8GsFHzCHrZ" // JavaScript Key
);

Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#eff0f3" }}>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
