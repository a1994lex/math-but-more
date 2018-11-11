import { connect } from 'react-redux'
import React, { Component } from 'react'

import { showTooltip, hideTooltip } from '../../store/tools'

import { GameGenerator, ProblemPrompt } from './components'

import './Angles.css'
import { CIRCLE_DEGREES } from './constants'

type Props = {
	showTooltip: Function,
	hideTooltip: Function,
}

type State = {
	targetAngle: number,
	updateTokens: boolean,
}

class Angles extends Component<Props, State> {
	state = {
		targetAngle: 60,
		updateTokens: false,
	}
	render() {
		return (
			<div className="Angles">
				<ProblemPrompt
					targetAngle={this.state.targetAngle}
					toggleUpdateTokens={this.toggleUpdateTokens}
				/>
				<GameGenerator
					updateTarget={this.updateTargetAngle}
					toggleUpdateTokens={this.toggleUpdateTokens}
					updateTokenState={this.state.updateTokens}
				/>
			</div>
		)
	}
	updateTargetAngle = (baseAngle: number, updateValue: number) => {
		this.setState({ targetAngle: (baseAngle + updateValue) % CIRCLE_DEGREES })
	}
	toggleUpdateTokens = () => {
		this.setState(curState => {
			return { updateTokens: !curState.updateTokens }
		})
	}
}

const mapDispatchToProps = {
	showTooltip,
	hideTooltip,
}

export default connect(
	null,
	mapDispatchToProps
)(Angles)
