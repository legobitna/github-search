import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Repository from "./pages/Repository";
import PublicNavbar from "./components/PublicNavbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="text-center">
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:user" element={<Repository />} />
      </Routes>
    </div>
  );
};
export default App;
