// Library import
import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { assets } from '../../../assets/Images';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
// Local import
import { sideMenuRoutes } from '../../../routes/config';

export const PanelLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPathName = sideMenuRoutes.find(
    (item) => item.path === currentPath
  )?.moduleName;

  const [sideMenu, setSideMenu] = useState(
    window.innerWidth >= 992 ? true : false
  );

  const handleResize = () => {
    window.innerWidth >= 992 ? setSideMenu(true) : setSideMenu(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      width={'100%'}
      height={'100vh'}
      position={'relative'}
    >
      <Box
        height={'100%'}
        alignItems={!sideMenu && 'center'}
        width={sideMenu ? { xxs: '250px', base: '300px' } : '80px'}
        sx={{
          transition: 'width 0.4s',
        }}
        position={{ xxs: 'absolute', base: 'relative' }}
        top={'0px'}
        bottom={'0px'}
        left={'0px'}
        bgcolor={'white'}
        boxShadow={{xxs:sideMenu && '1px 0px 12px 1px rgba(150, 150, 150, 0.3)',base:'none'}}
      >
        {/*Side menu Header */}
        <Box
          pt={'22px'}
          pb={'25px'}
          display={'flex'}
          justifyContent={sideMenu ? 'space-between' : 'center'}
          alignItems={'center'}
          mx={sideMenu && '8px'}
          position={'relative'}
          my={{ xxs: 'auto', base: '20px' }}
        >
          <Box
            display={'flex'}
            width={{ xxs: '100px', base: '120px' }}
            position={'absolute'}
            left={!sideMenu ? '-300px' : '0'}
            sx={{
              transition: '0.4s',
            }}
            ml={sideMenu && '6px'}
          >
            <img
              src={assets?.logo}
              alt='Logo'
              loading='lazy'
              width={'100%'}
              height={'100%'}
            />
          </Box>
          <Box
            color={'primary.main'}
            sx={{ cursor: 'pointer' }}
            display={{ xxs: 'block', base: 'none' }}
            ml={sideMenu ? 'auto' : '0px'}
          >
            {sideMenu ? (
              <KeyboardDoubleArrowLeftIcon
                onClick={() => setSideMenu(false)}
                sx={{
                  height: '26px',
                  width: '26px',
                }}
              />
            ) : (
              <MenuIcon
                onClick={() => setSideMenu(true)}
                sx={{
                  color: 'primary.main',
                  height: '26px',
                  width: '26px',
                }}
              />
            )}
          </Box>
        </Box>

        {/*Side menu body */}
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'8px'}
          pr={sideMenu ? '8px' : '12px'}
          pl={'12px'}
        >
          {sideMenuRoutes.map(({ index, path, moduleName, icon }) => (
            <Box
              key={index}
              display={'flex'}
              alignItems={'center'}
              gap={1}
              justifyContent={sideMenu ? 'start' : 'center'}
              px={'7px'}
              mx={!sideMenu && '7px'}
              bgcolor={currentPath === path && 'primary.main'}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: currentPath !== path && 'primary.halfWhite',
                },
              }}
              py={'5px'}
              onClick={() => navigate(path)}
              borderRadius={'4px'}
            >
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                color={currentPath === path ? 'white' : 'primary.main'}
                pl={sideMenu && '7px'}
              >
                {icon}
              </Box>
              {sideMenu ? (
                <Typography
                  component={'p'}
                  whiteSpace={'nowrap'}
                  fontSize={'14px'}
                  color={currentPath === path ? 'white' : 'black'}
                  lineHeight={'12px'}
                  sx={{
                    '&:hover': {
                      color: currentPath !== path && 'black',
                    },
                  }}
                >
                  {moduleName}
                </Typography>
              ) : null}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        width={'100%'}
        height={'100%'}
        bgcolor={'primary.lightGray'}
        overflow={'auto'}
        pl={{ xxs: '92px', base: '12px' }}
      >
        <Box
          bgcolor={'white'}
          height={'62px'}
          borderRadius={'5px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={'10px'}
        >
          <Typography
            fontSize={{ xxs: '18px', md: '22px' }}
            fontWeight={600}
            color='primary.gray'
          >
            {currentPathName}
          </Typography>
          <Box
            display={'flex'}
            gap={1}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Typography fontSize={'14px'} component={'p'} color=''>
                John Doe
              </Typography>
              <Typography
                mt={'-5px'}
                fontSize={'12px'}
                fontWeight={400}
                variant='base'
                color='primary.darkGray'
                alignSelf={'end'}
              >
                Admin
              </Typography>
            </Box>

            <Avatar
              alt='John Doe'
              src='/static/images/avatar/1.jpg'
              sx={{ width: 36, height: 36 }}
            />
          </Box>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
