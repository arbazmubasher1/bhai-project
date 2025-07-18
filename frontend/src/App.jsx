import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import ForgotPassword from "./pages/ForgotPassword";      // New
import ResetPassword from "./pages/ResetPassword";        // New

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<LoginSuccess />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
