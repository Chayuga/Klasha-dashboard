import React, { useEffect } from 'react';
import { useStateContext } from './contexts/ContextProvider';

import { Navbar, Sidebar } from './components';
import './App.css';
import Routers from './components/Routes';
import MobileSideBar from './components/Sidebar/MobileSideBar';

function App() {
  const { fullMenu, mobileMenu } = useStateContext();

  return (
    <div className='flex w-full'>
      <div
        className={`${
          fullMenu ? 'w-52' : 'w-24'
        } fixed sidebar justify-center bg-white`}
      >
        <Sidebar />
      </div>

      {mobileMenu && (
        <div
          className={`${
            fullMenu ? 'w-52' : 'w-24'
          } fixed sidebar justify-center bg-white`}
        >
          <MobileSideBar />
        </div>
      )}

      <div
        className={`divide-y bg-main-bg overflow-none flex-grow md:mx-6 p-4   divide-solid ${
          fullMenu ? 'md:ml-52' : 'md:ml-24'
        }`}
      >
        <Navbar />
        <Routers />
      </div>
    </div>
  );
}

export default App;
