import { nanoid } from 'nanoid'

import './style.css'

import copy from 'clipboard-copy'

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  const id = nanoid()
	document.getElementsByTagName('h2')[0].innerText = id;
  copy (id)
	document.getElementsByTagName('h2')[1].innerText = 'texto copiado!'	
})
