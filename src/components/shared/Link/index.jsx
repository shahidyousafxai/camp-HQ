import React from 'react';
import Link from '@mui/material/Link';
export const CustomLink = ({ children, href, underline }) => {
  return (
    <Link
      href={href}
      underline={'none' || underline}
      sx={{ cursor: 'pointer', textWrap: 'nowrap' }}
    >
      {children}
    </Link>
  );
};
