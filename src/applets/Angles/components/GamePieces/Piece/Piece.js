import React, { Component } from 'react'
import type { Token, Radian, Degree, Location } from '../../../types'
import { radiansToDegrees } from '../../../helpers'
import { Spring } from 'react-spring'
import { TimingAnimation } from 'react-spring/dist/addons'
import './Piece.css'
type Props = {
	token: Token,
	onUpdate: (Location, string) => void,
	getNewSpot: () => Location,
	canRender: boolean,
}

type State = {
	vanishing: boolean,
	color: string,
	travellingTo: ?Location,
}

export default class Piece extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		const { token } = props
		let color
		if (token.value.type === 'radian') {
			const radialValue: Radian = token.value
			color = this.getColor(radiansToDegrees(radialValue))
		} else {
			const degreeValue: Degree = token.value
			color = this.getColor(degreeValue.degree)
		}
		this.state = {
			vanishing: false,
			color: color,
			travellingTo: props.canRender ? props.getNewSpot() : null,
		}
	}
	componentDidUpdate(prevProps: Props) {
		if (!prevProps.canRender && this.props.canRender) {
			this.setState({ travellingTo: this.props.getNewSpot() })
		}
	}
	getTravelDistance = (travellingTo: Location, travellingFrom: Location) => {
		return Math.sqrt(
			Math.pow(travellingTo.y - travellingFrom.y, 2) +
				Math.pow(travellingTo.x - travellingFrom.x, 2)
		)
	}
	render() {
		const { token, onUpdate, getNewSpot, canRender } = this.props
		if (!canRender || !this.state.travellingTo) {
			return null
		}
		return (
			<Spring
				impl={TimingAnimation}
				config={{ duration: this.getTravelDistance(this.state.travellingTo, token.point) * 0.6 }}
				to={this.state.travellingTo}
				from={token.point}
				onFrame={(location: Location) => onUpdate(location, token.id)}
				onRest={() => {
					this.setState({ travellingTo: getNewSpot() })
				}}>
				{location => this.renderContent(location)}
			</Spring>
		)
	}

	renderContent = (location: Location): Object => {
		const { token } = this.props
		if (token.value.type === 'radian') {
			const radialValue: Radian = token.value
			return this.renderRadian(radialValue, location)
		}
		const degreeValue: Degree = token.value
		return this.renderDegree(degreeValue, location)
	}

	renderRadian = (radian: Radian, location: Location) => {
		if (radian) {
			const numeratorClass = `${
				radian.denominator !== 1 && radian.denominator !== 0
					? 'numerator-underline'
					: 'whole-number'
			}`
			return (
				<foreignObject
					style={{ ...location }}
					className={`${this.state.vanishing ? 'vanishOut' : ''}`}>
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						className={`fraction Piece ${this.state.color}`}
						style={{ textAlign: 'center', zIndex: '1' }}>
						{radian.numerator === 0 ? (
							<div className={numeratorClass}>
								{0}
								&pi;
							</div>
						) : radian.numerator !== 1 ? (
							<div className={numeratorClass}>
								{radian.numerator}
								&pi;
							</div>
						) : (
							<div className={numeratorClass}>&pi;</div>
						)}
						<div className="denominator">
							{radian.denominator !== 1 && radian.denominator !== 0 ? radian.denominator : ''}
						</div>
					</div>
				</foreignObject>
			)
		}
		return null
	}
	getColor = (value: number): string => {
		const modValue = value
		const colorMap = {
			0: 'grey',
			45: 'light-blue',
			90: 'blue',
			135: 'purple',
			180: 'red',
			225: 'orange',
			270: 'light-orange',
			315: 'yellow',
			360: 'white',
		}
		const colorVal: number = Object.keys(colorMap).reduce((prevNum: number, curNum: number) => {
			if (prevNum < modValue && !(modValue > curNum)) return curNum
			else return prevNum
		}, 0)
		return colorMap[colorVal]
	}

	renderDegree = (degree: Degree, location: Location) => {
		return (
			<foreignObject style={{ ...location }}>
				<div
					xmlns="http://www.w3.org/1999/xhtml"
					className={`degree Piece ${this.state.color}`}
					style={{ textAlign: 'center' }}>
					<span className={`${this.state.vanishing ? 'vanish-out' : ''}`}>
						{degree.degree}
						&#x002DA;
					</span>
				</div>
			</foreignObject>
		)
	}
}
