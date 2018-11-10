import React from 'react'
// import { useSpring, animated } from 'react-spring' // in order to use this we'll have to yarn add react-spring again
// import { Spring } from 'react-spring'

// type Location = {
// 	x: number,
// 	y: number,
// }

type Props = {
	travellingFrom: Location,
	travellingTo: Location,
	getContent: (number, number) => Object,
}

// const fast = { tension: 1200, friction: 40 }
// const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Travelling(props: Props) {
	// const [{ pos1 }] = useSpring({ pos1: [0, 0], config: fast })
	// const { x, y } = this.props.travellingTo
	return (
		<div className="hooks-main">
			<div className="hooks-filter">
				{/* <animated.div style={{ transform: .interpolate(trans) }} /> */}
			</div>
		</div>
	)
}
