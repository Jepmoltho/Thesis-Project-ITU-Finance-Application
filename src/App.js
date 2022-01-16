import "./App.css";
import Parse from "parse";
import { Routes, Route } from "react-router-dom";
import UserRegistration from "./Components/UserRegistration";
import UserLogin from "./Components/UserLogin";
import DashBoard from "./Components/DashBoard";

Parse.initialize(
  "3YvX2ZiSGXP4ddXb18SYQoYV2UGfADetSkQ4QkQl",
  "xgPYhct1ooVhj35GULfNUoMYefUI5EFEivmzObz7"
);

Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
