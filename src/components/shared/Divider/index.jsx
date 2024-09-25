import React from "react";
import Divider from "@mui/material/Divider";
export const CustomDivider = ({ children, textAlign }) => {
  return <Divider textAlign={textAlign}>{children}</Divider>;
};