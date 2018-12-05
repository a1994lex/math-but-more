import React, { Component } from 'react'
import './RobotMaze.css'

type Props = {}

export default class RobotMaze extends Component<Props> {
	render() {
		return(
			<div class="maze">
				<iframe className="RobotMaze" src="http://kylemarchbyu.com:8080/" border="none"></iframe>
			</div>
		) 
	}
}
