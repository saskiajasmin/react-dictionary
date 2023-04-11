import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="panel">
        <Dictionary defaultKeyword="sunrise" />
      </main>
      <footer className="text-center">
        <small>
          Open-Source Code{" "}
          <strong>
            <a
              href="https://github.com/saskiajasmin/react-dictionary"
              target="_blank"
              rel="noreferrer"
              alt="GitHub">
              @GitHub
            </a>
          </strong>
        </small>
      </footer>
    </div>
  );
}

export default App;
