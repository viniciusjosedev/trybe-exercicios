window.onload = function(){
	// document.getElementById('button').addEventListener('click', function(event) {
	// 	event.preventDefault()
	// })

	let button = document.createElement('button')
	button.textContent = 'Limpar'
	button.type = 'reset'
	document.getElementById('forms').appendChild(button)

	function removeTag() {
		document.getElementById('submitFiles').remove()
	}

	let cont = 0
	document.getElementById('input-checkbox2').addEventListener('click', function(event) {
		if (cont === 0) {
			let tagInput = document.createElement('input')
			tagInput.id = 'submitFiles'
			tagInput.type = 'file'
			document.getElementById('final').appendChild(tagInput)
			console.log('oi')
			cont += 1
		} else {
			removeTag()	
			console.log('oi')
			cont = 0	
		}
	})
}