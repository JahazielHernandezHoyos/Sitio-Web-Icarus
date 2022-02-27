import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//paginas
import ENInicio from './translations/en/pages/Inicio';
import ESInicio from './translations/es/pages/Inicio';
import Login from './translations/es/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ESInicio />} />
        <Route path="/en" element={<ENInicio />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
