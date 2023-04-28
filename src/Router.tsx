import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Scan from "./pages/Scan/Scan";
import Owner from "./pages/Owner/Owner";
import Dependencies from "./pages/Dependencies/Dependencies";
import Dependency from "./pages/Dependency/Dependency";



export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/dependencies" element={<Dependencies />} />
        <Route path="/dependency/:airport" element={<Dependency />}/>
    </Routes>
  )
}
