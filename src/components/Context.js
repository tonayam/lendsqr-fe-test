import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [showDash, setShowDash] = useState(false);
  const [users, setUsers] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    let url;
    url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.slice(0, 10));
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AppContext.Provider
      value={{
        showDash,
        showNav,
        setShowDash,
        setShowNav,
        users,
        showFilter,
        setShowFilter,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
