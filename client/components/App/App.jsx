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

@observer
class App extends Component {

  render() {

    return (
        <Provider store={store}>
          <div>
            <h1>{store.app.title}</h1>
            <button onClick={() => store.router.goTo(routes.home)}> go home</button>
            <MobxRouter/>
          </div>
        </Provider>
    )
  }
}

export default App;
