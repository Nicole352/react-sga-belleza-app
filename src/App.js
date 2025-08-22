import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './pages/Inicio';
import PaginaCursos from './pages/Cursos';
import PaginaAulaVirtual from './pages/AulaVirtual';
import DetalleCurso from './pages/DetalleCurso';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/cursos" element={<PaginaCursos />} />
          <Route path="/aula-virtual" element={<PaginaAulaVirtual />} />
          <Route path="/detalle-curso" element={<DetalleCurso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;