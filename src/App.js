import logo from "./logo.svg";
import "./App.css";
import CardGroup from "./components/CardGroup/CardGroup";

function App() {
  return (
    <div className="App">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <CardGroup></CardGroup>
    </div>
  );
}

export default App;
