import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'

const INITIAL_STATE = {
	status: 'offline',
	theme: 'dark',
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');


const reducer = (state = INITIAL_STATE, actions) => {
	switch (actions.type) {
		case ('ligth'):
			state.theme = 'ligth';
			return state;
		case ('dark'):
			state.theme = 'dark';
			return state;
		case ('online'):
			state.status = 'online';
			return state;
		case ('offline'):
			state.status = 'offline';
			return state;
	}
	return state;
}

const store = createStore(reducer, composeWithDevTools());

themeButton.addEventListener('click', () => {
	if (store.getState().theme === 'dark') store.dispatch({ type: 'ligth' });
	else {
		store.dispatch({ type: 'dark' });
	}
});

statusButton.addEventListener('click', () => {
	if (store.getState().status === 'online') store.dispatch({ type: 'offline' });
	else {
		store.dispatch({ type: 'online' });
	}
});

store.subscribe(() => {
	if (store.getState().theme === 'ligth') {
		document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
		document.getElementsByTagName('body')[0].style.color = 'black';
		document.getElementById('toggle-theme').innerText = 'Ligth Mode';
	} if (store.getState().theme === 'dark') {
		document.getElementsByTagName('body')[0].style.backgroundColor = '#333';
		document.getElementsByTagName('body')[0].style.color = 'white';
		document.getElementById('toggle-theme').innerText = 'Dark Mode';
	} if (store.getState().status === 'offline') {
		document.getElementById('status').innerText = 'Offline';
		document.getElementById('toggle-status').innerText = 'Ficar Online';
	} if (store.getState().status === 'online') {
		document.getElementById('status').innerText = 'Online';
		document.getElementById('toggle-status').innerText = 'Ficar Offline';
	}
})