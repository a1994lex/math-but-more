import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { appletRoutes } from '../../routes';
import type {MathRoute} from '../../models'


import './Sidebar.css'
export default class Sidebar extends Component<{}> {
  render() {
    return  (
        <div className="Sidebar">
            {appletRoutes.map((route: MathRoute) => (
              <Link to={route.path} key={route.path}>
                <div className="side-link">
                  {route.name}
                </div>
              </Link>))}
        </div>
    )
  }
}
