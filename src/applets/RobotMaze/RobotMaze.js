import React, { Component } from 'react'

type Props = {}

export default class RobotMaze extends Component<Props> {
	render() {
		return <iframe className="RobotMaze" src="http://kylemarchbyu.com:8080/" width="90%" height="850"></iframe>
	}
}
