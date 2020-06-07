import React from 'react';

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [giphs, setGiphs] = React.useState([]);
  const [trending, setTrending] = React.useState([]);

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        giphs,
        setGiphs,
        trending,
        setTrending,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
