import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

function App() {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div>
          <div className='flex relative dark:bg-main-dark-bg'>
            {/* <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
            {activeMenu ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                Sidebar
              </div>
            ) : (
              <div className='w-16 dark:bg-secondary-dark-bg bg-white'>w-6</div>
            )}
          </div>
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'md:ml-16'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Main pages */}
              <Route path='/' element='Dashboard' />
              <Route path='#' element='Balance' />
              <Route path='/' element='Transactions' />
              <Route path='#' element='Analytics' />
              <Route path='#' element='Marketing' />
              <Route path='#' element='Exchange rates' />

              {/* Accept payments */}
              <Route path='#' element='KlashaCheckout' />
              <Route path='#' element='Payment Links' />

              {/* Send payments */}
              <Route path='#' element='KlashaWire' />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;