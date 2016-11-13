// @flow

import React from 'react'
import {observer} from 'mobx-react'

const Navbar = (props) => {

    return (
        <div>
          <button onClick={() => props.store.auth.logout()}>Logout</button>
        </div>
    )
}

export default observer(['store'], Navbar);