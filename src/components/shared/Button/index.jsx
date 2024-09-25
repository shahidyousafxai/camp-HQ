import React from "react";
import Button from "@mui/material/Button";
export const CustomButton = ({ variant, onClick, disabled, children }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{ textTransform: "none", borderColor: "primary.main", height:"39px" }}
    >
      {children}
    </Button>
  );
};
