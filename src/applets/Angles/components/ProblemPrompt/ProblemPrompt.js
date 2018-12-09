import React, { Component } from 'react'
import { Accent2Button } from '../../../../components/Buttons'
import type { RadianType } from '../../types'
import { CIRCLE_DEGREES } from '../../constants'
import { degreesToRadians } from '../../helpers'
import Radian from '../GamePieces/Piece/Radian'
import ProgressRing from '../GamePieces/Player/ProgressRing'
import './ProblemPrompt.css'

type Props = {
	targetAngle: number,
	currentAngle: number,
	toggleUpdateTokens: Function,
	points: number,
}

type State = {
	confetti: boolean,
}

export default class ProblemPrompt extends Component<Props, State> {
	state = { confetti: false }
	componentDidUpdate(prevProps: Props) {
		if (prevProps.points < this.props.points) {
			this.setState({ confetti: true })
			setTimeout(() => this.setState({ confetti: false }), 3000)
		}
	}
	render() {
		const radian: RadianType = degreesToRadians(this.props.targetAngle)
		const curRadian: RadianType = degreesToRadians(this.props.currentAngle)
		return (
			<div className="ProblemPrompt">
				<div className="flex-row">
					<div className="ProblemPrompt-text">See if you can match </div>
					<div className="ProblemPrompt-container">
						{this.props.targetAngle}
						&#x002DA;
					</div>
					<div className="ProblemPrompt-container">
						<Radian radian={radian} />
					</div>
					<div className="ProblemPrompt-container">
						<ProgressRing
							location={{ x: 0, y: 0 }}
							radius={30}
							progress={this.props.targetAngle / CIRCLE_DEGREES}
						/>
					</div>
				</div>
				<div className="flex-row">
					<div className="ProblemPrompt-text">Your current angle is </div>
					<div className="ProblemPrompt-container">
						{this.props.currentAngle}
						&#x002DA;
					</div>
					<div className="ProblemPrompt-container">
						<Radian radian={curRadian} />
					</div>
				</div>
				<div className={`ProblemPrompt-container ${this.state.confetti ? 'pulse' : ''}`}>
					Points: {this.props.points}
					{this.state.confetti && <div>Great Job!</div>}
				</div>
				<Accent2Button text="Reload Values" onClick={this.props.toggleUpdateTokens} />
			</div>
		)
	}
}
