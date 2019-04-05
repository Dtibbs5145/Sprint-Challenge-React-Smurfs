import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3333/smurfs')
    .then(response => {this.setState({smurfs: response.data}) })
    .catch(error => console.log(error));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <ul className='nav'>
        <li>
          <Link to='/'>Village</Link>
        </li>
        <li>
          <Link to='/smurf-form'>Add Smurf</Link>
        </li>
      </ul>
      <Route exact path ='/'
      render={props => (
        <Smurfs smurfs={this.state.smurfs} />
      )}
      />
      <Route path='/smurf-form' component={SmurfForm} />        
      </div>
    );
  }
}

export default App;
