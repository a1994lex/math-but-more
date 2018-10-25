import React from 'react'
import { AppletHeader } from '../../components'

type Props = {
	children: React$Node,
}
function AppletWrapper(props: Props) {
	return (
		<div>
			<AppletHeader />
			{props.children}
		</div>
	)
}

export default AppletWrapper
