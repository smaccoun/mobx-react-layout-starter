import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

const Login = (props) => {

  let username = observable(null);
  let password = observable(null);

  const onUserInputChange = (e) => {
    username = e.target.value
    console.log(username)
  }

  return(
      <div>
        Username: <input onChange={onUserInputChange}/>
        Password: <input type="password" onChange={(e) => password = e.target.value}/>
        <button onClick={() => props.store.auth.login(username, password)}>Login</button>
      </div>
  )
}

export default observer(['store'], Login);