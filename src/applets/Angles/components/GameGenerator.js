import React, { Component } from 'react'
import GameBoard from './GameBoard'
import update from 'immutability-helper'
import type { Token, TokenValue, Location } from '../types'
import { generatePointInPolygon, random, forEachValue, isPointInPolygon } from '../helpers'
import { Player, Piece } from './GamePieces'
import { CIRCLE_DEGREES } from '../constants'
type Props = {
	updateTarget: (number, number) => void,
	toggleUpdateTokens: () => void,
	updateTokenState: boolean,
}

type State = {
	tokens: ?{ [string]: Token },
	playerDegree: number,
	playerLocation: Location,
	playerRadius: number,
	screenDimensions: { w: number, h: number },
}

export default class GameGenerator extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			tokens: null,
			playerDegree: 285,
			playerLocation: { x: 160, y: 95 },
			playerRadius: 30,
			screenDimensions: { w: 0, h: 0 },
		}
	}

	componentDidUpdate(prevProps: Props) {
		if (!prevProps.updateTokenState && this.props.updateTokenState) {
			this.generateTokens(this.state.screenDimensions.w, this.state.screenDimensions.h)
			this.props.toggleUpdateTokens()
		}
	}

	render() {
		return (
			<GameBoard
				updateScreenSize={(w, h) => {
					this.generateTokens(w, h)
					this.setState({ screenDimensions: { w: w, h: h } })
				}}
				triggerDirectionChange={this.triggerDirectionChange}>
				{this.renderPlayer()}
				{this.renderTokens()}
			</GameBoard>
		)
	}

	renderPlayer = () => {
		return (
			<Player
				currentLocation={this.state.playerLocation}
				radius={this.state.playerRadius}
				percentage={this.state.playerDegree / CIRCLE_DEGREES}
			/>
		)
	}

	renderTokens() {
		const tokenHtml = []
		if (this.state.tokens) {
			const tokens: { [string]: Token } = this.state.tokens
			Object.keys(tokens).forEach((tokenKey: string) => {
				tokenHtml.push(<Piece token={tokens[tokenKey]} key={tokenKey} />)
			})
		}
		return tokenHtml
	}

	removeToken = (id: string) => {
		if (!this.state.tokens) return
		const token: ?Token = this.state.tokens[id]
		if (token) {
			this.setState(state => {
				const newDegree: number = this.getNewPlayerDegree(token.value, state)
				return update(state, {
					playerDegree: { $set: newDegree },
					tokens: { $unset: [id] },
				})
			})
		}
	}

	getNewPlayerDegree = (value: TokenValue, state: State) => {
		let plusValue = 0
		if (value.type === 'degree') {
			plusValue = value.degree
		} else {
			plusValue = (((value.numerator * Math.PI) / value.denominator) * 180) / Math.PI
		}
		return (state.playerDegree += plusValue) % CIRCLE_DEGREES
	}

	generateTokens = (w: number, h: number) => {
		if (!w || !h) return null
		const tokens = {}
		const polygon = [{ x: 0, y: 0 }, { x: 0, y: h }, { x: w, y: h }, { x: w, y: h }]
		for (let i = 0; i < 12; i += 1) {
			let key: string = `${i}_token`
			let value: TokenValue = this.getTokenValue()
			tokens[key] = {
				id: key,
				value: value,
				point: generatePointInPolygon(polygon),
			}
		}
		this.setState({ tokens: tokens })
	}

	getTokenValue(): TokenValue {
		const degree: number = random(0, 1)
		const angle = unitCircle[random(0, unitCircle.length - 1)]
		if (degree === 1) {
			return {
				type: 'degree',
				degree: angle.degree,
			}
		} else {
			return {
				type: 'radian',
				...angle.radian,
			}
		}
	}

	triggerDirectionChange = (location: Location) => {
		this.setState({ playerLocation: location }, () => {
			const playerPolygon: ?(Location[]) = this.getPlayerPolygon()
			if (this.state.playerLocation && playerPolygon && this.state.tokens) {
				forEachValue(this.state.tokens, (token: Token) => {
					if (isPointInPolygon(token.point, playerPolygon)) {
						// this.removeToken(token.id)
					}
				})
			}
		})
	}

	getPlayerPolygon = (): ?(Location[]) => {
		const { playerLocation, playerRadius } = this.state
		if (!playerLocation) return null
		return [
			{ x: playerLocation.x - playerRadius, y: playerLocation.y - playerRadius },
			{ x: playerLocation.x + playerRadius, y: playerLocation.y - playerRadius },
			{ x: playerLocation.x - playerRadius, y: playerLocation.y + playerRadius },
			{ x: playerLocation.x + playerRadius, y: playerLocation.y + playerRadius },
		]
	}
}

const unitCircle: { degree: number, radian: { numerator: number, denominator: number } }[] = [
	{ degree: 0, radian: { numerator: 0, denominator: 1 } },
	{ degree: 30, radian: { numerator: 1, denominator: 6 } },
	{ degree: 45, radian: { numerator: 1, denominator: 4 } },
	{ degree: 60, radian: { numerator: 1, denominator: 3 } },
	{ degree: 90, radian: { numerator: 1, denominator: 2 } },
	{ degree: 120, radian: { numerator: 2, denominator: 3 } },
	{ degree: 135, radian: { numerator: 3, denominator: 4 } },
	{ degree: 150, radian: { numerator: 5, denominator: 6 } },
	{ degree: 180, radian: { numerator: 1, denominator: 1 } },
	{ degree: 210, radian: { numerator: 7, denominator: 6 } },
	{ degree: 225, radian: { numerator: 5, denominator: 4 } },
	{ degree: 240, radian: { numerator: 4, denominator: 3 } },
	{ degree: 270, radian: { numerator: 3, denominator: 2 } },
	{ degree: 300, radian: { numerator: 5, denominator: 3 } },
	{ degree: 315, radian: { numerator: 7, denominator: 4 } },
	{ degree: 330, radian: { numerator: 11, denominator: 6 } },
	{ degree: 360, radian: { numerator: 2, denominator: 1 } },
]
