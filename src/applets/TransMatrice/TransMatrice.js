import React, { Component } from 'react'
import './TransMatrice.css'
import { Container, Row, Col } from 'reactstrap'
import pacman from './pacman.svg'
type Props = {}

export default class TransMatrice extends Component<Props> {
	constructor(props) {
		super(props)
		this.state = { trans: 0, rot: 0, scale: 1 }

		this.handleChangeTranslate = this.handleChangeTranslate.bind(this)
		this.handleChangeRotate = this.handleChangeRotate.bind(this)
		this.handleChangeScale = this.handleChangeScale.bind(this)
		this.handleTransSubmit = this.handleTransSubmit.bind(this)
		this.handleRotSubmit = this.handleRotSubmit.bind(this)
		this.handleScaleSubmit = this.handleScaleSubmit.bind(this)
	}
	handleChangeTranslate(event) {
		this.setState({ trans: event.target.trans })
	}
	handleChangeRotate(event) {
		this.setState({ rot: event.target.rot })
	}
	handleChangeScale(event) {
		this.setState({ scale: event.target.scale })
	}

	handleTransSubmit(event) {
		event.preventDefault()
	}

	handleRotSubmit(event) {
		event.preventDefault()
	}
	handleScaleSubmit(event) {
		event.preventDefault()
	}
	render() {
		return (
			<Container className="TransMatrice">
				TransMatrice
				<Row>
					<span className="border border-dark" style={{ height: '700px', width: '700px' }}>
						<img src={pacman} className="center" />
					</span>
					<Col>
						<form onSubmit={this.handleTransSubmit}>
							<label>
								Translate:
								<input type="text" value={this.state.trans} onChange={this.handleChangeTranslate} />
							</label>
							<input type="submit" value="Submit" />
						</form>
						<form onSubmit={this.handleRotSubmit}>
							<label>
								Rotate:
								<input type="text" value={this.state.rot} onChange={this.handleChangeRotate} />
							</label>
							<input type="submit" value="Submit" />
						</form>
						<form onSubmit={this.handleScaleSubmit}>
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
