import React from 'react'
import {observer} from 'mobx-react'

const Login = (props) => {
  return(
      <button onClick={() => props.store.auth.login('Steve')}>Login</button>
  )
}

export default observer(['store'], Login);