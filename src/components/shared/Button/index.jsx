import React from "react";
import Button from "@mui/material/Button";
export const CustomButton = ({ variant, onClick, disabled, children,sx }) => {
  return (
    <Button
      variant={variant}
      onClick={disabled ? null : onClick}
      disabled={disabled}
      sx={{
        textTransform: 'none',
        height: '39px',
        '&:disabled': {
          color: 'white',
          backgroundColor: 'primary.main',
          opacity: '0.5',
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
