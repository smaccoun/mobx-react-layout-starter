// @flow

import {extendObservable, observable, computed, action} from 'mobx';

class AppStore {

  constructor() {
    extendObservable(this, {
      title: 'Mobx Router Layout App',
      user: undefined
    });
  }

  setTitle = action(title => {
    this.title = title;
  });
}

export default AppStore;