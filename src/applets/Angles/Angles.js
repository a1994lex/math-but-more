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
	points: number,
}

class Angles extends Component<Props, State> {
	state = {
		targetAngle: 60,
		updateTokens: false,
		playerDegree: 90,
		points: 0,
	}
	render() {
		return (
			<div className="Angles">
				<ProblemPrompt
					targetAngle={this.state.targetAngle}
					toggleUpdateTokens={this.toggleUpdateTokens}
					currentAngle={this.state.playerDegree}
					points={this.state.points}
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
		this.setState(state => {
			return {
				targetAngle: newValue % CIRCLE_DEGREES,
				points: state.points + 10,
			}
		})
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
