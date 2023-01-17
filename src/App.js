import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Download IOS Applicatoion
        </h2>
        <a
          className="App-link"
          href="./application/Aerodynamic.ipa"
          target="_blank"
          >
          Download Application
        </a>
      </header>
    </div>
  );
}

export default App;
