import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
				<Route exact path="/" component={ Home } />
				<Route path="/welcome" component={ Welcome } />
      </BrowserRouter>
    );
  }
}

export default App;
