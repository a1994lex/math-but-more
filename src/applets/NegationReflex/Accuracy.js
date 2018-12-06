/* eslint-disable prettier/prettier */
import React, { Component } from 'react'

type props = {
	total: number,
	wrong: number,
	arr: ?Array,
}

type state = {}

export default class Accuracy extends Component<props, state> {
	constructor(props) {
		super(props)
		this.state = {}
	}

	createListComponent() {
		if(!this.props.arr)
			return null

		return (
			<ol>
				{
					this.props.arr.map((answer, index)=>{
						if(answer.correct)
							return <li key={index} className="correctAnswerList"> {answer.problem} {answer.answer} </li>
						else
							return <li key={index} className="wrongAnswerList"> <span>{answer.problem} <span>{answer.answer}</span> ({answer.problemAnswer})</span></li>
					})
				}
			</ol>
		)
	}

	render() {
		return (
			<div>
				<span className="Accuracy">
					<h4>
						Score: {this.props.total - this.props.wrong} / {this.props.total}
					</h4>
				</span>
				<div className="AfterGameOutPut">
					{this.createListComponent()}
				</div>
			</div>
		)
	}
}
