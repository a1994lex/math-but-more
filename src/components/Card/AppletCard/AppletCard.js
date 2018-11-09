import React from 'react'

import { Card } from '..'
import { LaunchButton, SubjectTag, TypeTag } from '../..'
import type { MathRoute } from '../../../models/routeTypes'

import './AppletCard.css'

type Props = {
	route: MathRoute,
	onSubjectClick: string => void,
	onTypeClick: string => void,
}
function AppletCard(props: Props) {
	// TODO: use actual description, thumbnail, and tags
	return (
		<Card>
			<h3>{props.route.name}</h3>
			<div className="AppletCard-desc-and-thumb">
				<img src={props.route.image} alt={props.route.name} className="AppletCard-thumb" />
				<div className="AppletCard-desc">{props.route.description}</div>
			</div>
			<div className="AppletCard-button-and-tags">
				<div className="AppletCard-tags">
					<TypeTag type={props.route.type} onClick={props.onTypeClick} />
					<SubjectTag subject={props.route.subject} onClick={props.onSubjectClick} />
				</div>
				<LaunchButton route={props.route} />
			</div>
		</Card>
	)
}

export default AppletCard
