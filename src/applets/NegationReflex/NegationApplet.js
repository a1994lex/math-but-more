/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import Accuracy from './Accuracy'

type props = {
	seconds : number,
}

type State = {
	value: ?number,
	answer: number,
	x1: number,
	x2: number,
	correct: ?boolean,
	finalValue: ?Number,
}

export default class NegationApplet extends Component<props, State> {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			answer: 0,
			x1: 0,
			x2: 0,
			correct: null,
			output: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(prevProps) {
		this.createProblem()
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	handleSubmit(event) {
		if(event)
			event.preventDefault();

		console.log("handle submit")
		if(this.props.seconds !== 0)
		{
			if (this.state.value !== null) {
				
				if (this.state.value === this.state.answer.toString()) {
					this.setState({correct: true, output: this.problemString() + this.outputString(true), value: ''  })
				} else {
					this.setState({ correct: false, output: this.problemString() + this.outputString(false), value: '' })
				}
				this.createProblem()
			}
		}
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

	timeUpString(){
		if(this.props.seconds !== 0)
		{
			return ""
		}
		else{
			return "Time's up. Refresh the page to play again."
		}
	}

	outputString(correct) {
		let outputstring = this.state.value

		if (correct) {
			outputstring += ' is correct!'
			return outputstring
		} 
		else {
			outputstring += ' is incorrect.'
			return outputstring
		} 
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} autoComplete="off">
						<h1>{this.problemString()}</h1>
						<input
							type="text"
							autoFocus={true}
							value={this.state.value}
							onChange={this.handleChange}
							id = "inputBox"
							autoComplete="off"
							autoCorrect="off"
						/>
				</form>
				<h5 className={`Output${this.state.correct ? 'green' : 'red'}`}>{this.state.output}</h5>
				<div className="Score">
					<Accuracy correct={this.state.correct} output={this.state.output}/>		
				</div>
				<div><h1 id="timeup">{this.timeUpString()}</h1></div>
			</div>
		)
	}
}
