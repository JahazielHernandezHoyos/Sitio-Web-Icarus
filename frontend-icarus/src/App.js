import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//paginas
import Inicio from './pages/Inicio';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
