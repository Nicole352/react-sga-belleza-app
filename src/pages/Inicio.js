import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Award, ArrowRight, Play, Star, Heart, Scissors } from 'lucide-react';

const PaginaInicio = () => {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
  };

  const sectionStyle = {
    position: 'relative',
    paddingTop: '128px',
    paddingBottom: '80px',
    overflow: 'hidden',
  };

  const contentStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    position: 'relative',
  };

  const textCenterStyle = {
    textAlign: 'center',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '24px',
    padding: '8px 16px',
    marginBottom: '32px',
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px',
    lineHeight: '1.1',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #fbbf24, #f59e0b, #fbbf24)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'block',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    color: '#d1d5db',
    marginBottom: '32px',
    maxWidth: '768px',
    margin: '0 auto 32px',
    lineHeight: '1.6',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '64px',
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
    color: 'black',
    padding: '16px 32px',
    borderRadius: '24px',
    fontSize: '1.125rem',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s',
    boxShadow: '0 8px 32px rgba(251, 191, 36, 0.25)',
  };

  const secondaryButtonStyle = {
    border: '2px solid rgba(251, 191, 36, 0.5)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '24px',
    fontSize: '1.125rem',
    fontWeight: '600',
    background: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s',
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    maxWidth: '1024px',
    margin: '0 auto',
  };

  const statCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    borderRadius: '16px',
    padding: '24px',
  };

  const statNumberStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fbbf24',
    marginBottom: '8px',
  };

  const statTextStyle = {
    color: '#d1d5db',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const featuresStyle = {
    padding: '80px 0',
    position: 'relative',
  };

  const featuresTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px',
    textAlign: 'center',
  };

  const featuresSubtitleStyle = {
    fontSize: '1.25rem',
    color: '#d1d5db',
    maxWidth: '512px',
    margin: '0 auto 64px',
    textAlign: 'center',
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  };

  const featureCardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    borderRadius: '16px',
    padding: '32px',
    transition: 'all 0.3s',
    cursor: 'pointer',
  };

  const featureIconStyle = {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    transition: 'transform 0.3s',
  };

  const featureTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px',
  };

  const featureDescStyle = {
    color: '#d1d5db',
    lineHeight: '1.6',
  };

  const ctaStyle = {
    padding: '80px 0',
  };

  const ctaContentStyle = {
    background: 'linear-gradient(to right, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2))',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '24px',
    padding: '48px',
    maxWidth: '1024px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const ctaTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px',
  };

  const ctaTextStyle = {
    fontSize: '1.25rem',
    color: '#d1d5db',
    marginBottom: '32px',
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={sectionStyle}>
        <div style={contentStyle}>
          <div style={textCenterStyle}>
            {/* Badge */}
            <div style={badgeStyle}>
              <Sparkles size={16} style={{ color: '#fbbf24', marginRight: '8px' }} />
              <span style={{ color: '#fde68a', fontSize: '0.875rem', fontWeight: '500' }}>
                Educación de Excelencia en Estética
              </span>
            </div>

            {/* Título Principal */}
            <h1 style={titleStyle}>
              Transforma vidas
              <span style={gradientTextStyle}>
                con Belleza
              </span>
            </h1>

            {/* Subtítulo */}
            <p style={subtitleStyle}>
              Conviértete en una esteticista profesional con nuestros cursos certificados. 
              Aprende técnicas avanzadas de belleza y estética con los mejores especialistas.
            </p>

            {/* Botones CTA */}
            <div style={buttonContainerStyle}>
              <Link to="/cursos" style={primaryButtonStyle}>
                Ver Cursos Disponibles
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
              <button style={secondaryButtonStyle}>
                <Play size={20} style={{ marginRight: '8px' }} />
                Ver Instalaciones
              </button>
            </div>

            {/* Estadísticas */}
            <div style={statsGridStyle}>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>500+</div>
                <div style={statTextStyle}>
                  <Users size={16} style={{ marginRight: '8px' }} />
                  Estudiantes Graduadas
                </div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>15+</div>
                <div style={statTextStyle}>
                  <Sparkles size={16} style={{ marginRight: '8px' }} />
                  Cursos Especializados
                </div>
              </div>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>98%</div>
                <div style={statTextStyle}>
                  <Star size={16} style={{ marginRight: '8px' }} />
                  Empleabilidad
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresStyle}>
        <div style={contentStyle}>
          <h2 style={featuresTitleStyle}>
            ¿Por qué elegir la 
            <span style={gradientTextStyle}> Escuela Jessica Vélez?</span>
          </h2>
          <p style={featuresSubtitleStyle}>
            Líder en formación de esteticistas profesionales con más de 10 años de experiencia
          </p>

          <div style={featuresGridStyle}>
            <div style={featureCardStyle}>
              <div style={featureIconStyle}>
                <Heart size={32} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Atención Personalizada</h3>
              <p style={featureDescStyle}>
                Grupos reducidos y atención individual para garantizar el mejor aprendizaje. 
                Cada estudiante recibe seguimiento personalizado.
              </p>
            </div>

            <div style={featureCardStyle}>
              <div style={featureIconStyle}>
                <Scissors size={32} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Técnicas Avanzadas</h3>
              <p style={featureDescStyle}>
                Aprende las últimas técnicas en tratamientos faciales, corporales, 
                depilación láser y medicina estética moderna.
              </p>
            </div>

            <div style={featureCardStyle}>
              <div style={featureIconStyle}>
                <Award size={32} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Certificación Profesional</h3>
              <p style={featureDescStyle}>
                Obtén tu certificación reconocida nacionalmente y accede a oportunidades 
                laborales en los mejores spas y centros estéticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={ctaStyle}>
        <div style={contentStyle}>
          <div style={ctaContentStyle}>
            <h2 style={ctaTitleStyle}>
              ¿Lista para comenzar tu carrera?
            </h2>
            <p style={ctaTextStyle}>
              Únete a cientos de esteticistas exitosas que se formaron con nosotras
            </p>
            <Link 
              to="/cursos"
              style={primaryButtonStyle}
            >
              Ver Cursos Disponibles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaInicio;