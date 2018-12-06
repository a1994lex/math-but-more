import React, { Component } from 'react'
import type { Token, Radian, Degree } from '../../../types'
import { radiansToDegrees } from '../../../helpers'
import './Piece.css'
type Props = {
	token: Token,
	// onCapture: (id: string) => void,
}

type State = {
	vanishing: boolean,
	color: string,
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
		}
	}
	render() {
		const { token } = this.props
		if (token.value.type === 'radian') {
			const radialValue: Radian = token.value
			return this.renderRadian(radialValue)
		} else {
			const degreeValue: Degree = token.value
			return this.renderDegree(degreeValue)
		}
	}

	renderRadian = (radian: Radian) => {
		if (radian) {
			const { token } = this.props
			const numeratorClass = `${
				radian.denominator !== 1 && radian.denominator !== 0
					? 'numerator-underline'
					: 'whole-number'
			}`
			return (
				<foreignObject
					x={token.point.x}
					y={token.point.y}
					className={`${this.state.vanishing ? 'vanishOut' : ''}`}>
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						className={`fraction Piece ${this.state.color}`}
						style={{ textAlign: 'center' }}>
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
		console.log(modValue + ' = ' + colorMap[colorVal])
		return colorMap[colorVal]
	}

	renderDegree = (degree: Degree) => {
		const { token } = this.props

		return (
			<foreignObject x={token.point.x} y={token.point.y}>
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
