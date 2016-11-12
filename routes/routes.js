import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import {Dashboard, MainPage} from '../client/components/Layout/Dashboard/Dashboard';
//import UserProfile from 'components/UserProfile';

console.log(Dashboard)

const routes = {
  home: new Route({
    path: '/',
    component: <Dashboard mainPage={'home'}/>
  }),


  main: new Route({
    path: '/main',
    component: <MainPage/>
  })


};
export default routes;