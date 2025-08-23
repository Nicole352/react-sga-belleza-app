import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './pages/Inicio';
import PaginaCursos from './pages/Cursos';
import PaginaAvales from './pages/Avales';
import PaginaSobreNosotros from './pages/SobreNosotros';
import PaginaAulaVirtual from './pages/AulaVirtual';
import PaginaContactenos from './pages/Contactenos';
import DetalleCurso from './pages/DetalleCurso';
import Header from './components/Header';
import Pago from './pages/Pago';
import DashboardLayout from './pages/DashboardLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/cursos" element={<PaginaCursos />} />
          <Route path="/avales" element={<PaginaAvales />} />
          <Route path="/sobre-nosotros" element={<PaginaSobreNosotros />} />
          <Route path="/aula-virtual" element={<PaginaAulaVirtual />} />
          <Route path="/contactenos" element={<PaginaContactenos />} />
          <Route path="/detalle-curso" element={<DetalleCurso />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;