import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [showDash, setShowDash] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    let url;
    url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.slice(0, 10));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <AppContext.Provider
      value={{ showDash, showNav, setShowDash, setShowNav, users }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
