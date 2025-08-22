import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowLeftCircle } from 'lucide-react';
import Footer from '../components/Footer';

// Simulación de datos detallados por curso
const detallesCursos = {
  facial: {
    titulo: 'Cosmetología',
    descripcion: 'Aprende técnicas profesionales de limpieza, hidratación y rejuvenecimiento facial.',
    duracion: '6 meses',
    requisitos: [
      'Ser mayor de 16 años',
      'Secundaria completa',
      'Entrevista personal'
    ],
    malla: [
      'Anatomía y fisiología de la piel',
      'Técnicas de limpieza facial',
      'Tratamientos hidratantes',
      'Rejuvenecimiento facial',
      'Prácticas supervisadas'
    ],
    promociones: [
      '10% de descuento por pago al contado',
      'Matrícula gratis hasta el 30 de septiembre'
    ],
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png'
  }
};

const sectionBase = {
  borderRadius: '18px',
  boxShadow: '0 8px 32px rgba(251,191,36,0.12)',
  marginBottom: '32px',
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  padding: '0'
};

const sectionA = {
  ...sectionBase,
  background: 'rgba(255,255,255,0.98)',
  padding: '32px'
};

const sectionB = {
  ...sectionBase,
  background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
  color: '#1a202c',
  padding: '0'
};

const sectionC = {
  ...sectionBase,
  background: 'rgba(255,255,255,0.93)',
  border: '2px solid #fbbf24',
  padding: '32px'
};

const buttonStyle = {
  background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
  color: '#1a202c',
  fontWeight: '700',
  border: 'none',
  borderRadius: '30px',
  padding: '12px 32px',
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 4px 16px rgba(251,191,36,0.18)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  textDecoration: 'none',
  marginTop: '18px'
};

const imgSectionStyle = {
  width: 160,
  height: 160,
  borderRadius: 18,
  objectFit: 'cover',
  boxShadow: '0 4px 16px rgba(251,191,36,0.18)'
};

const DetalleCurso = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const cursoKey = params.get('curso') || 'facial';
  const curso = detallesCursos[cursoKey];

  if (!curso) {
    return (
      <div style={{ paddingTop: 120, textAlign: 'center', color: '#b45309' }}>
        <h2>Curso no encontrado</h2>
        <Link to="/" style={buttonStyle}>
          <Sparkles size={16} />
          Volver al inicio
        </Link>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
      paddingTop: 110,
      paddingBottom: 0
    }}>
      {/* Botón volver debajo del header */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0,0,0,0.7)',
            border: 'none',
            borderRadius: '30px',
            padding: '8px 18px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            color: '#fbbf24',
            margin: '24px 0 32px 0'
          }}
          aria-label="Volver"
        >
          <ArrowLeftCircle size={28} color="#fbbf24" />
          <span style={{ color: '#fbbf24', fontWeight: 600, fontSize: '1.1rem' }}>Volver</span>
        </button>

        {/* Cabecera */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 32 }}>
          <img src={curso.imagen} alt={curso.titulo} style={{ width: 140, height: 140, borderRadius: 18, objectFit: 'cover', boxShadow: '0 4px 16px rgba(251,191,36,0.18)' }} />
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: 8 }}>{curso.titulo}</h1>
            <p style={{ color: '#f3e8d6', fontSize: '1.1rem', marginBottom: 0 }}>{curso.descripcion}</p>
          </div>
        </div>

        {/* Duración (con imagen a la izquierda) */}
        <div style={sectionA}>
          <img src={curso.imagen} alt="Duración" style={imgSectionStyle} />
          <div>
            <h2 style={{ color: '#b45309', fontSize: '1.3rem', marginBottom: 8 }}>Duración</h2>
            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>{curso.duracion}</p>
            <Link to="/" style={buttonStyle}>
              <Sparkles size={16} />
              Inscríbete Ya
            </Link>
          </div>
        </div>

        {/* Requisitos (solo texto, fondo amarillo) */}
        <div style={sectionB}>
          <div style={{ padding: '32px', flex: 1 }}>
            <h2 style={{ color: '#1a202c', fontSize: '1.3rem', marginBottom: 8 }}>Requisitos</h2>
            <ul style={{ color: '#1a202c', fontSize: '1.1rem', marginLeft: 18 }}>
              {curso.requisitos.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
            <Link to="/" style={buttonStyle}>
              <Sparkles size={16} />
              Inscríbete Ya
            </Link>
          </div>
        </div>

        {/* Programa/Malla (con fondo de imagen) */}
        <div style={sectionC}>
          <h2 style={{ color: '#b45309', fontSize: '1.3rem', marginBottom: 8 }}>Programa / Malla</h2>
          <ul style={{ color: '#6b7280', fontSize: '1.1rem', marginLeft: 18 }}>
            {curso.malla.map((modulo, idx) => (
              <li key={idx}>{modulo}</li>
            ))}
          </ul>
          <Link to="/" style={buttonStyle}>
            <Sparkles size={16} />
            Inscríbete Ya
          </Link>
        </div>

        {/* Promociones (con iconos) */}
        <div style={sectionA}>
          <h2 style={{ color: '#b45309', fontSize: '1.3rem', marginBottom: 8 }}>Promociones</h2>
          <ul style={{ color: '#6b7280', fontSize: '1.1rem', marginLeft: 18, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {curso.promociones.map((promo, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} color="#fbbf24" />
                {promo}
              </li>
            ))}
          </ul>
          <Link to="/" style={buttonStyle}>
            <Sparkles size={16} />
            Inscríbete Ya
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetalleCurso;