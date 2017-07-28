import React, {
  Component
}
from 'react';
import {
  bindActionCreators
}
from 'redux';
import {
  connect
}
from 'react-redux';
import actionCreators from '../actions/template';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }
  sayHello() {
    this.props.actions.call(actionCreators("Hello World"));

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       { // {this.props.message}
        
        // <button key={1} onClick={this.sayHello.bind(this)}> Say Hello </button>
       }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    message: state.templateReducer.message
  };
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
