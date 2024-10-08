import React from 'react';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { assets } from '../../../assets/Images';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from 'react-router-dom';

export const PanelLayout = ({ children }) => {
  const [sideMenu, setSideMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box display={'flex'} alignItems={'center'} width={'100%'} height={'100vh'}>
      <Box
        height={'100%'}
        alignItems={!sideMenu && 'center'}
        width={sideMenu ? '600px' : { xxs: '80px', base: '350px' }}
        sx={{
          transition: 'width 0.4s',
        }}
      >
        {/*Side menu Header For mobile screen  */}
        <Box
          py={'25px'}
          paddingX={sideMenu && '10px'}
          display={!sideMenu && { xxs: 'flex', base: 'none' }}
          justifyContent={'center'}
        >
          {sideMenu ? (
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={sideMenu ? 'space-between' : 'center'}
            >
              <Box width={sideMenu ? '100px' : { xxs: '50px', base: '120px' }}>
                <img
                  src={assets?.logo}
                  alt='Logo'
                  loading='lazy'
                  width={'100%'}
                  height={'100%'}
                />
              </Box>
              <Box
                sx={{ cursor: 'pointer' }}
                onClick={() => setSideMenu(false)}
              >
                <KeyboardDoubleArrowLeftIcon
                  sx={{
                    color: 'primary.main',
                    height: '35px',
                    width: '35px',
                  }}
                />
              </Box>
            </Box>
          ) : (
            <Box sx={{ cursor: 'pointer' }} onClick={() => setSideMenu(true)}>
              <MenuIcon
                sx={{
                  color: 'primary.main',
                  height: '35px',
                  width: '35px',
                }}
              />
            </Box>
          )}
        </Box>

        {/*Side menu Header For large screen  */}
        <Box
          py={'25px'}
          width={'150px'}
          display={{ xxs: 'none', base: 'flex' }}
          justifyContent={'center'}
          mx={'auto'}
        >
          <img
            src={assets?.logo}
            alt='Logo'
            loading='lazy'
            width={'100%'}
            height={'100%'}
          />
        </Box>

        {/*Side menu body For large screen  */}
        <Box
          display={{ xxs: 'none', base: 'flex' }}
          flexDirection={'column'}
          gap={2}
        >
          <Box
            display={'flex'}
            gap={1}
            justifyContent={'start'}
            paddingLeft={'20px'}
            alignItems={'center'}
            bgcolor={currentPath === '/users' && 'primary.main'}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/users')}
          >
            <Box>
              <PersonIcon
                sx={{
                  color: currentPath === '/users' ? 'white' : 'primary.main',
                  height: '30px',
                  width: '30px',
                }}
              />
            </Box>
            <Typography
              variant='base'
              color={currentPath === '/users' ? 'white' : 'priamry.main'}
            >
              Users
            </Typography>
          </Box>

          <Box
            display={'flex'}
            gap={1}
            justifyContent={'start'}
            paddingLeft={'20px'}
            alignItems={'center'}
            bgcolor={currentPath === '/chatroom' && 'primary.main'}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/chatroom')}
          >
            <Box>
              <PersonIcon
                sx={{
                  color: currentPath === '/chatroom' ? 'white' : 'priamry.main',
                  height: '30px',
                  width: '30px',
                }}
              />
            </Box>
            <Typography
              variant='base'
              color={currentPath === '/chatroom' ? 'white' : 'priamry.main'}
            >
              Chat Room
            </Typography>
          </Box>
        </Box>

        {/*Side menu body For mobile screen  */}
        <Box
          display={{ xxs: 'block', base: 'none' }}
          flexDirection={'column'}
          gap={2}
        >
          {sideMenu ? (
            <Box
              display={'flex'}
              gap={1}
              justifyContent={'start'}
              paddingLeft={'20px'}
              alignItems={'center'}
              bgcolor={currentPath === '/users' && 'primary.main'}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/users')}
            >
              <Box>
                <PersonIcon
                  sx={{
                    color: currentPath === '/users' ? 'white' : 'primary.main',
                    height: '30px',
                    width: '30px',
                  }}
                />
              </Box>
              <Typography
                variant='base'
                color={currentPath === '/users' ? 'white' : 'priamry.main'}
              >
                Users
              </Typography>
            </Box>
          ) : (
            <Box
              display={'flex'}
              gap={1}
              justifyContent={'start'}
              paddingLeft={'20px'}
              alignItems={'center'}
              bgcolor={currentPath === '/users' && 'primary.main'}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/users')}
            >
              <Box>
                <PersonIcon
                  sx={{
                    color: currentPath === '/users' ? 'white' : 'primary.main',
                    height: '30px',
                    width: '30px',
                  }}
                />
              </Box>
            </Box>
          )}

          {sideMenu ? (
            <Box
              display={'flex'}
              gap={1}
              justifyContent={'start'}
              paddingLeft={'20px'}
              alignItems={'center'}
              bgcolor={currentPath === '/chatroom' && 'primary.main'}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/chatroom')}
            >
              <Box>
                <PersonIcon
                  sx={{
                    color:
                      currentPath === '/chatroom' ? 'white' : 'priamry.main',
                    height: '30px',
                    width: '30px',
                  }}
                />
              </Box>
              <Typography
                variant='base'
                color={currentPath === '/chatroom' ? 'white' : 'priamry.main'}
              >
                Chat Room
              </Typography>
            </Box>
          ) : (
            <Box
              display={'flex'}
              gap={1}
              justifyContent={'start'}
              paddingLeft={'20px'}
              alignItems={'center'}
              bgcolor={currentPath === '/chatroom' && 'primary.main'}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/chatroom')}
            >
              <Box>
                <PersonIcon
                  sx={{
                    color:
                      currentPath === '/chatroom' ? 'white' : 'priamry.main',
                    height: '30px',
                    width: '30px',
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Box
        width={'100%'}
        height={'100%'}
        px={'20px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        bgcolor={'primary.lightGray'}
        overflow={'auto'}
      >
        {children}
      </Box>
    </Box>
  );
};
