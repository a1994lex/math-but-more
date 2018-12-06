import React, { Component } from 'react'
import type { Location } from '../../../types'
import './Player.css'
import ProgressRing from './ProgressRing'
type Props = {
	currentLocation: Location,
	// updateLocation: (number, number) => void,
	percentage: number,
	radius: number,
}

// const MIN_PERCENTAGE: number = 0
// const MAX_PERCENTAGE: number = 100
export default class Player extends Component<Props> {
	render() {
		const { currentLocation } = this.props
		return this.renderSelf(currentLocation)
	}

	renderSelf = (loc: Location) => {
		return (
			<ProgressRing radius={this.props.radius} progress={this.props.percentage} location={loc} />
		)
	}
	updateLocation(loc: Location) {
		// nothing yet
	}
}
