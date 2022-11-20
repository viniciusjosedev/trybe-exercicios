import Swal from 'sweetalert2';
import './style.css'

const api = 'https://www.superheroapi.com/api.php/1181160759473546/'

const generator = () => {
  document.getElementsByTagName('img')[0].style.width = '300px';
	document.getElementsByTagName('img')[0].style.height = '500px';
	const random = Math.floor(Math.random()*731);
	console.log(random)
	fetch(`${api}${random}`)
	.then(resultado => resultado.json()).then(resultado => {
		document.getElementsByTagName('img')[0].src = resultado.image.url;
		document.getElementsByTagName('h2')[0].innerText = `Name: ${resultado.name}`;
	})
	.catch(() => {
		return Swal.fire({
			title: 'Ops...',
			icon: 'error',
			text: 'Aconteceu um erro, volte mais tarde.',
			position: 'center',
			showCancelButton: true,
			confirmButtonColor: 'green',
			cancelButtonColor: 'red',
			confirmButtonText: 'Depois volto!',
			cancelButtonText: 'Que triste...'
		})
	})
}

document.getElementsByTagName('button')[0].addEventListener('click', generator)
