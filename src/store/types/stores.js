import type { Node } from 'react'

type TooltipSubStore = {
	isActive: boolean,
	parent: string,
	content: ?Node,
	position: ?string,
}

export type ToolStore = {
	tooltip: TooltipSubStore,
}
