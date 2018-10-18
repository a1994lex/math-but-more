import type { Reducer } from 'redux'
import type { ActionSubclass } from './types'

export default function createStore<State>(
	initialState: State,
	handlers: { [type: string]: (State, ActionSubclass) => State }
): Reducer<State, ActionSubclass> {
	return (state: State = initialState, action: ActionSubclass): State => {
		return handlers[action.type] ? handlers[action.type](state, action) : state
	}
}
