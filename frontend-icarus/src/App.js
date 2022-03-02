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
 const [language, setLanguage] = React.useState("es")
 const setLanguage = (languageString) => {
   setLanguage(languageString)
 }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ESInicio language={language} language={language} setLanguage={setLanguage}/>}  />
        {/* <Route path="/en" element={<ENInicio />} /> */}
        <Route path="/login" element={<Login language={language} setLanguage={setLanguage} />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
