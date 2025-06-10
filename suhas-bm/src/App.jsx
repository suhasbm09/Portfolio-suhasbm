// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
