import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from '@mui/material/Tooltip';

import { links } from '../Sidebar/links';
import klashaFullLogo from '../../assets/logo/klasha__logo.svg';
import klashaKLogo from '../../assets/logo/klasha-k.svg';
import { useStateContext } from '../../contexts/ContextProvider';
import { Box, Button } from '@mui/material';

const MobileSideBar = () => {
  const { fullMenu, setFullMenu, mobile, setMobileMenu } = useStateContext();

  const activeLink =
    'flex items-center  pl-4 pt-3 pb-2.5 text-[#EF2C5A] text-md';

  const normalLink =
    'flex items-center  pl-4 pt-3 pb-2.5 text-md text-black hover:text-gray-500';

  useEffect(() => {
    setFullMenu(true);
<<<<<<< HEAD
  }, [setFullMenu]);
=======
  }, []);
>>>>>>> dbfdc9464341338456c48b76acdf7b7c67b1b2c1

  return (
    <>
      {mobile && (
        <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto bg-sidebar-bg z-50'>
          <div>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '4rem 1rem 0 1rem',
                flexWrap: 'wrap',
              }}
            >
              <Button
                type='button'
                onClick={() =>
                  setMobileMenu((prevMobileMenu) => !prevMobileMenu)
                }
              >
                <ArrowBackIcon />
              </Button>

              <Link to='/' className=' gap-3 '>
                {fullMenu ? (
                  <img src={klashaFullLogo} alt='klasha logo' />
                ) : (
                  <img src={klashaKLogo} alt='klasha logo' />
                )}
              </Link>
            </Box>
            <div className='flex flex-col items-center '>
              <div className='mt-10 '>
                {links.map((item) => (
                  <div key={item.title}>
                    <p className='text-gray-400 my-3 mt-4 '>
                      {fullMenu ? `${item.title1}` : `${item.title2}`}
                    </p>
                    {item.links.map((link) => (
                      <NavLink
                        to={link.path ? `/${link.path}` : '#'}
                        key={link.name}
                        className={({ isActive }) => [
                          isActive ? activeLink : normalLink,
                          !link.path && normalLink,
                        ]}
                      >
                        {fullMenu ? (
                          <div
                            className={`flex items-center {({ isActive }) => [
                            isActive ? activeLink : normalLink,
                          ]}`}
                          >
                            <p className='mr-2'>{link.iconActive}</p>
                            <p>{link.name}</p>
                          </div>
                        ) : (
                          <div
                            className={`flex items-center {({ isActive }) => [
                            isActive ? activeLink : normalLink,
                          ]}`}
                          >
                            <Tooltip title={link.name} placement='right'>
                              <p className='mr-2'>{link.iconActive}</p>
                            </Tooltip>
                          </div>
                        )}
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
              {/* lower hide button */}
              <button
                type='button'
                onClick={() => setFullMenu((prevActiveMenu) => !prevActiveMenu)}
                className='flex items-center justify-center outline rounded-md mx-5 p-3 hover:bg-light-gray mt-20'
              >
                {fullMenu ? (
                  <>
                    <AiOutlineLeft />
                    <span className='ml-2'>Hide panel</span>
                  </>
                ) : (
                  <>
                    <AiOutlineRight />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSideBar;
