import React from 'react';
import { Route, Link } from 'react-router-dom'
import Header from './Header';
import Main from './Main';

export default class Home extends React.Component {
	render() {
		return (
			<>
			  <Route path="/">{<h1>Home</h1>}</Route>
				<Route exact path="/">{<Link to="/header">Header</Link>}</Route>
				<Route path="/header/:par" render={(props) => <Header {...props} name="Usuario"/>}></Route>
				<Route path="/main" component={Main}></Route>
			</>
		)
	}
}
