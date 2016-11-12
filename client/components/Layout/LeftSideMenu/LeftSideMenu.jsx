import React from 'react'
import {observer} from 'mobx-react'

import {Link} from 'mobx-router';

const LeftSideMenu = (props) => {
  return(
      <div>
        <ul>
        {props.links.map(link => {
          return(
              <Link view={link.view} store={props.store}> Go to gallery </Link>
          )
        })}
        </ul>
      </div>
  )
}

export default observer(['store'], LeftSideMenu)