import React, { Component } from 'react'
import type { Token, Radian as RadianType, Degree, Location } from '../../../types'
import Radian from './Radian'
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
			const radialValue: RadianType = token.value
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
	componentDidMount() {
		this.mounted = true
	}
	componentWillUnmount() {
		this.mounted = false
	}
	componentDidUpdate(prevProps: Props) {
		if (!prevProps.canRender && this.props.canRender) {
			if (this.mounted) {
				this.setState({ travellingTo: this.props.getNewSpot() })
			}
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
				config={{
					friction: 0,
					duration: this.getTravelDistance(this.state.travellingTo, token.point) * 0.8,
				}}
				to={this.state.travellingTo}
				from={token.point}
				onFrame={(location: Location) => this.mounted && onUpdate(location, token.id)}
				onRest={() => {
					if (this.mounted) {
						this.setState({ travellingTo: getNewSpot() })
					}
				}}>
				{location => this.renderContent(location)}
			</Spring>
		)
	}

	renderContent = (location: Location): Object => {
		const { token } = this.props
		if (token.value.type === 'radian') {
			const radialValue: RadianType = token.value
			return this.renderRadian(radialValue, location)
		}
		const degreeValue: Degree = token.value
		return this.renderDegree(degreeValue, location)
	}

	renderRadian = (radian: RadianType, location: Location) => {
		if (radian) {
			return (
				<foreignObject
					style={{ ...location }}
					className={`${this.state.vanishing ? 'vanishOut' : ''}`}>
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						className={`fraction Piece ${this.state.color}`}
						style={{ textAlign: 'center', zIndex: '1' }}>
						<Radian radian={{ numerator: radian.numerator, denominator: radian.denominator }} />
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
