import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather React App</h1>
        </header>
        <form>
          <input type="submit" className="btn btn-primary" value="submit" />
        </form>
        <button className="btn btn-primary">bootstrap</button>
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
