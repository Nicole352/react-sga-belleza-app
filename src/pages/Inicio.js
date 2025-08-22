import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Award, ArrowRight, Play, Star, Heart, Scissors, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer'; // Importar el Footer

const PaginaInicio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // AQUÍ VAN TUS 4 IMÁGENES DEL HERO - Reemplaza estas URLs con las tuyas
  const heroImages = [
    {
      url: 'https://www.lahora.com.ec/__export/1753063265364/sites/lahora/img/2025/07/20/jexssica_vexlez.jpeg_1981115046.jpeg',
      title: 'Técnicas Avanzadas en Estética',
      subtitle: 'Aprende con la mejor tecnología del mercado'
    },
    {
      url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
      title: 'Tratamientos Faciales de Lujo',
      subtitle: 'Formación integral en cuidado facial profesional'
    },
    {
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Medicina Estética Moderna',
      subtitle: 'Cursos especializados en las últimas tendencias'
    },
    {
      url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Instalaciones de Primera Clase',
      subtitle: 'Ambiente profesional para tu formación'
    }
  ];

  // Imágenes del carrusel de instalaciones
  const carouselImages = [
    {
      id: 1,
      title: "Tratamientos Faciales de Lujo",
      description: "Tecnología de vanguardia para el cuidado facial profesional",
      emoji: "✨",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      overlay: "rgba(102, 126, 234, 0.1)"
    },
    {
      id: 2,
      title: "Depilación Láser Premium",
      description: "Equipos de última generación para resultados perfectos",
      emoji: "⚡",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      overlay: "rgba(240, 147, 251, 0.1)"
    },
    {
      id: 3,
      title: "Microblading Especializado",
      description: "Técnicas avanzadas en micropigmentación de cejas",
      emoji: "🌟",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      overlay: "rgba(79, 172, 254, 0.1)"
    },
    {
      id: 4,
      title: "Instalaciones Modernas",
      description: "Ambiente profesional con la mejor tecnología",
      emoji: "🏢",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      overlay: "rgba(67, 233, 123, 0.1)"
    },
    {
      id: 5,
      title: "Práctica Profesional",
      description: "Aprendizaje hands-on con casos reales",
      emoji: "👩‍🎓",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      overlay: "rgba(250, 112, 154, 0.1)"
    }
  ];

  // Auto-scroll del carrusel de instalaciones cada 4 segundos
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll del hero cada 5 segundos
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif", // Tipografía ultra elegante
  };

  // Efectos de partículas flotantes animadas
  const particlesStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    opacity: 0.15,
    zIndex: 0,
  };

  const sectionStyle = {
    position: 'relative',
    paddingTop: '128px',
    paddingBottom: '80px', // Aumentado para más espacio para las cards
    overflow: 'hidden',
    zIndex: 1,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  // Nuevo estilo para el hero con carrusel de imágenes
  const heroBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

  const heroImageStyle = (index) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(
        135deg, 
        rgba(0, 0, 0, 0.4) 0%, 
        rgba(0, 0, 0, 0.2) 50%, 
        rgba(0, 0, 0, 0.6) 100%
      ),
      url('${heroImages[index].url}')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    opacity: index === currentHeroImage ? 1 : 0,
    transition: 'opacity 1.5s ease-in-out',
    filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
    transform: 'scale(1.02)', // Ligero zoom para efecto premium
  });

  const contentStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    position: 'relative',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
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
    padding: '12px 20px',
    marginBottom: '32px',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 32px rgba(251, 191, 36, 0.15)',
    fontFamily: "'Montserrat', 'Inter', 'Helvetica', sans-serif",
    fontWeight: '500',
    letterSpacing: '0.5px',
  };

  const titleStyle = {
    fontSize: '5rem',
    fontWeight: '400', // Más elegante con weight menor
    color: 'white',
    marginBottom: '24px',
    lineHeight: '1.1',
    textShadow: '0 6px 30px rgba(0, 0, 0, 0.8)',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
    letterSpacing: '-0.02em',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24, #d97706)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'block',
    animation: 'gradientShift 3s ease-in-out infinite',
    fontStyle: 'italic',
  };

  const subtitleStyle = {
    fontSize: '1.7rem',
    color: '#f3f4f6',
    marginBottom: '32px',
    maxWidth: '900px',
    margin: '0 auto 32px',
    lineHeight: '1.8',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
    fontFamily: "'Crimson Text', 'Georgia', serif",
    fontWeight: '400',
    letterSpacing: '0.3px',
  };

  const dynamicSubtitleStyle = {
    fontSize: '1.3rem',
    color: '#fde68a',
    marginBottom: '50px', // Aumentado para subir las cards
    fontStyle: 'italic',
    textShadow: '0 2px 15px rgba(0, 0, 0, 0.7)',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
    opacity: 0.95,
    transition: 'all 1s ease-in-out',
    fontWeight: '300',
    letterSpacing: '0.5px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '80px', // Aumentado para subir las cards
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24)',
    backgroundSize: '200% 200%',
    color: 'black',
    padding: '18px 36px',
    borderRadius: '30px',
    fontSize: '1.125rem',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 12px 40px rgba(251, 191, 36, 0.4)',
    animation: 'buttonPulse 2s ease-in-out infinite',
    fontFamily: "'Montserrat', 'Inter', 'Helvetica', sans-serif",
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
  };

  const secondaryButtonStyle = {
    border: '2px solid rgba(251, 191, 36, 0.6)',
    color: 'white',
    padding: '18px 36px',
    borderRadius: '30px',
    fontSize: '1.125rem',
    fontWeight: '500',
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(15px)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: "'Montserrat', 'Inter', 'Helvetica', sans-serif",
    letterSpacing: '0.5px',
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const statCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(25px)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '24px',
    padding: '32px',
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s ease-out',
    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.4)',
  };

  const statNumberStyle = {
    fontSize: '4rem',
    fontWeight: '300',
    color: '#fbbf24',
    marginBottom: '16px',
    textShadow: '0 6px 20px rgba(251, 191, 36, 0.5)',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
    letterSpacing: '-0.02em',
  };

  const statTextStyle = {
    color: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.15rem',
    fontFamily: "'Crimson Text', 'Georgia', serif",
    fontWeight: '400',
    letterSpacing: '0.5px',
  };

  // Indicadores del hero
  const heroIndicatorsStyle = {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '12px',
    zIndex: 5,
  };

  const heroIndicatorStyle = (isActive) => ({
    width: isActive ? '40px' : '12px',
    height: '12px',
    borderRadius: '6px',
    backgroundColor: isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isActive ? '0 0 20px rgba(251, 191, 36, 0.6)' : 'none',
  });

  // Estilos del carrusel de instalaciones (sin cambios)
  const carouselSectionStyle = {
    padding: '80px 0',
    position: 'relative',
  };

  const carouselContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '600px',
    margin: '0 auto',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
  };

  const carouselTrackStyle = {
    display: 'flex',
    width: `${carouselImages.length * 100}%`,
    height: '100%',
    transform: `translateX(-${currentSlide * (100 / carouselImages.length)}%)`,
    transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const slideStyle = (image) => ({
    width: `${100 / carouselImages.length}%`,
    height: '100%',
    background: image.gradient,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'column',
    overflow: 'hidden',
  });

  const slideOverlayStyle = (image) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at center, ${image.overlay} 0%, rgba(0,0,0,0.4) 100%)`,
    zIndex: 1,
  });

  const slideContentStyle = {
    textAlign: 'center',
    color: 'white',
    zIndex: 2,
    padding: '40px',
    transform: 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
  };

  const slideEmojiStyle = {
    fontSize: '8rem',
    marginBottom: '30px',
    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))',
    animation: 'float 4s ease-in-out infinite',
  };

  const slideTitleStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    textShadow: '0 6px 20px rgba(0,0,0,0.5)',
    background: 'linear-gradient(45deg, #fff, #fbbf24)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: "'Playfair Display', 'Georgia', serif",
  };

  const slideDescStyle = {
    fontSize: '1.3rem',
    opacity: 0.95,
    textShadow: '0 3px 10px rgba(0,0,0,0.5)',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: "'Inter', 'Helvetica', sans-serif",
  };

  const carouselNavStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    border: '2px solid rgba(251, 191, 36, 0.3)',
    color: '#fbbf24',
    padding: '20px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s',
    zIndex: 10,
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
  };

  const leftNavStyle = {
    ...carouselNavStyle,
    left: '30px',
  };

  const rightNavStyle = {
    ...carouselNavStyle,
    right: '30px',
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '30px',
  };

  const dotStyle = (isActive) => ({
    width: isActive ? '50px' : '15px',
    height: '15px',
    borderRadius: '10px',
    backgroundColor: isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isActive ? '0 0 20px rgba(251, 191, 36, 0.6)' : 'none',
  });

  const featuresStyle = {
    padding: '80px 0',
    position: 'relative',
  };

  const featuresTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '24px',
    textAlign: 'center',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Playfair Display', 'Georgia', serif",
    letterSpacing: '-0.01em',
  };

  const featuresSubtitleStyle = {
    fontSize: '1.3rem',
    color: '#d1d5db',
    maxWidth: '600px',
    margin: '0 auto 64px',
    textAlign: 'center',
    fontFamily: "'Inter', 'Helvetica', sans-serif",
    lineHeight: '1.6',
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
  };

  const featureCardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    borderRadius: '24px',
    padding: '36px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
  };

  const featureIconStyle = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px',
    transition: 'transform 0.3s',
    boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
  };

  const featureTitleStyle = {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '16px',
    fontFamily: "'Playfair Display', 'Georgia', serif",
  };

  const featureDescStyle = {
    color: '#d1d5db',
    lineHeight: '1.7',
    fontFamily: "'Inter', 'Helvetica', sans-serif",
    fontSize: '1rem',
  };

  const ctaStyle = {
    padding: '80px 0',
  };

  const ctaContentStyle = {
    background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15))',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '28px',
    padding: '60px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
  };

  const ctaTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '24px',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Playfair Display', 'Georgia', serif",
    letterSpacing: '-0.01em',
  };

  const ctaTextStyle = {
    fontSize: '1.3rem',
    color: '#d1d5db',
    marginBottom: '36px',
    fontFamily: "'Inter', 'Helvetica', sans-serif",
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      {/* Efectos de fondo con partículas animadas */}
      <div style={particlesStyle}>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              backgroundColor: '#fbbf24',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section con Carrusel */}
      <section style={sectionStyle}>
        {/* Carrusel de imágenes de fondo */}
        <div style={heroBackgroundStyle}>
          {heroImages.map((image, index) => (
            <div key={index} style={heroImageStyle(index)} />
          ))}
        </div>
        
        {/* Overlay adicional para mejor legibilidad */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
          zIndex: 0,
        }} />

        <div style={contentStyle}>
          <div style={{...textCenterStyle, position: 'relative', zIndex: 2}}>
            {/* Badge */}
            <div style={badgeStyle}>
              <Sparkles size={16} style={{ color: '#fbbf24', marginRight: '8px' }} />
              <span style={{ color: '#fde68a', fontSize: '0.95rem', fontWeight: '500' }}>
                Educación de Excelencia en Estética
              </span>
            </div>

            {/* Título Principal */}
            <h1 style={{...titleStyle, textShadow: '0 8px 40px rgba(0, 0, 0, 0.9)'}}>
              Transforma vidas
              <span style={gradientTextStyle}>
                con Belleza
              </span>
            </h1>

            {/* Subtítulo dinámico basado en la imagen actual */}
            <p style={dynamicSubtitleStyle}>
              {heroImages[currentHeroImage].subtitle}
            </p>

            {/* Subtítulo principal */}
            <p style={{...subtitleStyle, textShadow: '0 6px 25px rgba(0, 0, 0, 0.9)'}}>
              Conviértete en una esteticista profesional con nuestros cursos certificados. 
              Aprende técnicas avanzadas de belleza y estética con los mejores especialistas.
            </p>

            {/* Botones CTA */}
            <div style={buttonContainerStyle}>
              <Link to="/cursos" style={{...primaryButtonStyle, zIndex: 10, position: 'relative'}}>
                Ver Cursos Disponibles
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
              <button style={{...secondaryButtonStyle, zIndex: 10, position: 'relative'}}>
                <Play size={20} style={{ marginRight: '8px' }} />
                Ver Instalaciones
              </button>
            </div>

            {/* Estadísticas */}
            <div style={statsGridStyle}>
              <div style={{...statCardStyle, transitionDelay: '0.2s'}}>
                <div style={statNumberStyle}>500+</div>
                <div style={statTextStyle}>
                  <Users size={16} style={{ marginRight: '8px' }} />
                  Estudiantes Graduadas
                </div>
              </div>
              <div style={{...statCardStyle, transitionDelay: '0.4s'}}>
                <div style={statNumberStyle}>15+</div>
                <div style={statTextStyle}>
                  <Sparkles size={16} style={{ marginRight: '8px' }} />
                  Cursos Especializados
                </div>
              </div>
              <div style={{...statCardStyle, transitionDelay: '0.6s'}}>
                <div style={statNumberStyle}>98%</div>
                <div style={statTextStyle}>
                  <Star size={16} style={{ marginRight: '8px' }} />
                  Empleabilidad
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores del Hero */}
        <div style={heroIndicatorsStyle}>
          {heroImages.map((_, index) => (
            <div
              key={index}
              style={heroIndicatorStyle(index === currentHeroImage)}
              onClick={() => setCurrentHeroImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Carrusel de Instalaciones */}
      <section style={carouselSectionStyle}>
        <div style={contentStyle}>
          <h2 style={{...featuresTitleStyle, marginBottom: '50px'}}>
            Conoce Nuestras 
            <span style={gradientTextStyle}> Instalaciones</span>
          </h2>
          
          <div style={carouselContainerStyle}>
            <div style={carouselTrackStyle}>
              {carouselImages.map((image, index) => (
                <div key={image.id} style={slideStyle(image)}>
                  <div style={slideOverlayStyle(image)} />
                  <div style={slideContentStyle}>
                    <div style={slideEmojiStyle}>{image.emoji}</div>
                    <h3 style={slideTitleStyle}>{image.title}</h3>
                    <p style={slideDescStyle}>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navegación */}
            <button style={leftNavStyle} onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button style={rightNavStyle} onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores */}
          <div style={dotsContainerStyle}>
            {carouselImages.map((_, index) => (
              <div
                key={index}
                style={dotStyle(index === currentSlide)}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
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
                <Heart size={36} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Atención Personalizada</h3>
              <p style={featureDescStyle}>
                Grupos reducidos y atención individual para garantizar el mejor aprendizaje. 
                Cada estudiante recibe seguimiento personalizado durante todo el proceso.
              </p>
            </div>

            <div style={featureCardStyle}>
              <div style={featureIconStyle}>
                <Scissors size={36} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Técnicas Avanzadas</h3>
              <p style={featureDescStyle}>
                Aprende las últimas técnicas en tratamientos faciales, corporales, 
                depilación láser y medicina estética con equipos de última generación.
              </p>
            </div>

            <div style={featureCardStyle}>
              <div style={featureIconStyle}>
                <Award size={36} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Certificación Profesional</h3>
              <p style={featureDescStyle}>
                Obtén tu certificación reconocida nacionalmente y accede a oportunidades 
                laborales en los mejores spas y centros estéticos del país.
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
              <Sparkles size={18} style={{ marginRight: '8px' }} />
              Ver Cursos Disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
      
    </div>
  );
};

export default PaginaInicio;