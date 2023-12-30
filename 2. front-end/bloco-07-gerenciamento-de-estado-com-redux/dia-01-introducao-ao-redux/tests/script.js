import { legacy_createStore as createStore } from 'redux';

const action = {
  type: 'INCREMENT_COUNTER'
};

const reducer = (state = {numero: 0}, action) => {
	if (action.type === 'INCREMENT_COUNTER') {
			return { numero: state.numero + 1, }
	} return state;
}

const store = createStore(reducer);

export default function exec() {
	store.dispatch(action);
}

console.log(store)