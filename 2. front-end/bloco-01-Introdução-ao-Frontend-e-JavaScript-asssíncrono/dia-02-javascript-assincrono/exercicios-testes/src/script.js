function func(a) {
	console.log(a)
}

fetch('https://dummyjson.com/users')
.then(result => result.json())
.then(result => func([result]))

	
