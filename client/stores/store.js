// @flow

import AppStore from './appStore';
import Auth from './Auth'
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  auth: Auth,
  router: new RouterStore()
};

export default store;