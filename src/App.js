import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Abute from "./component/Abute";
import Cv from "./component/Cv";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App "></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/abute" component={Abute} />
        <Route path="/cv" component={Cv} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
