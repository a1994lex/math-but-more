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
	total: Number,
	wrong: number,
	arr: ?Array
}

export default class NegationApplet extends Component<props, State> {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			answer: 0,
			x1: 0,
			x2: 0,
			funcval: '',
			correct: null,
			output: '',
			total: 0,
			wrong:0,
			arr: []
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

				const newArray = [
					...this.state.arr,
					{
						problem: this.problemString(),
						answer: this.state.value,
						correct: this.state.value === this.state.answer.toString(),
						problemAnswer: this.state.answer
					}
				]
				
				if (this.state.value === this.state.answer.toString()) {
					this.setState({correct: true, output: this.problemString() + this.outputString(true), value: '',total: this.state.total + 1, arr: newArray   })
				} else {
					this.setState({ correct: false, output: this.problemString() + this.outputString(false), value: '', wrong: this.state.wrong + 1, total: this.state.total + 1, arr: newArray   })
				}
				this.createProblem()
			}
		}
	}

	createProblem() {
		var funcArray = [
			function(first, second){return first * second},
			function(first, second){return first + second}, 
			function(first, second){return first - second},
			function(first, second){return first * second} // Division
		]
		var valArray = ["*", "+", "-", "/"]
		let operation = Math.floor(Math.random() * 4)
		let sign1 = Math.random() > 0.5 ? -1 : 1
		let sign2 = Math.random() > 0.5 ? -1 : 1
		let random = Math.floor(Math.random() * 10) * sign1
		let random2 = Math.floor(Math.random() * 10) * sign2
		if(operation === 3) // Division: ensures integer answer
		{
			if(random2 !== 0) 
			{
				var sudoAnswer = funcArray[operation](random, random2)
				this.setState({ 
					answer: random, 
					funcval: valArray[operation], 
					x1: sudoAnswer, 
					x2: random2
				})
			}
			else{ // if random2 == 0 then it is not a suitable problem, create a different one.
				console.log("avoiding division by zero")
				this.createProblem()
			}
		
		}
		else{
			this.setState({ 
				answer: funcArray[operation](random, random2),
				funcval: valArray[operation],
				x1: random, 
				x2: random2 
			})
		}
		
	}

	problemString() {
		return this.state.x1 + ' ' + this.state.funcval + ' ' + this.state.x2 + ' = '
	}

	createMarkup() {
		var html = ''
		if (this.props.seconds === 0) {
			html = "<h1>Time's up.</h1><br><div><a href='./negationreflex'>Play again?</a></div>"
		}
		return { __html: html }
	}

	outputString(boolcorrect) {
		let outputstring = this.state.value
		if (boolcorrect) {
			outputstring += '   correct!'
			return outputstring
		} 
		else {
			outputstring += '   wrong, correct answer is: ' + this.state.answer
			return outputstring
		} 
	}

	feedback()
	{
		if(this.props.seconds === 0)
		{
			return ""
		}
		if(this.state.correct !==null)
		{
			if(this.state.correct)
			{
				return "Correct!"
			}
			else{
				return "Wrong"
			}
		}
	}

	hide()
	{
		if(this.props.seconds === 0)
		{
			return 'hidden'
		}
		else{
			return 'shown'
		}
	}

	render() {
		return (
			<div>
				<form className={`Output${this.hide()}`} onSubmit={this.handleSubmit} autoComplete="off">
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
				<h5 className={`Output${this.state.correct ? 'green' : 'red'}`}>{this.feedback()}</h5>
				<div id="timeup" dangerouslySetInnerHTML={this.createMarkup()} />
				{this.props.seconds? <Accuracy total={this.state.total} wrong={this.state.wrong} arr={null}/> : <Accuracy total={this.state.total} wrong={this.state.wrong} arr={this.state.arr}/>}	
			</div>
		)
	}
}
