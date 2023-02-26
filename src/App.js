import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center py-3">Weather React App</h1>
        </header>
        <Weather city="berlin" />
        <footer>
          this project was coded by{" "}
          <a
            href="https://cool-starship-bcbb97.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            Ro?a
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Rojahm/react-weather-app-v4"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
