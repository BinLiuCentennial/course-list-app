//import logo from './logo.svg';
import React from "react";
import './App.css';

const App = () => {

  // React Code
  //return React.createElement('h1', {title:'Professor: Krunal'}, 'Hello Friends, Welcome to COMP229');

  // JSX code
  //return <h1 title="Professor: Krunal">Hello Friends, Welcome to COMP229</h1> 
  // JSX code: it looks like HTML but not HTML code, 
  // it converts code into the JS and basic HTML.
  return (
    <div className="course-info">
      <h2>Course List</h2>
        <ul className="course-list">
          <li>Comp229</li>
          <li>Comp246</li>
          <li>Comp225</li>
        </ul>
    </div>
  );
};

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Comp229
        </a>
      </header>
    </div>
  );
}*/

export default App;
