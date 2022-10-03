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
	let cont2 = 0;
	buttom2.addEventListener('click', function (){
		if (cont2 === 0) {
			for (i = 0; i < document.getElementsByClassName('friday').length; i += 1) {
				document.getElementsByClassName('friday')[i].innerText = 'SEXTOUUU!!'
				cont2 += 1
			}
		}
		else {
			for (i = 0; i < document.getElementsByClassName('day').length; i += 1) {
				if (i == parseInt('4') || i == parseInt('11') || i == parseInt('18') || i == parseInt('25')) {
					document.getElementsByClassName('day')[i+1].innerText = i;
				}
			}
			cont2 = 0;
		}
	})
	// Função para dar e tirar zoom.
	let index = 0;
	for (i = 0; i < document.getElementsByClassName('day').length; i += 1) {
		index = i;
		document.getElementsByClassName('day')[index].addEventListener('mouseover', function(evento){
			evento.target.style.fontSize = '28px'
		})
	}

	index = 0
	for (i = 0; i < document.getElementsByClassName('day').length; i += 1) {
		index = i
		document.getElementsByClassName('day')[index].addEventListener('mouseout', function(evento) {
			evento.target.style.fontSize = '20px'
		})
	}
	// Função personalizada
	function personalizada(nome) {
		spanTag = document.createElement('span')
		spanTag.innerText = nome;
		document.getElementsByClassName("my-tasks")[0].appendChild(spanTag)
	}
	personalizada('cozinhar')
	// cor para a tarefa.
	function corTarefa(cor) {
	divTag = document.createElement('div') 
	divTag.className = 'task';
	divTag.style.backgroundColor = cor	;
	document.getElementsByClassName('my-tasks')[0].appendChild(divTag)
	}
	corTarefa('red')

	// função para selecionar tarefa && função para alterar cor do dia do calendario.

	let cont3 = 0
	function alteraElemento() {
		if (cont3 === 0) {
			document.getElementsByClassName('task')[0].className += ' selected';
			index2 = 0;
				for (i = 0; i < document.getElementsByClassName('day').length; i += 1) {
					index2 = i
					document.getElementsByClassName('day')[index2].addEventListener('click', function (event){
						event.target.style.color = document.getElementsByClassName('task')[0].style.backgroundColor;
					})
				}
			
			cont3 += 1
		}
		else {
			document.getElementsByClassName('task')[0].className = 'task';
			for (i = 0; i < document.getElementsByClassName('day').length; i += 1) {
				index2 = i;
				document.getElementsByClassName('day')[index2].addEventListener('click', function (event){
					event.target.style.color = 'rgb(119,119,119)';
				})
			}
		cont3 = 0
		}
	}
	document.getElementsByClassName('task')[0].addEventListener('click', alteraElemento)

	// Função bonus

	document.getElementById('task-input').addEventListener('keyup', function(event) {
		let divTag2 = document.createElement('div')
		if ()
			divTag2.innerText = event.target.value
		document.getElementsByClassName('input-container')[0].appendChild(divTag2)
	})


	
}


































  







  