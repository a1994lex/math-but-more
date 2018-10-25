import { combineReducers } from 'redux'
import toolsReducer from './tools/toolStore'

import type { Reducer } from 'redux'
import type { Action } from './types'
import type { ToolStore } from './types'

export type ReduxStore = {
	tools: ToolStore,
}

const RESET_REDUCERS = 'RESET_REDUCERS'

export function resetReducers() {
	return { type: RESET_REDUCERS }
}

export default function createRootReducer(dynamicReducers?: {
	[string]: Function,
}): Reducer<ReduxStore, Action> {
	const appReducer = combineReducers({
		tools: toolsReducer,
		...dynamicReducers,
	})

	return (state, action) => {
		if (action.type === RESET_REDUCERS) {
			state = undefined
		}

		return appReducer(state, action)
	}
}
