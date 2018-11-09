import React, { Component } from 'react'

type Props = {}

export default class NegationReflex extends Component<Props> {
	constructor(props) {
		super(props)
		this.state = { value: 'Press Submit to Start', answer: 0, x1: 0, x2: 0 }

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	handleSubmit(event) {
		if (this.state.value === 'Press Submit to Start') {
			this.setState({ value: '' })
			this.createProblem()
		} else if (this.state.value == this.state.answer) {
			alert(this.state.value + ' is correct! well done.')
		} else {
			alert(this.state.value + ' is incorrect, try again.')
		}
		event.preventDefault()
		this.createProblem()
	}

	createProblem() {
		let random = Math.floor(Math.random() * 201) - 100
		let random2 = Math.floor(Math.random() * 201) - 100
		this.setState({ answer: random + random2 })
		this.setState({ x1: random })
		this.setState({ x2: random2 })
	}

	problemString() {
		if (this.state.x2 >= 0) {
			return this.state.x1 + ' + ' + this.state.x2 + ' = '
		}
		return this.state.x1 + ' ' + this.state.x2 + ' = '
	}
	render() {
		return (
			<div className="NegationReflex">
				Negation Reflex
				<div>
					Try adding these to numbers together. Remember adding negative numbers can be tricky
				</div>
				<form onSubmit={this.handleSubmit}>
					<label>
						{this.problemString()}
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}
