import React from 'react';
import { useState } from 'react';
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
    {
      id: 1,
      name: 'facebook',
      color: '#3B5998',
      icon: <FacebookIcon height={'25px'} width={'25px'} />,
    },
    {
      id: 2,
      name: 'twitter',
      color: '#00ACEE',
      icon: <TwitterIcon height={'25px'} width={'25px'} />,
    },
    {
      id: 3,
      name: 'mail',
      color: '#DB3236',
      icon: <MailIcon height={'25px'} width={'25px'} />,
    },
    {
      id: 4,
      name: 'githab',
      color: '#211F1F',
      icon: <GitHubIcon height={'25px'} width={'25px'} />,
    },
  ];

  const handleSocial = (name) => {
    name === 'facebook' && console.log('This is facebook icon');
    name === 'twitter' && console.log('This is twitter icon');
    name === 'mail' && console.log('This is mail icon');
    name === 'githab' && console.log('This is githab icon');
  };

  const [checked, setChecked] = useState(false);
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
      <Box paddingBottom={'5px'}>
        <Typography
          variant='h5'
          color='primary.darkGray'
          fontWeight={'bold'}
          sx={{ paddingBottom: '5px' }}
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
      />

      <TextInput type={'password'} label='Passwoard' />

      <CustomCheckbox
        checked={checked}
        setChecked={setChecked}
        label={'Remember me'}
      />

      <CustomButton variant={'contained'}>Login</CustomButton>

      <Typography
        variant='subtitle'
        color='primary.gray'
        // sx={{ textWrap: 'nowrap' }}
      >
        New on our platform?{'  '}
        <CustomLink>Sign up</CustomLink>
      </Typography>

      <CustomDivider>or</CustomDivider>

      <Box
        display='flex'
        justifyContent='center'
        alignContent='center'
        gap={1}
        marginTop={'5px'}
        paddingBottom={5}
      >
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
