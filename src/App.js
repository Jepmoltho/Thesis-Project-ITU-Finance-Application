import "./App.css";
import Parse from "parse";
import { Routes, Route } from "react-router-dom";
import UserRegistration from "./Pages/UserRegistration";
import UserLogin from "./Pages/UserLogin";
import DashBoard from "./Pages/DashBoard";

Parse.initialize(
  "3YvX2ZiSGXP4ddXb18SYQoYV2UGfADetSkQ4QkQl",
  "xgPYhct1ooVhj35GULfNUoMYefUI5EFEivmzObz7"
);

Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#E5E5E5" }}>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
