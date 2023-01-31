import { Component } from "react";
import { connect } from 'react-redux';
import mainAction from "./redux/reducers/actions";

class App extends Component {
	render() {
		const { dispatch, data } = this.props;
		console.log(data);
		return (
			<>
				<label htmlFor="">
					<input type="text" id="" />
				</label>
				<button type="button" onClick={ ({ target: { value } }) => dispatch(mainAction(value)) }>Pesquisar</button>
				{data ? data.map((elemento) => (
					<p>{elemento.aliases[0]}</p>
				)) : null}
			</>
		);
	}
}

const gobalDados = (state) => ({
	data: state.data,
}) 

export default connect(gobalDados)(App)
