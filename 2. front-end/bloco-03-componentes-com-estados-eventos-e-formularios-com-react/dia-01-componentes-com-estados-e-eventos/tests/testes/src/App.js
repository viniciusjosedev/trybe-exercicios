// import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component {

	state = {
		cliquesVermelho: 0,
		cliquesAmarelo: 0,
		cliquesVerde: 0,
	}

  impressao(cor) {
    // console.log(this.state)
		this.setState((atual) => ({
			[`cliques${cor}`]: atual[`cliques${cor}`] + 1,
		}))
	}

	color = (clique, cor) => {
		const numero = this.state[`cliques${clique}`];
		if (numero % 2 === 0) {
			return cor;
		}
		return 'white';
	}

	render() {
		const { cliquesVermelho, cliquesVerde, cliquesAmarelo } = this.state;
		return (
			<main>
				<button onClick={ () => this.impressao('Vermelho') }  style={{backgroundColor: this.color('Vermelho','red')}} >Vermelho</button>
				<button onClick={() => this.impressao('Verde')} style={{backgroundColor: this.color('Verde','green')}}>Verde</button>
				<button onClick={() => this.impressao('Amarelo')} style={{backgroundColor: this.color('Amarelo','yellow')}}>Amarelo</button>
				<p>O botão Vermelho foi clicado: {cliquesVermelho}</p>
				<p>O botão Verde foi clicado: {cliquesVerde}</p>
				<p>O botão Amarelo foi clicado: {cliquesAmarelo}</p>
			</main>
		);
	}
}
