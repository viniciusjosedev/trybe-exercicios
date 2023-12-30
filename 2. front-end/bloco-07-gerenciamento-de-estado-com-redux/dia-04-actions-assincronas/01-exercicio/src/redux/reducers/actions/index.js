const actions = (state) => ({
	type: 'API_DONE',
	payload: state,
});

const mainAction = (value) => {
	return (dispatch) => {
			fetch(`https://anapioficeandfire.com/api/characters?name=${value}`)
			.then((e) => e.json()).then((data) => dispatch(actions(data)));
		};
}

export default mainAction;
