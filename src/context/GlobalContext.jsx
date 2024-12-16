import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [product, setProduct] = useState(null);

  return (
    <GlobalContext.Provider value={{ product, setProduct }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
