import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/profile-api";

// Create Context API
const AuthContext = React.createContext({
  userId: "",
  role: "",
  token: "",
  profile: {},
  isAdmin: false,
  isMember: false,
  isRider: false,
  isPartner: false,
  isLoggedIn: false,
  redirectLogin: (role) => {},
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
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isRider, setIsRider] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  // Check Token (!! = convert to Boolean)
  const userIsLoggedIn = !!token;

  // GET USER LOGIN DATA
  useEffect(() => {
    if (token) {
      getProfile(token).then((res) => {
        setUserId(res.data._id);
        setRole(res.data.role);
        setProfile(res.data);
      });
    }

    if (role && role !== "") {
      // MEMBER
      if (role === "MEMBER") {
        setIsMember(true);
      } else {
        setIsMember(false);
      }

      // RIDER
      if (role === "RIDER") {
        setIsRider(true);
      } else {
        setIsRider(false);
      }

      // PARTNER
      if (role === "PARTNER") {
        setIsPartner(true);
      } else {
        setIsPartner(false);
      }

      // ADMIN
      if (role === "ADMIN") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [token, role]);

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

  const redirectHandler = (role) => {
    if (role === "ADMIN") {
      navigate("/admin");
    }
    if (role === "MEMBER") {
      navigate("/profile/member");
    }
    if (role === "RIDER") {
      navigate("/profile/rider");
    }
    if (role === "PARTNER") {
      navigate("/profile/partner");
    }
  };

  // Context Value
  const contextValue = {
    token: token,
    userId: userId,
    role: role,
    profile: profile,
    isAdmin: isAdmin,
    isMember: isMember,
    isRider: isRider,
    isPartner: isPartner,
    isLoggedIn: userIsLoggedIn,
    redirectLogin: redirectHandler,
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
