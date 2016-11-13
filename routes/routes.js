// @flow

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

  profile: new Route({
    path: '/profile',
    component: <Profile />
  })

};

export default routes;