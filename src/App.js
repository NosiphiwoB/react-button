// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 * 
 */
class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    backgroundColor:green
  };
  this.handleClick = this.handleClick.bind(this);
}
handleClick(){
  this.setState(state) => {
    if(this.state.backgroundColor === "blue"){
      return {backgroundColor:"green"};
      else if {(state.backgroundColor:"blue")};
    }
  }
}

  render() {
    return (
      <div>
      <button onClick = {this.handleClick}>Click Me</button>
      </div>;
    );
  }
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;