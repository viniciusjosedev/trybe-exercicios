function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');
  
	for (let index = 0; index < weekDays.length; index += 1) {
	  const days = weekDays[index];
	  const dayListItem = document.createElement('li');
	  dayListItem.innerHTML = days;
	  weekDaysList.appendChild(dayListItem);
	};
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

window.onload = days;

function days() {
	// alert ('pagina carregada com sucesso')
	// // Criação dos ultimos dias de novembro.
	let tagLi = '';
	for (i = 29; i <= 30; i += 1) {
		tagLi = document.createElement("li");
		tagLi.className = 'day'
		tagLi.innerText = `${i}`;
		document.getElementById('days').appendChild(tagLi);
	}
	// Criação dos dias em dezembro.
	for (i = 1; i <= 31; i += 1) {
		tagLi = document.createElement('li');
		tagLi.className = 'day'
		tagLi.innerText = `${i}`
		document.getElementById('days').appendChild(tagLi)
	}
	// Colocando classes nos feriados e finais de semana.
	for (i = 0; i < document.getElementsByClassName('day').length; i += 1) {
		if (i == parseInt('4') || i == parseInt('11') || i == parseInt('18') || i == parseInt('25')) {
			document.getElementsByClassName('day')[i+1].className += ' friday';

		}
		if (i == parseInt('24') || i == parseInt('25') || i == parseInt('31')) {
			document.getElementsByClassName('day')[i+1].className += ' holiday';

		}
	
	}

	// Implementando botões.
	let buttom = document.createElement('button') 
	buttom.innerText = 'Feriados'
	buttom.className = 'Feriados'
	buttom.id = 'btn-holiday'
	document.getElementsByClassName("buttons-container")[0].appendChild(buttom)

	// Implementando a função de troca de cor.
	document.getElementById('btn-holiday').addEventListener('click', alteraCor)
	let cont = 0;
	function alteraCor() {
	if (cont === 0) {
		for (i = 0; i < document.getElementsByClassName('holiday').length; i += 1) {
			document.getElementsByClassName('holiday')[i].style.backgroundColor = 'black';
			cont += 1;
		}
	}	
	else {
		for (i = 0; i < document.getElementsByClassName('holiday').length; i += 1) {
			document.getElementsByClassName('holiday')[i].style.backgroundColor = 'rgb(238,238,238)';
			cont = 0;
		}
		
	}
	}
	// Implementando outro botão.
	let buttom2 = document.createElement('button')
	buttom2.innerText = 'Sexta-feira'
	buttom2.id = 'btn-friday'
	document.getElementsByClassName('buttons-container')[0].appendChild(buttom2)
	// Implementando a função de alterar nome nas sextas-feiras.

	buttom2.addEventListener('click', function (){
		if (cont === 0) {
			for (i = 0; i < document.getElementsByClassName('friday').length; i += 1) {
				document.getElementsByClassName('friday')[i].innerText = 'SEXTOUUU!!'
				cont += 1
			}
		}
		else {
			for (i = 0; i < document.getElementsByClassName('day').length; i += 1) {
				if (i == parseInt('4') || i == parseInt('11') || i == parseInt('18') || i == parseInt('25')) {
					document.getElementsByClassName('day')[i+1].innerText = i;
				}
			}
			cont = 0;
		}
	})
}


































  







  