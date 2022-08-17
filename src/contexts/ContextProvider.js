import { useMediaQuery } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [fullMenu, setFullMenu] = useState(true);
  const [toggleOn, setToggleOn] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [onMobile, setOnMobile] = useState(true);

  const mobile = useMediaQuery('(max-width:770px)');
  const tablet = useMediaQuery('(max-width:1024px)');
  const laptop = useMediaQuery('(min-width:1024px)');

  const handleMobileMenu = () => {
    setOnMobile(true);
  };

  return (
    <StateContext.Provider
      value={{
        mobile,
        tablet,
        laptop,
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
