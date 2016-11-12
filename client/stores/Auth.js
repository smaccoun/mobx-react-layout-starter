import { observable, computed, autorun } from 'mobx';
import singleton from 'singleton';

class Auth extends singleton {
  @observable user = null;
  @computed get isLoggedIn() {
    return !!this.user;
  }

  constructor() {
    super();

    const token = localStorage.getItem('token');
    console.log(token);

    this.user = token;
  }

  login(username, password) {
    this.user = {username, password}
    console.log(this.user)
    localStorage.setItem('token', username);
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
  }
}

export default Auth.get();