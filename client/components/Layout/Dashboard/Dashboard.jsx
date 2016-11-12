import React from 'react'
import {observer} from 'mobx-react'

import routes from '../../../../routes/routes'

import Navbar from '../Navbar/Navbar'
import LeftSideMenu from '../LeftSideMenu/LeftSideMenu'

const Dashboard = observer(['store'], (props) => {
  return(
      <div>
        <Navbar/>
        <LeftSideMenu links={[{label: 'main', view: routes.main}]}/>
        <button onClick={() => props.store.router.goTo(routes.home)}> Home Page</button>
        {props.children}
      </div>
  )
});

const MainPage = observer(() => {
  return(
      <div>Main page!</div>
  )
})

export {Dashboard, MainPage};