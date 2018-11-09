import React from 'react'

import { Card } from '..'
import { LaunchButton, SubjectTag, TypeTag } from '../..'
import type { MathApplet } from '../../../models/routeTypes'

import './AppletCard.css'

type Props = {
	applet: MathApplet,
	onSubjectClick: string => void,
	onTypeClick: string => void,
}
function AppletCard(props: Props) {
	return (
		<Card>
			<p className="AppletCard-title">{props.applet.route.name}</p>
			<div className="AppletCard-desc-and-thumb">
				<img src={props.applet.image} alt={props.applet.route.name} className="AppletCard-thumb" />
				<div className="AppletCard-desc">{props.applet.description}</div>
			</div>
			<div className="AppletCard-button-and-tags">
				<div className="AppletCard-tags">
					<TypeTag type={props.applet.type} onClick={props.onTypeClick} />
					{props.applet.subjects.map(subject => (
						<SubjectTag
							key={subject + 'subjectkey'}
							subject={subject}
							onClick={props.onSubjectClick}
						/>
					))}
				</div>
				<LaunchButton route={props.applet.route} />
			</div>
		</Card>
	)
}

export default AppletCard
