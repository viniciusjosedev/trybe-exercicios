import { nanoid } from 'nanoid'

document.getElementsByTagName('button')[0].addEventListener('click', () => {
	document.getElementsByTagName('h2')[0].innerText = nanoid();
})