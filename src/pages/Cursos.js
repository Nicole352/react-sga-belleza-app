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