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
	playerDegree: number,
}

class Angles extends Component<Props, State> {
	state = {
		targetAngle: 60,
		updateTokens: false,
		playerDegree: 90,
	}
	render() {
		return (
			<div className="Angles">
				<ProblemPrompt
					targetAngle={this.state.targetAngle}
					toggleUpdateTokens={this.toggleUpdateTokens}
					currentAngle={this.state.playerDegree}
				/>
				<GameGenerator
					updatePlayerDegree={(newDegree: number) => this.setState({ playerDegree: newDegree })}
					playerDegree={this.state.playerDegree}
					updateTarget={this.updateTargetAngle}
					targetAngle={this.state.targetAngle}
					toggleUpdateTokens={this.toggleUpdateTokens}
					updateTokenState={this.state.updateTokens}
				/>
			</div>
		)
	}
	updateTargetAngle = (newValue: number) => {
		this.setState({ targetAngle: newValue % CIRCLE_DEGREES })
		console.log('showing tooltip')
		this.props.showTooltip('Well done you did it!', '#problem', 'bottom')
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
