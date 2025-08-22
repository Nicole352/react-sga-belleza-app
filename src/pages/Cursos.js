import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const cursosData = [
  {
    id: 1,
    titulo: 'Cosmetologia',
    descripcion: 'Aprende técnicas profesionales de limpieza, hidratación y rejuvenecimiento facial.',
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png',
    enlace: '/aula-virtual?curso=facial'
  },
  {
    id: 2,
    titulo: 'Cosmiatria',
    descripcion: 'Domina el arte de la manicura, esmaltado semipermanente y decoración de uñas.',
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png',
    enlace: '/aula-virtual?curso=manicuria'
  },
  {
    id: 3,
    titulo: 'Maquillaje Profesional',
    descripcion: 'Conoce los métodos más efectivos y seguros de depilación corporal y facial.',
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png',
    enlace: '/aula-virtual?curso=depilacion'
  },
   {
    id: 4,
    titulo: 'Lashista Profesional',
    descripcion: 'Aprende técnicas profesionales de limpieza, hidratación y rejuvenecimiento facial.',
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png',
    enlace: '/aula-virtual?curso=facial'
  },
  {
    id: 5,
    titulo: 'Tecnicas en Uñas',
    descripcion: 'Domina el arte de la manicura, esmaltado semipermanente y decoración de uñas.',
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png',
    enlace: '/aula-virtual?curso=manicuria'
  },
  {
    id: 6,
    titulo: 'Belleza Integral',
    descripcion: 'Conoce los métodos más efectivos y seguros de depilación corporal y facial.',
    imagen: 'https://res.cloudinary.com/dfczvdz7b/image/upload/v1755893924/cursos_xrnjuu.png',
    enlace: '/aula-virtual?curso=depilacion'
  }
];

const pageStyle = {
  minHeight: '100vh',
  background: 'radial-gradient(circle,rgba(245, 158, 11, 1) 0%, rgba(0, 0, 0, 1) 25%)',
  paddingTop: '110px',
  paddingBottom: '40px'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px'
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#d9dde7ff',
  marginBottom: '16px',
  textShadow: '0 2px 10px rgba(255, 255, 255, 0.15)'
};

const subtitleStyle = {
  fontSize: '1.2rem',
  color: '#dd983dff',
  marginBottom: '36px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '32px'
};

const cardStyle = {
  background: 'rgba(240, 228, 228, 0.98)',
  borderRadius: '18px',
  boxShadow: '0 8px 32px rgba(251,191,36,0.18)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s, box-shadow 0.2s'
};

const cardImageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover'
};

const cardBodyStyle = {
  padding: '24px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
};

const cardTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#b45309',
  marginBottom: '10px'
};

const cardDescStyle = {
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '18px',
  flex: 1
};

const cardButtonStyle = {
  background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
  color: '#1a202c',
  fontWeight: '700',
  border: 'none',
  borderRadius: '30px',
  padding: '12px 0',
  width: '100%',
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 4px 16px rgba(251,191,36,0.18)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  textDecoration: 'none',
  transition: 'all 0.2s'
};

const Cursos = () => (
  <div style={pageStyle}>
    <div style={containerStyle}>
      <h1 style={titleStyle}>Nuestros Cursos</h1>
      <p style={subtitleStyle}>
        <Sparkles size={16} style={{ marginRight: 6, color: '#fbbf24', verticalAlign: 'middle' }} />
        Elige el curso que más te inspire y comienza tu formación profesional.
      </p>
      <div style={gridStyle}>
        {cursosData.map((curso) => (
          <div
            key={curso.id}
            style={cardStyle}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(251,191,36,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(251,191,36,0.18)';
            }}
          >
            <img src={curso.imagen} alt={curso.titulo} style={cardImageStyle} />
            <div style={cardBodyStyle}>
              <div style={cardTitleStyle}>{curso.titulo}</div>
              <div style={cardDescStyle}>{curso.descripcion}</div>
              <Link to={curso.enlace} style={cardButtonStyle}>
                <Sparkles size={16} />
                Ver Curso
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Cursos;