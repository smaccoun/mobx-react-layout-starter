// @flow

import {Route} from 'mobx-router'

class LinkData {
  label: string
  route: Route;

  constructor(label: string, route: Route){
    this.label = label;
    this.route = route;
  }
}

export {LinkData}