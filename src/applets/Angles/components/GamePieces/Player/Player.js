import React, { Component } from 'react'
import Travelling from './Travelling'
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
		const targetLocation = null
		if (targetLocation) {
			return (
				<Travelling
					travellingTo={currentLocation}
					travellingFrom={currentLocation}
					getContent={(x, y) => this.renderSelf({ x: x, y: y })}
				/>
			)
		} else return this.renderSelf(currentLocation)
	}

	renderSelf = (loc: Location) => {
		console.log(`Payer radius=${this.props.radius}`)
		// return <circle cx={loc.x} cy={loc.y} r={30} fill="red" />
		return (
			<ProgressRing radius={this.props.radius} progress={this.props.percentage} location={loc} />
		)
	}
	updateLocation(loc: Location) {
		// nothing yet
	}
}
