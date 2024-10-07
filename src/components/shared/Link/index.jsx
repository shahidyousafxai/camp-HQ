import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
export const CustomLink = ({ children, href, sx }) => {
  const navigate = useNavigate();
  return (
    <Typography
      variant='base'
      color='primary.main'
      onClick={() => navigate(href)}
      sx={{ cursor: 'pointer', textWrap: 'nowrap', ...sx }}
    >
      {children}
    </Typography>
  );
};
