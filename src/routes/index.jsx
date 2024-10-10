// Library Imports
import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Local Imports
import { privateRoutes, publicRoutes } from './config';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
export const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {privateRoutes?.map((route, index) => {
            return (
              route.child ? (
                route.child.map((childRoute, index) => (
                  <>
                    <Route
                      path={route.path}
                      element={route.element}
                      key={index}
                    />
                    <Route
                      path={childRoute.path}
                      element={childRoute.element}
                      key={index}
                    />
                  </>
                ))
              ) : (
                <Route path={route.path} element={route.element} key={index} />
              )
            );
          })}
        </Route>
        <Route element={<PublicRoutes />}>
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
