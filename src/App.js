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
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

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
    backgroundColor: 'green',counter: 0
  };
  this.handleClick = this.handleClick.bind(this);
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
}

increment() {
  this.setState((state) => ({
    counter: state.counter + 1
    }));
}

decrement() {
  this.setState((state) => {
    if(state.counter <= 0){
      return 0;
    } else{
      return {counter:state.counter - 1}
    }
  })
}

handleClick(){
  this.setState(state => {
    if(state.backgroundColor === "blue"){
      return {backgroundColor:"green"};}
      else if(state.backgroundColor === "green"){
        return {backgroundColor : "blue"};
      }
    }
  
  );
}

  render() {
    if (this.state.backgroundColor){
      return(
      <div class="btn" style={{backgroundColor:this.state.backgroundColor,height:"100vh"}}>
        <h1>{this.state.counter}</h1><br />
        <button onClick={this.increment}>+</button>
        <button onClick={this.handleClick}>Change Background</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )};
  }
};


// #endregion

export default App;