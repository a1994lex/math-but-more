import './Home.css'

import React, { Component } from 'react'
import type { MathApplet } from '../../models/routeTypes'
import { AppletCard, TextButton } from '../../components'
import { applets } from '../routes'

type Props = {}
type State = {
	applets: MathApplet[],
	filter: string,
}

export default class Home extends Component<Props, State> {
	constructor() {
		super()
		this.state = {
			applets: applets,
			filter: '',
		}
	}

	clearFilter = () => {
		this.setState({
			applets: applets,
			filter: '',
		})
	}

	filterByType = (type: string) => {
		this.setState({
			applets: applets.filter(applet => applet.type === type),
			filter: 'Type: ' + type,
		})
	}

	filterBySubject = (subject: string) => {
		this.setState({
			applets: applets.filter(applet => applet.subjects.includes(subject)),
			filter: 'Subject: ' + subject,
		})
	}

	render() {
		return (
			<div className="Home">
				{this.state.filter !== '' ? (
					<div className="Home-filter-indicator-container">
						<div className="Home-filter-indicator">{this.state.filter}</div>
						<TextButton type="normal" text="Remove filter" onClick={this.clearFilter} />
					</div>
				) : (
					''
				)}
				{this.state.applets.map((applet: MathApplet) => (
					<AppletCard
						key={applet.route.name}
						onSubjectClick={this.filterBySubject}
						onTypeClick={this.filterByType}
						applet={applet}
					/>
				))}
			</div>
		)
	}
}
