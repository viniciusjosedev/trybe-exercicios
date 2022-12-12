// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
		state = {
			textarea: '',
		}

  func = (event) => {
		console.log(event.target.value)
		this.setState(() => ({
			textarea: event.target.value,
		}))
	}

  render() {
		return (
			<div>
				<select>
					<option>aa</option>
					<option>bb</option>
				</select>
				<br/>
				<input type="text" placeholder="texto"></input>
				<br/>
				<input type="number" placeholder="numero" required></input>
				<br/>
				<textarea onChange={this.func} placeholder="texto">{this.state.textarea}</textarea>
			</div>
		);
  }
}

export default App;
