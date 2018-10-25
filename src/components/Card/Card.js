import './Card.css'

import React from 'react'
type Props = {
	children: React$Node,
}

function Card(props: Props) {
	return (
		<div className="card-container">
			<div className="card">{props.children}</div>
		</div>
	)
}

export default Card
