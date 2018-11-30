import React, { Component } from 'react'

type props = {
	correct: null,
	output: String,
}
type state = {
	correct: number,
	total: number,
}

export default class Accuracy extends Component<props, state> {
	constructor(props) {
		super(props)
		this.state = {
			correct: 0,
			total: 0,
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.getbools()
	}

	getbools() {
		if (this.props.correct != null) {
			this.setState({ total: this.state.total + 1 })
			if (this.props.correct) {
				this.setState({ correct: this.state.correct + 1 })
			}
		}
	}

	render() {
		return (
			<div>
				<span className="Accuracy">
					<h4>
						Score: {this.state.correct} / {this.state.total}
					</h4>
				</span>
				<div onChange={this.handleChange}>{this.props.output}</div>
			</div>
		)
	}
}
