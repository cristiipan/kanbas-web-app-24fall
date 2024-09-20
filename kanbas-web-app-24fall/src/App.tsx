import React from 'react';
import Kanbas from "./Kanbas";
import Labs from "./Labs/index";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;