import React, { Component } from 'react';
import {MobxRouter, startRouter} from 'mobx-router';
import style from './style.css'
import {observer} from 'mobx-react'

//mobx
import {Provider} from 'mobx-react';
import store from '../../stores/store';

//router
import routes from '../../../routes/routes'
startRouter(routes, store);

//Components
import {Dashboard} from '../Layout/Dashboard/Dashboard'
import Login from '../Login/Login'

@observer
class App extends Component {

  render() {

    return (
        <Provider store={store}>
          <div>
            {!store.auth.isLoggedIn &&
              <Login />
            }
            {store.auth.isLoggedIn &&
              <Dashboard>
                <MobxRouter/>
              </Dashboard>
            }
          </div>
        </Provider>
    )
  }
}

export default App;
