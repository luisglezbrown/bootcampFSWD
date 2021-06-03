import Public from "./pages/Public";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
