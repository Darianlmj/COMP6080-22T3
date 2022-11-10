import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          role='button'
          name='main-button'
          id='main-button'
          title='Click Me!'
        />
      </header>
    </div>
  );
}

export default App;
