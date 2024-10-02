import React from 'react';
import { Box, Typography, FormControl } from '@mui/material';
import {
  TextInput,
  CustomButton,
  SocialIcon,
  CustomDivider,
  CustomCheckbox,
  CustomLink,
} from '../../../components/shared';
import {
  FacebookIcon,
  TwitterIcon,
  MailIcon,
  GitHubIcon,
} from '../../../assets/Icons';

const Login = () => {
  const socialLinks = [
    { id: 1, name: 'facebook', color: '#3B5998', icon: <FacebookIcon /> },
    { id: 2, name: 'twitter', color: '#00ACEE', icon: <TwitterIcon /> },
    { id: 3, name: 'mail', color: '#DB3236', icon: <MailIcon /> },
    { id: 4, name: 'githab', color: '#211F1F', icon: <GitHubIcon /> },
  ];

  const handleSocial = (name) => {
    name === 'facebook' && console.log('This is facebook icon');
    name === 'twitter' && console.log('This is twitter icon');
    name === 'mail' && console.log('This is mail icon');
    name === 'githab' && console.log('This is githab icon');
  };
  return (
    <Box
      component={'form'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      marginTop={4}
      paddingX={4}
    >
      <Box>
        <Typography variant='h5' color='primary.darkGray' fontWeight={'bold'}>
          Welcome to Vuexy! 👋🏻
        </Typography>
        <Typography variant='base' color='primary.gray'>
          Please sign-in to your account and start the adventure
        </Typography>
      </Box>

      <TextInput
        name={'email'}
        label='Email'
        placeholder={'johndoe@gmail.com'}
      />
      <TextInput type={'password'} label='Passwoard'></TextInput>

      <Box marginLeft={1.5}>
        <CustomCheckbox />
      </Box>

      <CustomButton variant={'contained'}>Login</CustomButton>

      <Box display={'flex'} justifyContent={'center'} gap={1}>
        <Typography
          variant='subtitle'
          color='primary.gray'
          sx={{ textWrap: 'nowrap' }}
        >
          New on our platform?
        </Typography>
        <CustomLink>Create an account</CustomLink>
      </Box>

      <CustomDivider>or</CustomDivider>

      <Box display='flex' justifyContent='center' alignContent='center' gap={1}>
        {socialLinks.map(({ id, color, icon, name }) => (
          <SocialIcon key={id} color={color} onClick={() => handleSocial(name)}>
            {icon}
          </SocialIcon>
        ))}
      </Box>
    </Box>
  );
};

export default Login;
