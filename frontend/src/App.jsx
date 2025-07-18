import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import ForgotPassword from "./pages/ForgotPassword";     // ✅ Add this
import ResetPassword from "./pages/ResetPassword";       // ✅ Add this

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<LoginSuccess />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />   {/* ✅ Add this */}
        <Route path="/reset-password" element={<ResetPassword />} />     {/* ✅ Add this */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
