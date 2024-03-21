import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState('');
  

  const getData = item => {
    setData(item);
  };
  

  return (
    <DataContext.Provider value={{ data, getData  }}>
      {children}
    </DataContext.Provider>
  );
};
