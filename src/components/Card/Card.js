import './Card.css'

import React from 'react'
type Props = {
	children: React$Node,
}

function Card(props: Props) {
	return (
		<div className="CardContainer">
			<div className="Card">{props.children}</div>
		</div>
	)
}

export default Card
