import React, { Component } from 'react'
import type { RadianType } from '../../../types'
import './Radian.css'
type Props = {
	radian: RadianType,
}

export default class Radian extends Component<Props> {
	render() {
		const { radian } = this.props
		const numeratorClass = `${
			radian.denominator !== 1 && radian.denominator !== 0 ? 'numerator-underline' : 'whole-number'
		}`
		return (
			<div className="radian">
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
		)
	}
}
