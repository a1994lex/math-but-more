import React, { Component } from 'react'
import './TransMatrice.css'
import { Container, Row, Col } from 'reactstrap'
import pacman from './pacman.svg'
type Props = {}

export default class TransMatrice extends Component<Props> {
	constructor(props) {
		super(props)
		this.state = { transx: '0', transy: '0', rot: 0, scale: 1, tx: '0', ty: '0', r: '0', s: '1' }

		this.handleChangeTranslateX = this.handleChangeTranslateX.bind(this)
		this.handleChangeTranslateY = this.handleChangeTranslateY.bind(this)
		this.handleChangeRotate = this.handleChangeRotate.bind(this)
		this.handleChangeScale = this.handleChangeScale.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChangeTranslateX(event) {
		this.setState({ transx: event.target.value })
	}
	handleChangeTranslateY(event) {
		this.setState({ transy: event.target.value })
	}
	handleChangeRotate(event) {
		this.setState({ rot: event.target.value })
	}
	handleChangeScale(event) {
		this.setState({ scale: event.target.value })
	}

	handleSubmit(event) {
		this.setState({
			tx: this.state.transx,
			ty: this.state.transy,
			r: this.state.rot,
			s: this.state.s,
		})
		event.preventDefault()
	}
	render() {
		let pman = {
			transform: `translate(${this.state.tx}px,${this.state.ty}px) rotate(${
				this.state.r
			}deg) scale(${this.state.s},${this.state.s})`,
		}
		return (
			<Container className="TransMatrice">
				TransMatrice
				<Row>
					<span className="border border-dark" style={{ height: '700px', width: '700px' }}>
						<img src={pacman} style={pman} />
					</span>
					<Col>
						<form onSubmit={this.handleSubmit}>
							<label>
								Translate x:
								<input
									type="text"
									value={this.state.transx}
									onChange={this.handleChangeTranslateX}
								/>
							</label>
							<label>
								Translate y:
								<input
									type="text"
									value={this.state.transy}
									onChange={this.handleChangeTranslateY}
								/>
							</label>
							<label>
								Rotate:
								<input type="text" value={this.state.rot} onChange={this.handleChangeRotate} />
							</label>
							<label>
								Scale:
								<input type="text" value={this.state.scale} onChange={this.handleChangeScale} />
							</label>
							<input type="submit" value="Submit" />
						</form>
					</Col>
				</Row>
			</Container>
		)
	}
}
