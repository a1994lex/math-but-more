import React, { Component } from 'react'
import GameBoard from './GameBoard'
import update from 'immutability-helper'
import { unitCircle } from '../constants'
import type { Token, TokenValue, Location, Point, UnitCircleItem } from '../types'
import {
	generatePointInPolygon,
	random,
	forEachValue,
	circlesIntersect,
	radiansToDegrees,
	getPolygon,
} from '../helpers'
import { Player, Piece } from './GamePieces'
import { CIRCLE_DEGREES } from '../constants'
type Props = {
	updateTarget: number => void,
	toggleUpdateTokens: () => void,
	updateTokenState: boolean,
	targetAngle: number,
	playerDegree: number,
	updatePlayerDegree: number => void,
}

type State = {
	tokens: ?{ [string]: Token },
	playerLocation: Location,
	playerRadius: number,
	screenDimensions: { w: number, h: number },
	canRenderPieces: boolean,
	numPiecesEaten: number,
}

export default class GameGenerator extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			tokens: null,
			playerLocation: { x: 160, y: 95 },
			playerRadius: 30,
			screenDimensions: { w: 0, h: 0 },
			canRenderPieces: false,
			numPiecesEaten: 0,
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
					this.setState({ screenDimensions: { w: w, h: h }, canRenderPieces: true })
				}}
				triggerDirectionChange={this.triggerDirectionChange}>
				{this.renderTokens()}
				{this.renderPlayer()}
			</GameBoard>
		)
	}

	renderPlayer = () => {
		return (
			<Player
				currentLocation={this.state.playerLocation}
				radius={this.state.playerRadius}
				percentage={this.props.playerDegree / CIRCLE_DEGREES}
			/>
		)
	}

	getNewFixedDistanceSpot = (curLocation: Point): Point => {
		const point: Point = generatePointInPolygon(
			getPolygon(this.state.screenDimensions.w, this.state.screenDimensions.h)
		)
		return point
	}

	renderTokens() {
		const tokenHtml = []
		if (this.state.tokens) {
			const tokens: { [string]: Token } = this.state.tokens
			Object.keys(tokens).forEach((tokenKey: string) => {
				if (tokens[tokenKey]) {
					tokenHtml.push(
						<Piece
							getNewSpot={(): Point => {
								return this.getNewFixedDistanceSpot(tokens[tokenKey].point)
							}}
							canRender={this.state.canRenderPieces}
							token={tokens[tokenKey]}
							key={tokenKey}
							onUpdate={this.onPieceUpdate}
						/>
					)
				}
			})
		}
		return tokenHtml
	}

	removeToken = (id: string) => {
		if (!this.state.tokens) return
		const token: ?Token = this.state.tokens[id]
		if (token) {
			this.setState((state: State) => {
				const newDegree: number = this.getNewPlayerDegree(token.value)
				let numEaten = state.numPiecesEaten + 1
				const newId = `${12 + numEaten}_token`
				this.props.updatePlayerDegree(newDegree)
				return update(state, {
					numPiecesEaten: { $set: numEaten },
					tokens: {
						$unset: [id],
						[newId]: {
							$set: {
								id: newId,
								value: this.getTokenValue(),
								point: generatePointInPolygon(
									getPolygon(state.screenDimensions.w, state.screenDimensions.h)
								),
							},
						},
					},
				})
			})
		}
	}

	getNewPlayerDegree = (value: TokenValue) => {
		let plusValue = 0
		if (value.type === 'degree') {
			plusValue = value.degree
		} else {
			plusValue = radiansToDegrees(value)
		}
		const newVal = (this.props.playerDegree + plusValue) % CIRCLE_DEGREES
		console.log(`${newVal} === ${this.props.targetAngle}`)
		if (newVal === this.props.targetAngle) {
			const angle: UnitCircleItem = unitCircle[random(0, unitCircle.length - 1)]
			this.props.updateTarget(angle.degree)
		}
		return newVal
	}

	generateTokens = (w: number, h: number) => {
		if (!w || !h) return null
		const tokens = {}
		const polygon = getPolygon(w, h)
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
					if (this.playerIntersectsPiece(token.point)) {
						this.removeToken(token.id)
					}
				})
			}
		})
	}

	playerIntersectsPiece(tokenPoint: Location): boolean {
		const { playerLocation, playerRadius } = this.state
		return !!(
			playerLocation &&
			playerRadius &&
			circlesIntersect(
				{
					r: 16,
					...tokenPoint,
				},
				{ r: playerRadius, ...playerLocation }
			)
		)
	}

	onPieceUpdate = (location: Location, pieceId: string) => {
		if (this.playerIntersectsPiece(location)) {
			this.removeToken(pieceId)
		} else {
			this.setState(state => {
				return update(state, { tokens: { [pieceId]: { point: { $set: location } } } })
			})
		}
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
