import React from 'react';
import Divider from '@mui/material/Divider';
export const CustomDivider = ({ children, textAlign }) => {
  return (
    <Divider
      sx={{
        '.MuiDivider-wrapper': {
          paddingBottom: '5px',
          color: 'gray',
        },
      }}
      textAlign={textAlign}
    >
      {children}
    </Divider>
  );
};
