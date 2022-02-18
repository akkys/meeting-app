import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./container/Home/HomePage";
import RegisterPage from "./container/Register/RegisterPage";
import LoginPage from "./container/Login/LoginPage";
import NavigationBar from "./components/Header/NavigationBar";
import Settings from "./container/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      {/* <NavigationBar /> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
