// Library Imports
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';

// Local Imports
import { privateRoutes, publicRoutes, sideMenuRoutes } from './config';

export const Router = () => {

  return (
    <Fragment>
      <Routes>
        {/* <Route path='*' element={useIsAuthenticatedUser() ? <Navigate to='/personal' /> : <Navigate to='/' />} /> */}
        <Route>
          {sideMenuRoutes?.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index} />
            );
          })}
        </Route>
        <Route>
          {privateRoutes?.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index} />
            );
          })}
        </Route>
        <Route>
          {publicRoutes?.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index} />
            );
          })}
        </Route>
      </Routes>
    </Fragment>
  );
};