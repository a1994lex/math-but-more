import React, { Component } from 'react'

import './TypeTag.css'

type Props = {
	onClick: string => void,
	type: string,
}
type GameType = 'Game' | 'Demo'

class TypeTag extends Component<Props> {
	// Class-level constants, for use when instantiating TypeTags
	static get TYPE_GAME(): GameType {
		return 'Game'
	}
	static get TYPE_DEMO(): GameType {
		return 'Demo'
	}

	render() {
		return (
			<div className="TypeTagContainer">
				<div className="TypeTag" onClick={() => this.props.onClick(this.props.type)}>
					Type: {this.props.type}
				</div>
			</div>
		)
	}
}

export default TypeTag
