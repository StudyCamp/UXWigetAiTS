import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "../pages/HomePage";

function App() {
  return (
    <>
      
  
      <header className="page-header">
          <h1>hello Leon</h1>
      </header>
  

   <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/redirect" element={<Navigate to="/test" />} />
        <Route path="/test" element={(
          <div>
            <h1>Test Page</h1>
          </div>
        )} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
