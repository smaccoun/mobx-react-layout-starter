import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import {MainPage} from '../client/components/Layout/Dashboard/Dashboard';
import Profile from '../client/components/Profile/Profile'

const routes = {
  home: new Route({
    path: '/',
    component: <MainPage />
  }),

  main: new Route({
    path: '/main',
    component: <Profile />
  })

};
export default routes;