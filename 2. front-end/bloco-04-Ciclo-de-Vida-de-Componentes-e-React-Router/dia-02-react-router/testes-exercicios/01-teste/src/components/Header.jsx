import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
	render() {
		const { par } = this.props.match.params
		return (
			<>
				<h2>Olá {this.props.name}, {par}</h2>
				<Link to="/">Home</Link>
			</>
		)
	}
}
