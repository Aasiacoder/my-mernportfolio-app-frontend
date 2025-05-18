import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainApp from './MainApp';

function App() {
  return (
    <section>
      <Router>
        <MainApp />
      </Router>
    </section>
  );
}

export default App;
