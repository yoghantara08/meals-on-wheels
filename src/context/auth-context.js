import React, { useEffect, useState } from "react";

// Create Context API
const AuthContext = React.createContext({
  userId: "",
  role: "",
  token: "",
  isAdmin: false,
  isMember: false,
  isRider: false,
  isPartner: false,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// Retrive Stored Token From Local Storage
const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  return {
    token: storedToken,
  };
};

// Context Provider
export const AuthContextProvider = (props) => {
  const storedToken = retriveStoredToken();
  let initialToken;

  if (storedToken) {
    initialToken = storedToken.token;
  }

  // USE STATE
  const [token, setToken] = useState(initialToken);

  // Check Token (!! = convert to Boolean)
  const userIsLoggedIn = !!token;

  // GET USER LOGIN DATA
  useEffect(() => {
    if (token) {
    }
  }, [token]);

  // LOGOUT
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // LOGIN
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  // Context Value
  const contextValue = {
    token: token,
    userId: "",
    role: "",
    isAdmin: false,
    isMember: false,
    isRider: false,
    isPartner: false,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
