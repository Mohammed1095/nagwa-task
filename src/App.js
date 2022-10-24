import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./pages/Practice";
import Rank from "./pages/Rank";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Practice />
        </Route>
        <Route path="/rank">
          <Rank />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
