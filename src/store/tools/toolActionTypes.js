export const types = {
	SHOW_TOOLTIP: 'SHOW_TOOLTIP',
	HIDE_TOOLTIP: 'HIDE_TOOLTIP',
}

export type HideTooltipAction = {
	type: 'HIDE_TOOLTIP',
}

export type ShowTooltipAction = {
	type: 'SHOW_TOOLTIP',
	payload: {
		content: React$Node,
		parent: string,
		position?: string,
	},
}
