import './LaunchButton.css'

import { Link } from 'react-router-dom'
import React from 'react'

import type { MathRoute } from '../../../models/routeTypes'

type Props = {
	route: MathRoute,
}
function LaunchButton(props: Props) {
	return (
		<div className="LaunchButtonContainer">
			{props.route.redirect ? (
				<a href={props.route.path}>
					<div className="LaunchButton">Launch {props.route.name}!</div>
				</a>
			) : (
				<Link to={{ pathname: props.route.path }} key={props.route.path}>
					<div className="LaunchButton">Launch {props.route.name}!</div>
				</Link>
			)}
		</div>
	)
}

export default LaunchButton
