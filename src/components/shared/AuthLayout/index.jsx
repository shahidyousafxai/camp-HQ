import { Box, Typography } from '@mui/material';
import React from 'react';
import { assets } from '../../../assets/Images';

export const AuthLayout = ({ children }) => {
  return (
    <Box display={'flex'} alignItems={'center'} width={'100%'} height={'100vh'}>
      <Box
        height={'100%'}
        display={{ xxs: 'none', lg: 'flex' }}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          flex: 'auto',
          // background: `conic-gradient(from -45deg at calc(100%/3) calc(100%/3), #E4E4ED 90deg, #0000 0), conic-gradient(from -135deg at calc(100%/3) calc(2*100%/3), #E4E4ED 90deg, #7367F0 0 135deg, #0000 0), conic-gradient(from 135deg at calc(2*100%/3) calc(2*100%/3), #E4E4ED 90deg, #7367F0 0 135deg, #0000 0), conic-gradient(from 45deg at calc(2*100%/3) calc(100%/3), #E4E4ED 90deg, #7367F0 0 135deg, #0000 0,#E4E4ED 0 225deg,#7367F0 0)`,
          backgroundSize: "70px 70px"
        }}
      >
        Images
      </Box>

      <Box
        width={{
          xxs: '100%',
          lg: '240px',
          // base: '290px',
          lg: '350px',
          xl: '440px',
        }}
        height={'100%'}
        px={'20px'}
        ml={'auto'}
        borderLeft={1}
        bgcolor={'white'}
        sx={{ overflow: 'auto' }}
      >
        <Box
          py={'50px'}
          width={{ xxs: '150px', xs: '180px', md: '200px', lg: '230px' }}
          display={'flex'}
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
        {children}
      </Box>
    </Box>
  );
}