import { Box } from "@mui/material";
import React from "react";

export const SocialIcon = ({ children, color, onClick }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"30px"}
      height={"30px"}
      bgcolor={color}
      borderRadius={"6px"}
      onClick={onClick}
      sx={{ cursor: "pointer" }}
    >
      {children}
    </Box>
  );
};
