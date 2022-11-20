// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function(event) {
	event.preventDefault()
})

INPUT_CHECKBOX.addEventListener('click', function(event) {
	event.preventDefault()
})

INPUT_TEXT.addEventListener('keydown', function(event) {
	event.preventDefault()
}

// INPUT_TEXT.addEventListener('keydown', function(event) {
// 	event.preventDefault()
// })

// let string = event.target.value
// 		let stringCorreta = string.replace(event.target.value[event.target.value.length - 1], '')
// 		INPUT_TEXT.value = stringCorreta