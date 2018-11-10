import React from 'react'
import { AppletHeader } from '../../components'
import './AppletWrapper.css'
type Props = {
	children: React$Node,
}
function AppletWrapper(props: Props) {
	return (
		<div className="AppletWrapper">
			<AppletHeader />
			{props.children}
		</div>
	)
}

export default AppletWrapper
