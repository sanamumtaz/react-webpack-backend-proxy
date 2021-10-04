import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [pingResponse, setPingResponse] = useState("");

  const pingBackend = () => {
    fetch("/api/ping", {
      method: "GET",
    })
      .then((response) =>
        response.text().then(function (text) {
          setPingResponse(text);
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={pingBackend}>Ping Backend</button>
        {pingResponse && <p>Backend Responded with '{pingResponse}'</p>}
      </header>
    </div>
  );
}

export default App;
