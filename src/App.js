import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <small>
          Open-Source Code{" "}
          <a
            href="https://github.com/saskiajasmin/react-dictionary"
            target="_blank"
            rel="noreferrer"
            alt="GitHub">
            @GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
