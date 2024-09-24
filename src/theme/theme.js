import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7367F0',
      lightGray: '#D8D6DE',
      gray: '#6E6B7B',
      darkGray:'#5E5873',
      danger: '#EA5455'
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 480,
      sm: 575,
      smd: 640,
      md: 768,
      base: 992,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});