import { legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

function criarCor() {
	const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	let cor = '#';
	const aleatorio = () => Math.floor(Math.random() * oneChar.length);
	for (let i = 0; i < 6; i += 1) {
			cor += oneChar[aleatorio()];
	}
	return cor;
}

const INITIAL_STATE = {
	colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
	index: 0,
};

const reducer = (state = INITIAL_STATE, actions) => {
	switch (actions.type) {
		case ('NEXT_COLOR'):
			state.index = state.index === state.colors.length - 1 ? 0 : state.index + 1;
			return state; 
		case ('PREVIOUS_COLOR'):
			state.index = state.index === 0 ? state.colors.length - 1 : state.index - 1;
			return state;
		case ('RANDOM_COLOR'):
			const randomColor = criarCor();
			state.colors.push(randomColor);
			state.index = state.colors.length - 1;
			return state;
		default:
			return state;
	}
}

const store = createStore(reducer, composeWithDevTools());

document.getElementById('previous').addEventListener('click', () => {
	store.dispatch({ type: 'PREVIOUS_COLOR' })
})

document.getElementById('next').addEventListener('click', () => {
	store.dispatch({ type: 'NEXT_COLOR' })
})

document.getElementById('renderColor').addEventListener('click', () => {
	store.dispatch({ type: 'RANDOM_COLOR' })
})

store.subscribe(() => {
	const cor = store.getState().colors[store.getState().index]
	document.getElementById('value').innerHTML = cor;
	document.getElementById('container').style.backgroundColor = cor;
})
