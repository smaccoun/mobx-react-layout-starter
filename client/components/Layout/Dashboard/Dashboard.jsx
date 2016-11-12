import React from 'react'
import {observer} from 'mobx-react'

import routes from '../../../../routes/routes'

import Navbar from '../Navbar/Navbar'

const Dashboard = observer(['store'], (props) => {
  return(
      <div>
        <Navbar/>
        <button onClick={() => props.store.router.goTo(routes.main)}> Main Page</button>
        {props.mainPage}
      </div>
  )
});

const MainPage = observer(() => {
  return(
      <div>Main page!</div>
  )
})

export {Dashboard, MainPage};