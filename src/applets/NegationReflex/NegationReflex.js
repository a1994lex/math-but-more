import React, { Component } from 'react'
import Timer from './Timer'

import './NegationReflex.css'

type Props = {}

type State = {
	// userHistory: ?Array<string>,
}

export default class NegationReflex extends Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="Applet">
				<div className="container1">
					<div className="Main">
						<Timer />
					</div>
				</div>
			</div>
		)
	}
}
