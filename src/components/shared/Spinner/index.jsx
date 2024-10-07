import React from 'react';
import { CircularProgress } from '@mui/material';
export const Spinner = ({sx}) => {
  return <CircularProgress color='inherit' size={'20px'} sx={{...sx}} />;
};
