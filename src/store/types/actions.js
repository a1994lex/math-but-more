import type { HideTooltipAction, ShowTooltipAction } from '../tools'

export type Action =
	// Actions from ToolStore
	HideTooltipAction | ShowTooltipAction

type SubClass<Super, C: Super> = Class<C>

export type ActionSubclass = SubClass<Action, *>
