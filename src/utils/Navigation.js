import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../services/User.Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { NavBar } from "../components/NavBar";
import { Product } from "../pages/Product";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const [user, SetUser] = useState(null);
  useEffect(() => {
    const LoggedUserJSON = localStorage.getItem("User");
    if (LoggedUserJSON) {
      const user = JSON.parse(LoggedUserJSON);
      console.log(user);
      SetUser(user);
    }
  }, []);
  if (isAuthenticated || user) {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </Router>
    );
  }
  return <Login />;
};
