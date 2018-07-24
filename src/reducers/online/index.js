export default {
	online: ({ state = false, action }) => {
		switch (action.type) {
			case 'IS_OFFLINE':
				state = false
				break

			case 'IS_ONLINE':
				state = true
				break

			default:
				break
		}
		return state
	}
}
