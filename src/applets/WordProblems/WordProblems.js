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
		if (
			(Math.abs(
				parseFloat(this.state.userAnswer.trim()) -
					problems[this.state.questionNum].answer.apply(this, this.state.params)
			) < 0.01 &&
				!problems[this.state.questionNum].exact) ||
			(this.state.userAnswer.trim() ===
				'' + problems[this.state.questionNum].answer.apply(this, this.state.params) &&
				problems[this.state.questionNum].exact)
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
			let lower = paramRanges[p][0]
			lower = isNaN(lower) ? params[parseInt(lower.substring(1, lower.length), 10)] : lower
			let upper = paramRanges[p][1]
			upper = isNaN(upper) ? params[parseInt(upper.substring(1, upper.length), 10)] : upper
			let param = this.numberInRange(lower, upper)
			params.push(param)
			question = question.replace('{' + p.toString() + '}', param.toString())
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

	goToNewQuestion() {
		this.setState(this.newQuestion())
	}

	render() {
		return (
			<Card>
				<div className="WordProblems">
					<div className="WordProblems-Body">
						{this.state.question}
						{problems[this.state.questionNum].exact
							? ''
							: ' (Round your answer to the nearest hundredth.)'}
					</div>
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
						onKeyPress={e => {
							if (e.which === 13) {
								// Enter key
								this.state.answerIsCorrect ? this.goToNewQuestion() : this.checkAnswer()
							}
						}}
						onChange={e => {
							this.setState({ userAnswer: e.target.value })
						}}
					/>
					{this.state.answerIsCorrect ? (
						<Accent1Button text="Next Question!" onClick={() => this.goToNewQuestion()} />
					) : (
						<Accent2Button text="Check My Answer" onClick={() => this.checkAnswer()} />
					)}
				</div>
			</Card>
		)
	}
}
