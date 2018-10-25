import './TextButton.css'

import { Link } from 'react-router-dom'
import React from 'react'

import type { MathRoute } from '../../../models/routeTypes'

type LinkType = {
	type: 'link',
	route: MathRoute,
	text: string,
}

type NormalType = {
	type: 'normal',
	onClick: () => void,
	text: string,
}

type Props = NormalType | LinkType

function TextButton(props: Props) {
	if (props.type === 'link') {
		const route: MathRoute = props.route
		return (
			<div className="TextButtonContainer">
				<Link to={route.path} key={route.path}>
					<div className="TextButton">{props.text ? props.text : route.name}</div>
				</Link>
			</div>
		)
	} else {
		return (
			<div className="TextButtonContainer">
				<div className="TextButton" onClick={props.onClick}>
					{props.text}
				</div>
			</div>
		)
	}
}

export default TextButton
