import "./App.css";
import Classpage from "./Pages/classPage/Classpage";
import Functionalpage from "./Pages/functionalPage/Functionalpage";

function App() {
  return (
    <div className="App">
      <Classpage className="classpage" />
      <Functionalpage className="functionalpage" />
    </div>
  );
}

export default App;
