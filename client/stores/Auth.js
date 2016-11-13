// @flow

import { observable, computed, autorun } from 'mobx';
import singleton from 'singleton';

class Auth extends singleton {
  @observable sessionCreds = null;
  @computed get isLoggedIn() {
    return !!this.sessionCreds;
  }

  constructor() {
    super();

    const token = localStorage.getItem('token');
    console.log(token);

    this.sessionCreds = token;
  }

  login(username, password) {
    this.sessionCreds = {username, password}
    localStorage.setItem('token', this.sessionCreds);
  }

  logout() {
    localStorage.removeItem('token');
    this.sessionCreds = null;
  }
}

export default Auth.get();