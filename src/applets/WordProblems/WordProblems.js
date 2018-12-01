import React, { Component } from 'react'

import { Accent1Button, Accent2Button, Card } from '../../components'
import { problems } from './problems.js'
import './WordProblems.css'

type Props = {}

export default class WordProblems extends Component<Props> {
	constructor(props) {
		super(props)
		this.state = {
			questionNum: 0,
		}
		this.state = this.newQuestion()
	}

	checkAnswer() {
		console.log('Answer: ' + problems[this.state.questionNum].answer.apply(this, this.state.params))
		if (
			this.state.userAnswer ===
			'' + problems[this.state.questionNum].answer.apply(this, this.state.params)
		) {
			this.setState({
				feedback: 'You got it! Great work!',
				answerIsCorrect: true,
			})
		} else {
			this.setState({
				feedback: "Sorry, that's incorrect. Can you figure out why?",
				answerIsCorrect: false,
			})
		}
	}

	numberInRange(lower, upper) {
		return Math.floor(Math.random() * (upper - lower)) + lower
	}

	newQuestion() {
		var newQuestionNum =
			(this.state.questionNum + this.numberInRange(1, problems.length - 1)) % problems.length

		var paramRanges = problems[newQuestionNum].params
		var params = []
		var question = problems[newQuestionNum].problem

		for (var p in paramRanges) {
			let param = this.numberInRange(paramRanges[p][0], paramRanges[p][1])
			params.push(param)
			question = question.replace('%%' + p.toString() + '%%', param.toString())
		}

		return {
			question: question,
			questionNum: newQuestionNum,
			feedback: '',
			answerIsCorrect: false,
			userAnswer: '',
			params: params,
		}
	}

	render() {
		return (
			<Card>
				<div className="WordProblems">
					<div className="WordProblems-Body">{this.state.question}</div>
					{this.state.feedback === '' ? (
						''
					) : (
						<div
							className={
								'WordProblems-Feedback' + (this.state.answerIsCorrect ? '-Correct' : '-Incorrect')
							}>
							{this.state.feedback}
						</div>
					)}
					<input
						className="WordProblems-Input"
						type="text"
						value={this.state.userAnswer}
						onChange={e => {
							this.setState({ userAnswer: e.target.value })
						}}
					/>
					{this.state.answerIsCorrect ? (
						<Accent1Button
							text="Next Question!"
							onClick={() => this.setState(this.newQuestion())}
						/>
					) : (
						<Accent2Button text="Check My Answer" onClick={() => this.checkAnswer()} />
					)}
				</div>
			</Card>
		)
	}
}
