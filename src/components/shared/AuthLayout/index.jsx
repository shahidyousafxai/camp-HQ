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
        justifyContent={'center'}s
        sx={{
          flex: 'auto',
        }}
      >
        <Typography variant='h4' fontWeight={'medium'}>
          Images
        </Typography>
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