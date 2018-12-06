import './AppletWrapper.css'

import React, { Component } from 'react'
import Instructions from './Instructions'

type Props = {
	instructions: String,
	children: React$Node,
}
type State = {
	instructionsVisible: boolean,
}

class AppletWrapper extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			instructionsVisible: false,
		}
	}
	render() {
		return (
			<div className="AppletWrapper">
				{this.props.children}
				<div className="AppletWrapper-DrawerButton">
					<div
						onClick={() =>
							this.setState(state => {
								return {
									instructionsVisible: !state.instructionsVisible,
								}
							})
						}>
						?
					</div>
				</div>
				<Instructions
					open={this.state.instructionsVisible}
					close={() => this.setState({ instructionsVisible: false })}
					instructions={this.props.instructions}
				/>
			</div>
		)
	}
}

export default AppletWrapper
