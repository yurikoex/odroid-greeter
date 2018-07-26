import fetch from 'isomorphic-unfetch'

export const hasInternet = async () => {
	const result = await fetch('https://httpbin.org/get')
	return result.status === 200
}

export default ({ store }) => {
	window.addEventListener('online', () => store.dispatch({ type: 'IS_ONLINE' }))
	window.addEventListener('offline', () =>
		store.dispatch({ type: 'IS_OFFLINE' })
	)

	setInterval(async () => {
		const result = await hasInternet()
		store.dispatch({ type: result ? 'IS_ONLINE' : 'IS_OFFLINE' })
	}, 1000 * 10)

	if (navigator.onLine) store.dispatch({ type: 'IS_ONLINE' })
}
