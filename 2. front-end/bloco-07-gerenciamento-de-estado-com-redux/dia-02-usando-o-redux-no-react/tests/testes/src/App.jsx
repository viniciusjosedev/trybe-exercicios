import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions/actions';

const redux = (state) => ({
  state,
});

class App extends React.Component {
  render() {
		const { state, dispatch } = this.props;
		console.log(state);
    return (
      <div>
        <h1>Contador</h1>
        <h2>{state.counterReducer.count}</h2>
        <button onClick={ () => dispatch(actionCreator()) }>Incrementa 1</button>
        <button onClick={ () => dispatch(actionCreator(5)) }>Incrementa 5</button>
      </div>
    );
  }
}

export default connect(redux)(App);
