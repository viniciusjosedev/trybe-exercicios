function sum() {
	const value1 = document.getElementById('value1').value;
	const value2 = document.getElementById('value2').value;
	const result = Number(value1) + Number(value2);
	try {
		if (value1 === '' || value2 === '') {
			throw new Error('O(s) valor(es) não pode(m) ser nada, preencha(m)!')
		} else if (isNaN(value1) || isNaN(value2)) {
			throw new Error('O(s) valor(es) não pode(m) ser texto!')
		}
		document.getElementById('result').innerHTML = `Resultado: ${result}`;
	} catch (error) {
		document.getElementById('result').textContent = error.message;
	} finally {
		document.getElementById('value1').value = '';
		document.getElementById('value2').value = '';	
	}
}

window.onload = () => {
	const button = document.getElementById('button');
	button.addEventListener('click', sum);
}
