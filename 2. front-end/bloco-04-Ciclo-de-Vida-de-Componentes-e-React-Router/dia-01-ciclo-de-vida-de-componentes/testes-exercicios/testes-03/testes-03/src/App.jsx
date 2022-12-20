import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
		super();
		this.state = {
			dados: [],
		}
	}

	getDados = () => {
		this.setState({
			dados: [],
		}, async () => {
			await fetch('https://api.randomuser.me/')
			.then(result => result.json())
			.then(data => this.setState({
				dados: data,
			}))
		})		
	}

	componentDidMount = () => {
		console.log('componentDidMount')
		this.getDados();
	}

	shouldComponentUpdate(a, b) {
		console.log('shouldComponentUpdate')
		if (b.dados.length === 0) return true;
		if (b.dados.results[0].dob.age < 50) return true;
		return false;
	}

	render() {
		const { dados } = this.state;
		return(
			<>
				<h1>Dados confidenciais</h1>
				{dados.length !== 0 ? (
					<>
						<img src={ dados.results[0].picture.large } alt={`${dados.results[0].name.first} ${dados.results[0].name.last}`} />
						<p>{ `${dados.results[0].name.first} ${dados.results[0].name.last}, ${dados.results[0].dob.age}` }</p>
						<p>{`${dados.results[0].email}`}</p>
					</>	
				) :  <p>Loading...</p>}
				<button onClick={this.getDados}>Mudar</button>
			</>
		)
	}
}

export default App;
