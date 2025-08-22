import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

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
  },
  manicuria: {
    titulo: 'Cosmiatría',
    descripcion: 'Domina el arte de la manicura, esmaltado semipermanente y decoración de uñas.',
    duracion: '4 meses',
    requisitos: [
      'Ser mayor de 16 años',
      'Ganas de aprender'
    ],
    malla: [
      'Cuidado de manos y uñas',
      'Técnicas de esmaltado',
      'Decoración artística',
      'Bioseguridad',
      'Prácticas en modelos reales'
    ],
    promociones: [
      'Inscripción sin costo',
      'Kit de inicio gratis para las primeras 20 alumnas'
    ],
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png'
  },
  depilacion: {
    titulo: 'Maquillaje Profesional',
    descripcion: 'Conoce los métodos más efectivos y seguros de depilación corporal y facial.',
    duracion: '3 meses',
    requisitos: [
      'Ser mayor de 18 años',
      'Secundaria completa'
    ],
    malla: [
      'Depilación con cera',
      'Depilación con hilo',
      'Cuidados post-depilación',
      'Bioseguridad',
      'Prácticas supervisadas'
    ],
    promociones: [
      'Descuento especial por grupos',
      'Materiales incluidos'
    ],
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png'
  }
};

const sectionStyle = {
  background: 'rgba(255,255,255,0.98)',
  borderRadius: '18px',
  boxShadow: '0 8px 32px rgba(251,191,36,0.12)',
  padding: '32px',
  marginBottom: '32px'
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

const DetalleCurso = () => {
  const location = useLocation();
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
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(circle,rgba(245, 158, 11, 0.12) 0%, rgba(0, 0, 0, 0.95) 80%)', paddingTop: 110, paddingBottom: 40 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 32 }}>
          <img src={curso.imagen} alt={curso.titulo} style={{ width: 140, height: 140, borderRadius: 18, objectFit: 'cover', boxShadow: '0 4px 16px rgba(251,191,36,0.18)' }} />
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#b45309', marginBottom: 8 }}>{curso.titulo}</h1>
            <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: 0 }}>{curso.descripcion}</p>
          </div>
        </div>

        {/* Duración */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#b45309', fontSize: '1.3rem', marginBottom: 8 }}>Duración</h2>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>{curso.duracion}</p>
          <Link to="/" style={buttonStyle}>
            <Sparkles size={16} />
            Inscríbete Ya
          </Link>
        </div>

        {/* Requisitos */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#b45309', fontSize: '1.3rem', marginBottom: 8 }}>Requisitos</h2>
          <ul style={{ color: '#6b7280', fontSize: '1.1rem', marginLeft: 18 }}>
            {curso.requisitos.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
          <Link to="/" style={buttonStyle}>
            <Sparkles size={16} />
            Inscríbete Ya
          </Link>
        </div>

        {/* Programa/Malla */}
        <div style={sectionStyle}>
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

        {/* Promociones */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#b45309', fontSize: '1.3rem', marginBottom: 8 }}>Promociones</h2>
          <ul style={{ color: '#6b7280', fontSize: '1.1rem', marginLeft: 18 }}>
            {curso.promociones.map((promo, idx) => (
              <li key={idx}>{promo}</li>
            ))}
          </ul>
          <Link to="/" style={buttonStyle}>
            <Sparkles size={16} />
            Inscríbete Ya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleCurso;