import React, { Component } from 'react'
import Timer from './Timer'
import Accuracy from './Accuracy'
import NegationApplet from './NegationApplet'

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
						<NegationApplet />
						<Timer />
					</div>
					<div className="Instructions">
						<h5>
							Try summing these to numbers together. Remember adding negative numbers can be tricky
						</h5>
						<div>
							<span className="Score">
								<Accuracy />
							</span>
							<span className="RestartBttn">
								<button>Start</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
