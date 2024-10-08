// Library import
import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
// Local import
import {
  TextInput,
  CustomButton,
  SocialIcon,
  CustomDivider,
  CustomCheckbox,
  CustomLink,
  Spinner,
} from '../../../components/shared';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Checkbox state
  const [checked, setChecked] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Login button disabled
  const disabled =
    formData.email === '' || formData.password === '' ? true : false;

  // Handle input change function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      component={'form'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      marginTop={{ lg: 4 }}
      paddingX={{ xxs: '10px', md: '5px', lg: '10px', xl: '40px' }}
      marginX={'auto'}
      width={{ sm: '350px', lg: 'auto' }}
    >
      <Box paddingBottom={'5px'} textAlign={{ xxs: 'center', lg: 'left' }}>
        <Typography
          variant='h5'
          color='primary.darkGray'
          fontWeight={'bold'}
          paddingBottom={'5px'}
        >
          Welcome to CampHQ!
        </Typography>
        <Typography variant='base' color='primary.gray'>
          Please sign-in to your account and start the adventure
        </Typography>
      </Box>

      <TextInput
        name={'email'}
        label='Email'
        placeholder={'johndoe@gmail.com'}
        onChange={handleInputChange}
        value={formData.email}
      />

      <TextInput
        type={'password'}
        label='Password'
        name={'password'}
        placeholder={'Password'}
        onChange={handleInputChange}
        value={formData.password}
      />

      <CustomCheckbox
        checked={checked}
        setChecked={setChecked}
        label={'Remember me'}
      />

      <CustomButton disabled={disabled} variant={'contained'}>
        {loading ? <Spinner /> : <Typography>Login</Typography>}
      </CustomButton>

      <Typography variant='subtitle' color='primary.gray'>
        New on our platform?{'  '}
        <CustomLink href={'/signup'}>Sign up</CustomLink>
      </Typography>

      <CustomDivider>or</CustomDivider>

      <SocialIcon />
    </Box>
  );
};

export default Login;
