import React, { Component } from 'react'
import Timer from './Timer'
import Accuracy from './Accuracy'

import './NegationReflex.css'

type Props = {}

type State = {
	value: string,
	answer: number,
	x1: number,
	x2: number,
	correct: ?boolean,
}

export default class NegationReflex extends Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = { 
			value: 'Press Submit to Start', 
			answer: 0, 
			x1: 0, 
			x2: 0,
			correct: null }

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
			this.setState({correct :true})
		}
		else{
			this.setState({correct :false})
		}
		// event.preventDefault()
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
			<div className="WhiteSpace">
				<div className="grid-container">
					<div className="Title">Negation Reflex</div>
					<div className="Instructions">
						<h3>
							Try summing these to numbers together. Remember adding negative numbers can be tricky
						</h3>
					</div>
					<div className="Main">
						<form onSubmit={this.handleSubmit}>
							<label>
								{this.problemString()}
								<input
									type="text"
									autofocus="true"
									value={this.state.value}
									onChange={this.handleChange}
								/>
							</label>
							<input type="submit" hidefocus="true" value="Submit" />
						</form>
						<h5 className={`Output${this.state.correct ? 'green' : 'red'}`}>
							{this.outputString()}
						</h5>
					</div>
					<div className="Controls">
						<div className="grid-container2">
							<span className="Timer">
								<Timer />
							</span>
							<span className="Accuracy">
								<Accuracy />
							</span>
							<span className="RestartBttn">
								<h6>This will be a button one day</h6>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
