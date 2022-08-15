import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [fullMenu, setFullMenu] = useState(true);
  const [toggleOn, setToggleOn] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [onMobile, setOnMobile] = useState(true);

  const handleMobileMenu = () => {
    setOnMobile(true);
  };

  return (
    <StateContext.Provider
      value={{
        showMenu,
        setShowMenu,
        fullMenu,
        setFullMenu,
        toggleOn,
        setToggleOn,
        onMobile,
        setOnMobile,
        handleMobileMenu,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
