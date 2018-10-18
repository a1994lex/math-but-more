// @flow
import createStore from '../createStore'
import type { ToolStore } from '../types'
import {types} from './toolActionTypes'
import type {ShowTooltipAction, HideTooltipAction} from './toolActionTypes'



export function showTooltip(content: React$Node, parent: string, position?: string): ShowTooltipAction {
	return {
		type: types.SHOW_TOOLTIP,
		payload: {
			content,
			parent,
			position,
		},
	}
}

export function hideTooltip(): HideTooltipAction {
	return {
		type: types.HIDE_TOOLTIP,
	}
}

const initialState: ToolStore = {
  tooltip: {
    isActive: false,
    parent: '#fake-id',
    content: null,
    position: null,
  }
}

export default createStore(initialState, {
	[types.SHOW_TOOLTIP]: (state, { payload }: ShowTooltipAction) => {
		return {
			...state,
      tooltip: {
        isActive: true,
        parent: payload.parent,
        content: payload.content,
        position: payload.position,
      }
		}
	},
	[types.HIDE_TOOLTIP]: (state) => {
		return {
			...state,
      tooltip: {
        isActive: false,
        parent: '#App',
        content: null,
        position: null,
      }
		}
	},
})
