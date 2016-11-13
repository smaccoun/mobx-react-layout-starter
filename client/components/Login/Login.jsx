import React from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

const Login = (props) => {

  let username = observable(null);
  let password = observable(null);

  const onUserInputChange = action((e) => {
    username = e.target.value
  });

  const onPasswordInputChange = action(e => {
    password = e.target.value;
  });

  return(
      <div>
        Username: <input onChange={onUserInputChange}/>
        Password: <input type="password" onChange={onPasswordInputChange}/>
        <button onClick={() => props.store.auth.login(username, password)}>Login</button>
      </div>
  )
}

export default observer(['store'], Login);