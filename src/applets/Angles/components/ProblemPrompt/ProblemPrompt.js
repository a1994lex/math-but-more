import React, { Component } from 'react'
import PrimaryButton from '../../../../components/Buttons/PrimaryButton/index'
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
}

export default class ProblemPrompt extends Component<Props> {
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
				<PrimaryButton text="Reload Board" onClick={this.props.toggleUpdateTokens} />
			</div>
		)
	}
}
