import { Box, FormControl } from '@mui/material';
import React from 'react';
import { TextInput } from '../../../components/shared';

const Login = () => {
  return (
    <Box
      component={'form'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
    >
      <TextInput
        name={'email'}
        label='Email'
        placeholder={'johndoe@gmail.com'}
      />
      <TextInput
        type={'password'}
      />
    </Box>
  )
}

export default Login