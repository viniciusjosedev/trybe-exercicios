let h1Tag = document.createElement('h1');
h1Tag.innerText = 'Exercício - JavaScript DOM';
document.getElementsByTagName('body')[0].appendChild(h1Tag);

let mainTag = document.createElement('main');
mainTag.className = 'main-content'
document.getElementsByTagName('body')[0].appendChild(mainTag)

let sectionTag = document.createElement('section')
sectionTag.className = 'center-content'
document.getElementsByTagName('main')[0].appendChild(sectionTag)

let pTag = document.createElement('p')
pTag.innerText = 'algum texto'
document.getElementsByClassName('center-content')[0].appendChild(pTag)

let section2Tag = document.createElement("section")
section2Tag.className = 'left-content'
document.getElementsByTagName('main')[0].appendChild(section2Tag)

let section3Tag = document.createElement("section")
section3Tag.className = 'right-content'
document.getElementsByTagName('main')[0].appendChild(section3Tag)

let imgTag = document.createElement('img')
imgTag.className = 'small-image'
imgTag.src = "https://picsum.photos/200"
document.getElementsByClassName('left-content')[0].appendChild(imgTag)


let lista = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
document.getElementsByClassName('right-content')[0].appendChild(document.createElement('ul'));
function func() {
	for (item = 0; item < lista.length; item += 1) {
		document.getElementsByTagName('ul')[0].appendChild(document.createElement('li'));
		let liTag = document.getElementsByTagName('li')[item];
		liTag.innerText = lista[item];
		document.getElementsByTagName('ul')[0].appendChild(liTag);
	}
}
func()

for (item = 1; item <=3; item += 1) {
	document.getElementsByTagName('main')[0].appendChild(document.createElement('h3'));
}

h1Tag.className = 'title'

for (item = 0; item <=2; item += 1) {
	document.getElementsByTagName('h3')[item].className = 'description';
}

document.getElementsByTagName('main')[0].removeChild(document.getElementsByClassName('left-content')[0])

document.getElementsByClassName('right-content')[0].style.marginRight = 'auto';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'green';

for (item = 9; item >=8; item -= 1) {
	document.getElementsByTagName('ul')[0].removeChild(document.getElementsByTagName('li')[item])
}






















