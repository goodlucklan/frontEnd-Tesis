import React, { useState, createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };
      await fetch(`https://sample-node-deployment-7u2d.onrender.com/loginUser`, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          console.log("validar_Usuario", response);
          localStorage.setItem("User", JSON.stringify(response));
          setUser(response);
          setIsLoading(false);
        });
    } catch (error) {
      console.log("ERROR", error);
      setError(error.toString());
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
