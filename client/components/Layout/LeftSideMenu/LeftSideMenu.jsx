// @flow

import React from 'react'
import {observer} from 'mobx-react'

import {Link} from 'mobx-router';

const LeftSideMenu = (props) => {
  return(
      <div>
        <ul>
        {props.links.map((link, key) => {
          return(
              <Link key={key} view={link.route} store={props.store}> {link.label} </Link>
          )
        })}
        </ul>
      </div>
  )
}

export default observer(['store'], LeftSideMenu)