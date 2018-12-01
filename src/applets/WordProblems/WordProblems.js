import React, { Component } from 'react'

import { Accent1Button, Accent2Button, Card } from '../../components'
import { problems } from './problems.js'
import './WordProblems.css'

type Props = {}

export default class WordProblems extends Component<Props> {
	constructor(props) {
		super(props)
		this.state = {
			answer: '',
			feedback: '',
			answerIsCorrect: false,
			questionNum: 0,
		}
	}

	checkAnswer() {
		if (this.state.answer === '' + problems[this.state.questionNum].answer) {
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

	newQuestion() {
		this.setState({
			questionNum: (this.state.questionNum + 1) % problems.length,
			feedback: '',
			answerIsCorrect: false,
			answer: '',
		})
	}

	render() {
		return (
			<Card>
				<div className="WordProblems">
					<div className="WordProblems-Body">{problems[this.state.questionNum].problem}</div>
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
						value={this.state.answer}
						onInput={e => {
							this.setState({ answer: e.target.value })
						}}
					/>
					{this.state.answerIsCorrect ? (
						<Accent1Button text="Next Question!" onClick={() => this.newQuestion()} />
					) : (
						<Accent2Button text="Check" onClick={() => this.checkAnswer()} />
					)}
				</div>
			</Card>
		)
	}
}
