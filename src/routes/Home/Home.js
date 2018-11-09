import './Home.css'

import React, { Component } from 'react'
import type { MathRoute } from '../../models/routeTypes'
import { AppletCard, TextButton } from '../../components'
import { appletRoutes } from '../routes'

type Props = {}
type State = {
	routes: MathRoute[],
	filter: string,
}

export default class Home extends Component<Props, State> {
	constructor() {
		super()
		this.state = {
			routes: appletRoutes,
			filter: '',
		}
	}

	clearFilter = () => {
		this.setState({
			routes: appletRoutes,
			filter: '',
		})
	}

	filterByType = (type: string) => {
		this.setState({
			routes: appletRoutes.filter(route => route.type === type),
			filter: 'Type: ' + type,
		})
	}

	filterBySubject = (subject: string) => {
		this.setState({
			routes: appletRoutes.filter(route => route.subject === subject),
			filter: 'Subject: ' + subject,
		})
	}

	render() {
		return (
			<div className="Home">
				{this.state.filter !== '' ? (
					<div className="Home-filter-indicator">
						<h3>{this.state.filter}</h3>
						<TextButton type="normal" text="Remove filter" onClick={this.clearFilter} />
					</div>
				) : (
					''
				)}
				{this.state.routes.map((route: MathRoute) => (
					<AppletCard
						key={route.name}
						onSubjectClick={this.filterBySubject}
						onTypeClick={this.filterByType}
						route={route}
					/>
				))}
			</div>
		)
	}
}
