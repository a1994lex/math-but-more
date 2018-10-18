import { createStore } from 'redux'
import createRootReducer from './rootReducer'
import type { Action, ActionSubclass } from './types'
import type { ReduxStore } from './rootReducer'
import type { Store, Reducer } from 'redux'


const store: Store<ReduxStore, Action> = createStore(createRootReducer())

const storeWithDynamicReducers = {
	...store,
	dynamicReducers: {},
}

export default storeWithDynamicReducers

export function addReducer(name: string, reducer: Reducer<*, ActionSubclass>) {
	if (storeWithDynamicReducers.dynamicReducers[name]) {
		return
	}

	storeWithDynamicReducers.dynamicReducers[name] = reducer
	storeWithDynamicReducers.replaceReducer(
		createRootReducer(storeWithDynamicReducers.dynamicReducers)
	)
}
