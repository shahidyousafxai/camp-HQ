import React from "react";
import { AuthLayout } from "../components/shared";
import Login from "../panel/Auth/Login"


// SIDE MENU ROUTES
export const sideMenuRoutes = [
  {},
];


// PRIVATE ROUTES
export const privateRoutes = [
  {
    path: '/',
    moduleName: 'Home',
    element: <></>
  },
];


// PUBLIC ROUTES
export const publicRoutes = [
  {
    path: '/login',
    moduleName: 'Login',
    element: <AuthLayout>
      <Login />
    </AuthLayout>
  },
];