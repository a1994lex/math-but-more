import React, { Component } from 'react'
import PrimaryButton from '../../../../components/Buttons/PrimaryButton/index'

import './ProblemPrompt.css'

type Props = {
	targetAngle: number,
	toggleUpdateTokens: Function,
}

export default class ProblemPrompt extends Component<Props> {
	render() {
		return (
			<div className="ProblemPrompt">
				<div>Problem Prompt: Target Angle is {this.props.targetAngle}</div>
				<PrimaryButton text="Reload Board" onClick={this.props.toggleUpdateTokens} />
			</div>
		)
	}
}
