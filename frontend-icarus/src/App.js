import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//paginas
import ESInicio from './pages/Inicio';
import Login from './pages/Login';

function App() {
 const [language, setLanguage] = React.useState("es")
 const setLanguages = (languageString) => {
   setLanguage(languageString)
   localStorage.setItem("idioma", languageString)
   console.log("Idioma:", languageString)
 }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ESInicio language={language} setLanguage={setLanguages}/>}  />
        {/* <Route path="/en" element={<ENInicio />} /> */}
        <Route path="/login" element={<Login language={language} setLanguage={setLanguages} />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
