import React from "react";
import { AuthLayout, PanelLayout } from "../components/shared";
import Login from "../panel/Auth/Login"
import SignUp from "../panel/Auth/SignUp";


// SIDE MENU ROUTES
export const sideMenuRoutes = [
  {
    path: '/users',
    moduleName: 'Users',
    element: <PanelLayout>users</PanelLayout>,
  },

  {
    path: '/chatroom',
    moduleName: 'Chat Room',
    element: <PanelLayout>Chat Room</PanelLayout>,
  },
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
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: '/signup',
    moduleName: 'Signup',
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
];