import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Practice from "./pages/Practice";
import Rank from "./pages/Rank";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact>
          <Practice />
        </Route>
        <Route path="/rank">
          <Rank />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
