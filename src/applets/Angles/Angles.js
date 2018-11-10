import { connect } from 'react-redux'
import React, { Component } from 'react'

import { showTooltip, hideTooltip } from '../../store/tools'

import { GameGenerator, ProblemPrompt } from './components'

import './Angles.css'

type Props = {
	showTooltip: Function,
	hideTooltip: Function,
}

class Angles extends Component<Props> {
	render() {
		return (
			<div className="Angles">
				<ProblemPrompt />
				<GameGenerator />
			</div>
		)
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
