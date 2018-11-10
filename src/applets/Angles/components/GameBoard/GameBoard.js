import React, { Component } from 'react'
import './GameBoard.css'
import './GameBoardBackground.css'
import ReactResizeDetector from 'react-resize-detector'
import type { Location } from '../../types'
type Props = {
	// React cursor location props
	updateScreenSize: (number, number) => void,
	triggerDirectionChange: (loc: Location) => void,
	children: React$Node,
}

export default class GameBoard extends Component<Props> {
	render() {
		return (
			<div className="GameBoard">
				{this.renderBoard()}
				<ReactResizeDetector
					handleWidth
					handleHeight
					onResize={(w, h) => {
						this.props.updateScreenSize(w, h)
					}}
				/>
			</div>
		)
	}

	renderBoard() {
		return (
			<svg
				id="svgBoard"
				className="game-board-background"
				width="100%"
				height="100%"
				preserveAspectRatio="xMidYMid meet"
				onMouseMove={evt => {
					const svg: ?Object = document.getElementById('svgBoard')
					if (svg) {
						const pt = svg.createSVGPoint()
						pt.x = evt.clientX
						pt.y = evt.clientY
						const cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse())
						this.props.triggerDirectionChange({ x: cursorpt.x, y: cursorpt.y })
					}
				}}>
				<defs>
					<rect id="box" x="0" y="0" width="100%" height="100%" />
				</defs>
				<clipPath id="clip">
					<use xlinkHref="#box" overflow="invisible" />
				</clipPath>
				<g clipPath={'url(#clip)'}>{this.props.children}</g>
			</svg>
		)
	}
	// changeTarget(x: number, y: number) {
	// 	this.setState({ playerTargetLocation: { x: x, y: y } })
	// }
}
