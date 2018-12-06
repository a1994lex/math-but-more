import React, { Component } from 'react'
import type { Location } from '../../../types'

type Props = {
	radius: number,
	progress: number,
	location: Location,
}

export default class ProgressRing extends Component<Props> {
	render() {
		const { location, progress, radius } = this.props
		// const strokeDashoffset = circumference - (progress / 100) * circumference

		const startX = this.getCoordinatesForPercent(0)[0]
		const startY = this.getCoordinatesForPercent(0)[1]
		const endX = this.getCoordinatesForPercent(progress)[0]
		const endY = this.getCoordinatesForPercent(progress)[1]

		const largeArcFlag = progress > 0.5 ? 1 : 0

		const pathData = [
			`M ${startX} ${startY}`,
			`A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
			`L 0 0`,
		].join(' ')
		return (
			<svg
				x={location.x - radius}
				y={location.y - radius}
				style={{ transform: 'rotate(-0.25turn), zIndex: 100' }}
				viewBox="-1 -1 2 2"
				width={radius * 2}
				height={radius * 2}>
				<path style={{ zIndex: '5' }} fill="#61C0BF" d={pathData} />
			</svg>
		)
	}
	getCoordinatesForPercent(percent: number) {
		const x = Math.cos(2 * Math.PI * percent)
		const y = Math.sin(2 * Math.PI * percent)
		return [x, y]
	}
}
