import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Demo from './pages/Demo';

class App extends Component {
  	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					{/* <Route exact path="/demo" component={Demo} /> */}
				</div>
			</Router>
		);
  }
}

export default App;