import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../services/User.Context";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading } = useContext(AuthenticationContext);

  const handleEvent = async (e) => {
    e.preventDefault();
    await onLogin(email, password);
  };
  return (
    <div className="container mt-4">
      <h1 className="text-center mt-4">Welcome</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleEvent}>
            {isLoading ? "Cargando...." : "Submit"}
        </button>
      </form>
    </div>
  );
};
