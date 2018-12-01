import React, { Component } from 'react'

import { problems } from './problems.js'

import { Accent1Button } from '../../components'

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
			console.log('did the thing gud')
			this.setState({
				feedback: 'You got it! Great work!',
				answerIsCorrect: true,
			})
		} else {
			console.log('need to git gud')
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
		})
	}

	render() {
		return (
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
					type="text"
					onInput={e => {
						this.setState({ answer: e.target.value })
					}}
				/>
				<Accent1Button
					text={this.state.answerIsCorrect ? 'Next Question' : 'Submit'}
					onClick={this.state.answerIsCorrect ? () => this.newQuestion() : () => this.checkAnswer()}
				/>
			</div>
		)
	}
}
