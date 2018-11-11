import React, { Component } from 'react'
import type { Token, Radian, Degree } from '../../../types'
import './Piece.css'
type Props = {
	token: Token,
	// onCapture: (id: string) => void,
}

type State = {
	vanishing: boolean,
}

export default class Piece extends Component<Props, State> {
	state = { vanishing: false }
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
				radian.denominator !== 1 && radian.denominator !== 0 ? 'numerator-underline' : ''
			}`
			return (
				<foreignObject
					x={token.point.x}
					y={token.point.y}
					className={`${this.state.vanishing ? 'vanishOut' : ''}`}>
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						className={`fraction`}
						style={{ textAlign: 'center' }}>
						{radian.numerator === 0 ? (
							<span className={numeratorClass}>
								{0}
								&pi;
							</span>
						) : radian.numerator !== 1 ? (
							<span className={numeratorClass}>
								{radian.numerator}
								&pi;
							</span>
						) : (
							<span className={numeratorClass}>&pi;</span>
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
	renderDegree = (degree: Degree) => {
		const { token } = this.props

		return (
			<foreignObject x={token.point.x} y={token.point.y} width={10} height={10}>
				<div
					xmlns="http://www.w3.org/1999/xhtml"
					className={`degree`}
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
