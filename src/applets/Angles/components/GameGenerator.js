import React, { Component } from 'react'
import GameBoard from './GameBoard'
import update from 'immutability-helper'
import type { Token, TokenValue, Location } from '../types'
import { generatePointInPolygon, random, forEachValue, isPointInPolygon } from '../helpers'
import { Player, Piece } from './GamePieces'

type Props = {}

type State = {
	tokens: ?{ [string]: Token },
	playerDegree: number,
	playerLocation: Location,
	playerRadius: number,
	screenDimensions: { w: number, h: number },
}

const CIRCLE_DEGREES = 360

export default class GameGenerator extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			tokens: null,
			playerDegree: 30,
			playerLocation: { x: 0, y: 0 },
			playerRadius: 30,
			screenDimensions: { w: 0, h: 0 },
		}
	}

	render() {
		const poly = this.getPlayerPolygon()
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
				// updateLocation={(x, y) => this.setState({ playerLocation: { x: x, y: y } })}
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
			plusValue = ((value.numerator / value.denomenator) * 180) / Math.PI
		}
		return (state.playerDegree += plusValue) % CIRCLE_DEGREES
	}

	generateTokens = (w: number, h: number) => {
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
		return {
			type: 'degree',
			degree: random(0, 180),
		}
	}

	triggerDirectionChange = (location: Location) => {
		this.setState({ playerLocation: location }, () => {
			const playerPolygon: ?(Location[]) = this.getPlayerPolygon()
			if (this.state.playerLocation && playerPolygon && this.state.tokens) {
				forEachValue(this.state.tokens, (token: Token) => {
					if (isPointInPolygon(token.point, playerPolygon)) {
						console.log('point in polygon')

						this.removeToken(token.id)
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
