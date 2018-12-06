import React, { Component } from 'react'
import Modal from 'react-modal'
type Props = {
	open: boolean,
	instructions: Object | string,
	close: () => void,
}
const customStyles = {
	content: {
		top: '64px',
		right: '0',
		left: 'auto',
		width: '20%',
		zIndex: '100',
		padding: '0',
		overflow: 'none',
		height: '80vh',
	},
}

export default class Instructions extends Component<Props> {
	render() {
		return (
			<Modal isOpen={this.props.open} onRequestClose={this.props.close} style={customStyles}>
				<div className={'AppletWrapper-Instructions'}>
					<p className="AppletWrapper-Instructions-Title">Instructions</p>
					<div className="content">{this.props.instructions}</div>
				</div>
			</Modal>
		)
	}
}
