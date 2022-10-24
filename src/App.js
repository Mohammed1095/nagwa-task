import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Practice from "./pages/Practice";
import Rank from "./pages/Rank";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Practice />} />
            <Route path="/practice" element={<Practice />}></Route>
            <Route path="/rank" element={<Rank />}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
