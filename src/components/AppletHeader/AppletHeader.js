import React from 'react'
import { homeRoute } from '../../routes'
import { TextButton } from '../Buttons'

import './AppletHeader.css'

function AppletHeader() {
	return (
		<div className="AppletHeader">
			<TextButton route={homeRoute} text="Return to applets list" />
		</div>
	)
}

export default AppletHeader
