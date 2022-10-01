window.onload = function (){
	alert("oi");
	alert("teste")
}


function teste(){
	document.getElementsByTagName('p')[0].innerText = 'teste';
}

document.getElementsByTagName('button')[0].addEventListener('click', teste())