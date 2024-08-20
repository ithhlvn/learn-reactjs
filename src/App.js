import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Hồ Hoàng Lân";
  const age = 19;
  const isMale = true;
  const student = {
    name: "Hồ Hoàng Lân",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Hello ReactJs.</p>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          Xin chào: {name} - {age} {isMale ? "Male" : "Female"}{" "}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}

        {!isMale && <p>Female</p>}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
