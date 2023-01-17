import logo from './download.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h2>
          Download IOS Applicatoion
        </h2>
        <a
          className="App-link"
          href="./application/manifest.plist"
          target="_blank"
          rel='noopener noreferrer'
          >
          Download Application
        </a>
        <a href="itms-services://?action=download-manifest&amp; 
    url=https://aerodynamic.vercel.app/application/manifest.plist" className="App-link" 
    target="_blank"
    rel='noopener noreferrer'>
    Download Application
</a>
      </header>
    </div>
  );
}

export default App;
