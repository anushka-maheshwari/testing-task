import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';

function App() {
  return (
    <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p role="paragraph">
          Edit <code>src/App.js</code> and save to reload.
         </p>
         <label>Enter Name<input placeholder='name'></input></label>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter/>
    </div>
  );
}

export default App;
