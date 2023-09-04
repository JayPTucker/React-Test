import './App.css';

import GreenScreenGif from './FinalGreenScreen.webm';
import GreenScreenGif2 from './output_video.webm';
import GreenScreenGif3MOV from './GreenScreenTRIM.webm';

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
            <source src={GreenScreenGif2} type="video/webm" />
            {/* Add additional source elements for different video formats if needed */}
          </video>

      </header>
    </div>
  );
}

export default App;
