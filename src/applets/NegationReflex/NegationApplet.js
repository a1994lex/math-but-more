/* eslint-disable prettier/prettier */
import React, { Component } from 'react'

type Props = {}

type State = {
	value: string,
	answer: number,
	x1: number,
	x2: number,
	correct: ?boolean,
}

export default class NegationApplet extends Component<Props, State> {
	constructor() {
		super()
		this.state = {
			value: 'Press Submit to Start',
			answer: 0,
			x1: 0,
			x2: 0,
			correct: null,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(prevProps) {
		this.handleSubmit()
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	handleSubmit() {
		if (this.state.value === 'Press Submit to Start') {
			this.setState({ value: '' })
			this.createProblem()
		} else if (this.state.value === this.state.answer.toString()) {
			this.setState({ correct: true })
		} else {
			this.setState({ correct: false })
		}
		this.createProblem()
	}

	createProblem() {
		let sign1 = Math.random() > 0.5 ? -1 : 1
		let sign2 = Math.random() > 0.5 ? -1 : 1
		let random = Math.floor(Math.random() * 10) * sign1
		let random2 = Math.floor(Math.random() * 10) * sign2
		this.setState({ answer: random - random2 })
		this.setState({ x1: random })
		this.setState({ x2: random2 })
	}

	problemString() {
		return this.state.x1 + ' - ' + this.state.x2 + ' = '
	}

	outputString() {
		if (this.state.correct) {
			return this.state.value + ' is correct! well done.'
		} else if (this.state.correct === false) {
			return this.state.value + ' is incorrect.'
		} else {
			return ''
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
						<h1 id="problem">{this.problemString()}</h1>
						<input
							type="text"
							autoFocus={true}
							value={this.state.value}
							onChange={this.handleChange}
							id = "inputBox"
						/>
				</form>
				<h5 className={`Output${this.state.correct ? 'green' : 'red'}`}>{this.outputString()}</h5>
			</div>
		)
	}
}
