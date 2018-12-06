import React, { Component } from 'react'
import './TransMatrice.css'
import { Container, Row, Col } from 'reactstrap'
import pacman from './pacman.svg'
import { Accent2Button } from '../../components'
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
			s: this.state.scale,
		})
	}
	render() {
		let pman = {
			transform: `translate(${this.state.tx}px,${this.state.ty}px) rotate(${
				this.state.r
			}deg) scale(${this.state.s},${this.state.s})`,
		}
		return (
			<Container className="TransMatrice">
				<div class="shadow p-3 mb-5 bg-white rounded">
					<Col style={{ backgroundColor: '#d3d3d3', height: '500px', overflow: 'hidden' }}>
						<span
							style={{
								width: '700px',
							}}>
							<img src={pacman} style={pman} />
						</span>
					</Col>
					<Col
						style={{
							paddingLeft: '90px',
							paddingRight: '90px',
							paddingTop: '30px',
						}}>
						<form onSubmit={this.handleSubmit}>
							<div style={{ textAlign: 'center' }}>
								{' '}
								<div>
									{' '}
									<label>
										Translate x: &nbsp;
										<input
											style={{
												boxSizing: 'border-box',
												mozBorderRadius: '4px',
												webkitBorderRadius: '4px',
												borderRadius: '4px',
												border: '1px solid #00206f',
											}}
											type="text"
											value={this.state.transx}
											onChange={this.handleChangeTranslateX}
										/>
									</label>
								</div>
								<div>
									<label>
										Translate y: &nbsp;
										<input
											style={{
												boxSizing: 'border-box',
												mozBorderRadius: '4px',
												webkitBorderRadius: '4px',
												borderRadius: '4px',
												border: '1px solid #00206f',
											}}
											type="text"
											value={this.state.transy}
											onChange={this.handleChangeTranslateY}
										/>
									</label>
								</div>
								<div style={{ marginLeft: '28px' }}>
									{' '}
									<label>
										Rotate: &nbsp;
										<input
											style={{
												boxSizing: 'border-box',
												mozBorderRadius: '4px',
												webkitBorderRadius: '4px',
												borderRadius: '4px',
												border: '1px solid #00206f',
											}}
											type="text"
											value={this.state.rot}
											onChange={this.handleChangeRotate}
										/>
									</label>
								</div>{' '}
								<div style={{ marginLeft: '30px' }}>
									<label>
										Scale: &nbsp;
										<input
											style={{
												boxSizing: 'border-box',
												marginBottom: '4px',
												mozBorderRadius: '4px',
												webkitBorderRadius: '4px',
												borderRadius: '4px',
												border: '1px solid #00206f',
											}}
											type="text"
											value={this.state.scale}
											onChange={this.handleChangeScale}
										/>
									</label>
								</div>
								<div>
									<Accent2Button text="Submit" onClick={() => this.handleSubmit()} />
								</div>
							</div>
						</form>
					</Col>
				</div>
			</Container>
		)
	}
}
