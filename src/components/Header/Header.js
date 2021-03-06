/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import type { MathRoute } from '../../models/routeTypes'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { withRouter } from 'react-router'
import { appletRoutes, homeRoute } from '../../routes/index'

type Props = {
	location: Object,
}

class Header extends Component<Props> {
	render() {
		let title: ?string = null
		const route: ?MathRoute = appletRoutes.find((route: MathRoute) => {
			//eslint -disable-next-line
			return route.path === location.pathname
		})
		if (route) {
			title = route.name
		}

		return (
			<div className="Header">
				<div className="layout-row">
					<Link to={homeRoute.path}>
						<h3>Math But More</h3>
					</Link>
					{title && (
						<React.Fragment>
							<h3> | </h3>
							<h3>{title}</h3>
						</React.Fragment>
					)}
				</div>
			</div>
		)
	}
}

export default withRouter(Header)
