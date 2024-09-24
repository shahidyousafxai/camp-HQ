// Library Imports
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';

// Local Imports
import { privateRoutes, publicRoutes } from './config';

export const Router = () => {

  return (
    <Fragment>
      <Routes>
        {/* <Route path='*' element={useIsAuthenticatedUser() ? <Navigate to='/personal' /> : <Navigate to='/' />} /> */}
        <Route>
          {privateRoutes?.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index} />
            )
          }
          )}
        </Route>
        <Route>
          {publicRoutes?.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index} />
            )
          }
          )}
        </Route>
      </Routes>
    </Fragment>
  );
};