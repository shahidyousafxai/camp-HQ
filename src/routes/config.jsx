// Library import 
import React from 'react';
// Local import
import { AuthLayout, PanelLayout } from '../components/shared';
import Login from '../panel/Auth/Login';
import SignUp from '../panel/Auth/SignUp';
import { DashboardIcon } from '../assets/Icons';
import { useIsAuthenticatedUser } from '../utils/utils';
// SIDE MENU ROUTES
export const sideMenuRoutes = [
  {
    path: '/dashboard',
    moduleName: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    path: '/organizations',
    moduleName: 'Organizations',
    icon: <DashboardIcon />,
  },
];

// PRIVATE ROUTES
export const privateRoutes = [
  {
    path: '/dashboard',
    moduleName: 'Dashboard',
    element: <PanelLayout>Dashboard</PanelLayout>,
    child: [
      {
        path: '/dashboard/analytics',
        moduleName: 'Analytics',
        element: (
          <PanelLayout>
            <>Analytics</>
          </PanelLayout>
        ),
      },
    ],
  },

  {
    path: '/organizations',
    moduleName: 'Organizations',
    element: <PanelLayout>Organization</PanelLayout>,

  },
];

// PUBLIC ROUTES
export const publicRoutes = [
  {
    path: '/',
    moduleName: 'Base',
    element: useIsAuthenticatedUser ? <PanelLayout>users</PanelLayout> : <Login />,
  },
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
