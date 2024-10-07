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
  CustomLink,
  Spinner
} from '../../../components/shared';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Login button disabled
  const disabled =
    formData.firstName === '' ||
    formData.lastName === '' ||
    formData.email === '' ||
    formData.password === '' ||
    formData.confirmPassword === ''
      ? true
      : false;

  // usestate for errors
  const [errors, setErrors] = useState({});

  // Loading state
  const [loading, setLoading] = useState(false);

  // function for validate errors
  const validateValues = (formData) => {
    let errors = {};
    if (
      (formData.password,
      formData.confirmPassword && formData.password !== formData.cpassword)
    ) {
      errors.confirmPassword =
        'Passwords do not match. Please verify both entries and try again.';
    }
    return errors;
  };

  // Handle inputchange function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'confirmPassword' && errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: '' });
    }
  };

  //  handle submit function
  const handleSubmit = (e) => {
    // validateValues
    setErrors(validateValues(formData));
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
          paddingBottom='5px'
        >
          Welcome to CampHQ!
        </Typography>
        <Typography variant='base' color='primary.gray'>
          Please create an account and start the adventure
        </Typography>
      </Box>

      <TextInput
        name={'firstName'}
        label='First Name'
        placeholder={'First name'}
        onChange={handleInputChange}
        value={formData.firstName}
      />

      <TextInput
        name={'lastName'}
        label='Last Name'
        placeholder={'Last name'}
        onChange={handleInputChange}
        value={formData.lastName}
      />

      <TextInput
        name={'email'}
        label='Email'
        placeholder={'johndoe@gmail.com'}
        onChange={handleInputChange}
        value={formData.email}
      />

      <TextInput
        type={'password'}
        name={'password'}
        label='Password'
        placeholder={'Password'}
        onChange={handleInputChange}
        value={formData.password}
      />

      <TextInput
        type={'password'}
        name={'confirmPassword'}
        label='Confirm Password'
        placeholder={'Confirm Password'}
        onChange={handleInputChange}
        value={formData.confirmPassword}
        error={errors.confirmPassword}
      />

      <CustomButton
        onClick={handleSubmit}
        variant={'contained'}
        sx={{ marginTop: '5px' }}
        disabled={disabled}
      >
        {loading ? <Spinner /> : <Typography>Sign up</Typography>}
      </CustomButton>

      <Typography variant='subtitle' color='primary.gray'>
        Already have an account?{'  '}
        <CustomLink href={'/login'}>Sign in</CustomLink>
      </Typography>

      <CustomDivider>or</CustomDivider>

      <SocialIcon />
    </Box>
  );
};

export default SignUp;
