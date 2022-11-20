var dict = {}
function inicializar() {
	if( localStorage.getItem('configPersonal') === null) {
		localStorage.setItem('configPersonal', JSON.stringify({}))
	} else {
		let cont = 0;
		let iniciar = JSON.parse(localStorage.getItem('configPersonal'))
		for (i in iniciar) {
			cont += 1
		}
		if (cont > 0) {
			document.getElementsByTagName('body')[0].style.backgroundColor = iniciar['backgroundColor']
			document.getElementsByClassName('input')[0].value = iniciar['backgroundColor']
			document.getElementsByTagName('p')[0].style.color = iniciar['color']
			document.getElementsByClassName('input')[1].value = iniciar['color']
			document.getElementsByTagName('p')[0].style.fontSize = iniciar['fontSize']
			document.getElementsByClassName('input')[2].value = iniciar['fontSize']
			document.getElementsByTagName('p')[0].style.lineHeight = iniciar['lineHeight']
			document.getElementsByClassName('input')[3].value = iniciar['lineHeight']
			document.getElementsByTagName('p')[0].style.fontFamily = iniciar['fontFamily']
			document.getElementsByClassName('input')[4].value = iniciar['fontFamily']
			document.getElementsByTagName('h1')[0].style.color = iniciar['color']
			dict = {
				'backgroundColor': iniciar['backgroundColor'],
				'color': iniciar['color'],
				'fontSize': iniciar['fontSize'],
				'lineHeight': iniciar['lineHeight'],
				'fontFamily': iniciar['fontFamily']
			}
		}
		
	}
}



function addStorage() {
	document.getElementsByClassName('input-corDeFundo')[0].addEventListener('keyup',function(event){
		document.getElementsByTagName('body')[0].style.backgroundColor = event.target.value; 
		dict['backgroundColor'] = event.target.value
		localStorage.setItem('configPersonal', JSON.stringify(dict))
	})
	document.getElementsByClassName('input-corDoTexto')[0].addEventListener('keyup',function(event){
		document.getElementsByTagName('p')[0].style.color = event.target.value; 
		document.getElementsByTagName('h1')[0].style.color = event.target.value;  
		dict['color'] = event.target.value
		localStorage.setItem('configPersonal', JSON.stringify(dict))
	})
	document.getElementsByClassName('input-tamanhoDaFonte')[0].addEventListener('keyup',function(event){
		document.getElementsByTagName('p')[0].style.fontSize = event.target.value; 
		dict['fontSize'] = event.target.value
		localStorage.setItem('configPersonal', JSON.stringify(dict))
	})
	document.getElementsByClassName('input-espacamento')[0].addEventListener('keyup',function(event){
		document.getElementsByTagName('p')[0].style.lineHeight = event.target.value; 
		dict['lineHeight'] = event.target.value
		localStorage.setItem('configPersonal', JSON.stringify(dict))
	})
	document.getElementsByClassName('input-tipoDaFonte')[0].addEventListener('keyup',function(event){
		document.getElementsByTagName('p')[0].style.fontFamily = event.target.value; 
		dict['fontFamily'] = event.target.value
		localStorage.setItem('configPersonal', JSON.stringify(dict))
	})
	
}

addStorage()
window.onload = inicializar()

