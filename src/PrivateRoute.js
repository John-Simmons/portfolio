import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest}){
  let successPath = rest.path;
  const currentUser = localStorage.getItem('js-port-auth') === 'true';

  return (
    <Route

      {...rest}
      render={props => {
         return currentUser ?
          <Component {...props} /> :
          <Redirect to={{pathname: '/password', successPath: {successPath}}} />
      }}>

    </Route>
  )
}
