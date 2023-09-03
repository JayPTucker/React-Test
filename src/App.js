import './App.css';

import GreenScreenGif from './FinalGreenScreen.webm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <video autoPlay loop className="GreenScreenGif">
            <source src={GreenScreenGif} type="video/webm" />
            {/* Add additional source elements for different video formats if needed */}
          </video>

      </header>
    </div>
  );
}

export default App;
