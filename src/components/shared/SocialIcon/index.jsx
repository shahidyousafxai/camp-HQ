import React from 'react';
import { Box } from '@mui/material';
import {
  FacebookIcon,
  TwitterIcon,
  MailIcon,
  GitHubIcon,
} from '../../../assets/Icons';

export const SocialIcon = () => {
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
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignContent='center'
      gap={1}
      marginTop={'5px'}
      paddingBottom={5}
    >
      {socialLinks.map(({ id, color, icon, name }) => (
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'40px'}
          height={'40px'}
          bgcolor={color}
          borderRadius={'6px'}
          onClick={() => handleSocial(name)}
          sx={{ cursor: 'pointer' }}
          key={id}
        >
          {icon}
        </Box>
      ))}
    </Box>
  );
};
