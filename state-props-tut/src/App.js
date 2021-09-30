import Nav from "./components/Nav";
import Tweets from "./components/Tweets";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello My Guy</h1>
      <div className="home">
        <Nav />
        <Tweets />
      </div>
    </div>
  );
}

export default App;
