export const createStore = reducers => {
	const state = {}
	const subscribers = []

	const processReducers = action => {
		reducers.forEach(reducer => {
			for (const key in reducer) {
				const fn = reducer[key]
				state[key] = fn({ state: state[key], action })
			}
		})
		subscribers.forEach(fn => fn(state))
	}

	processReducers({ type: 'INIT' })

	return {
		dispatch: action => processReducers(action),
		subscribe: fn => subscribers.push(fn),
		getState: () => state
	}
}
