// @flow

//Node modules
import React from 'react'
import {toJS} from 'mobx'
import {observer} from 'mobx-react'

//Components
import Navbar from '../Navbar/Navbar'
import LeftSideMenu from '../LeftSideMenu/LeftSideMenu'

//Types & Utils
import routes from '../../../../routes/routes'
import {LinkData} from '../../../types/UIUtilTypes/LinkTypes'

console.log({routes: routes})



const Dashboard = observer(['store'], (props) => {
  console.log(toJS(props.store.auth.sessionCreds))
  console.log(routes)

  const SIDE_LINKS: Array<LinkData> = [
    new LinkData('profile', routes.profile)
  ]

  return(
      <div>
        <h1>Welcome {props.store.auth.sessionCreds.username}</h1>
        <Navbar/>
        <LeftSideMenu links={SIDE_LINKS}/>
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