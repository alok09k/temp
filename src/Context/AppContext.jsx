import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [showAuth, setShowAuth] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSeller, setShowSeller] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [isauth, setIsAuth] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const server = "http://localhost:3000"

  const value = {
    showAuth,
    setShowAuth,
    showLogin,
    setShowLogin,
    showSeller,
    setShowSeller,
    loggedInUser,
    setLoggedInUser,
    dropdownMenu,
    setDropdownMenu,
    isauth,
    setIsAuth,
    showAdmin,
    setShowAdmin,
    server
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token ) {
      setShowSeller(false);
    }
  }, [showSeller]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
