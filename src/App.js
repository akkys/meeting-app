import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./container/Home/HomePage";
import RegisterPage from "./container/Register/RegisterPage";
import LoginPage from "./container/Login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
