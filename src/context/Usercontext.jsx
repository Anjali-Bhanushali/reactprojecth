import React, { createContext } from "react";
export const DataContext = createContext();

const Usercontext = ({children}) => {

  const username = "Anjali Kumari";

  return (
    <DataContext.Provider value={username}>
      {children}
    </DataContext.Provider>
  )
}
export default  Usercontext;