const STATE_INITIAL = {
	data: '',
};

const reducers = (state = STATE_INITIAL, actions) => {
	switch (actions.type) {
		case ('API_DONE'):
			return ({
				...state,
				data: actions.payload,
			})
		default:
			return state;
	}
}

export default reducers;
