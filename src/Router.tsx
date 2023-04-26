import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Scan from "./pages/Scan/Scan";
import Owner from "./pages/Owner/Owner";

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/owner" element={<Owner />} />
    </Routes>
  )
}
