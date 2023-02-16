import { useState } from 'react';
// import { useEffect } from 'react';

function HelloWorld() {
	const [ handleState, funcHandleState ] = useState({
		name: '',
		idade: '',
		cidade: '',
		curso: '',
	})

  const handleChange = ({ target: { type, value, name } }) => {
		if (type === 'radio') funcHandleState({ ...handleState, curso: value })
		else funcHandleState({ ...handleState, [name]: value })
	}

	return (
		<>
			<input type="text" name="name" onChange={ handleChange } value={handleState.name} placeholder="Nome" />
			<input type="number" name="idade" onChange={ handleChange } value={handleState.idade} placeholder="idade" />
			<input type="text" name="cidade" onChange={ handleChange } value={handleState.cidade} placeholder="cidade" />
			<br />
			<label htmlFor="">Fundamentos
				<input type="radio" onChange={ handleChange } value="fundamentos" name="curso"/>
			</label>
			<label htmlFor="">Front-End
				<input type="radio" onChange={ handleChange } value="front-end" name="curso"/>
			</label>
			<label htmlFor="">Back-End
				<input type="radio" onChange={ handleChange } value="back-end" name="curso"/>
			</label>
			<label htmlFor="">Ciência da Computação
				<input type="radio" onChange={ handleChange } value="ciencia-da-computacao" name="curso"/>
			</label>
			<br />
			<button type="button">Enviar</button>
		</>
	)
}

export default HelloWorld;