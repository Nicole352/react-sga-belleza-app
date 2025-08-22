import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Award, ArrowRight, Play, Star, Heart, Scissors, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

const PaginaInicio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Manteniendo exactamente las URLs proporcionadas
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

  // ESTILOS - COLORES CONSISTENTES CON HEADER/FOOTER Y ESPACIADO REDUCIDO
  const containerStyle = {
    minHeight: '100vh',
    background: 'rgba(0, 0, 0, 0.95)', // ← MISMO COLOR DEL HEADER/FOOTER
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
  };

  const particlesStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    opacity: 0.12, // ← REDUCIDO para más elegancia
    zIndex: 0,
  };

  const sectionStyle = {
    position: 'relative',
    paddingTop: '90px', // ← MÁS REDUCIDO
    paddingBottom: '30px', // ← MÁS REDUCIDO
    overflow: 'hidden',
    zIndex: 1,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

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
    transform: 'scale(1.02)',
  });

  const contentStyle = {
    maxWidth: '1400px', // ← AUMENTADO para usar más espacio horizontal
    margin: '0 auto',
    padding: '0 24px', // ← AUMENTADO para más contenido
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
    padding: '10px 18px', // ← REDUCIDO
    marginBottom: '20px', // ← MÁS REDUCIDO
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 32px rgba(251, 191, 36, 0.15)',
    fontFamily: "'Montserrat', 'Inter', 'Helvetica', sans-serif",
    fontWeight: '500',
    letterSpacing: '0.5px',
  };

  const titleStyle = {
    fontSize: '4.2rem', // ← LIGERAMENTE REDUCIDO
    fontWeight: '400',
    color: 'white',
    marginBottom: '16px', // ← MÁS REDUCIDO
    lineHeight: '1.05', // ← MÁS COMPACTO
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
    fontSize: '1.4rem', // ← LIGERAMENTE REDUCIDO
    color: '#f3f4f6',
    marginBottom: '20px', // ← MÁS REDUCIDO
    maxWidth: '850px', // ← AUMENTADO para usar más espacio
    margin: '0 auto 20px',
    lineHeight: '1.6', // ← MÁS COMPACTO
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
    fontFamily: "'Crimson Text', 'Georgia', serif",
    fontWeight: '400',
    letterSpacing: '0.3px',
  };

  const dynamicSubtitleStyle = {
    fontSize: '1.15rem', // ← REDUCIDO
    color: '#fde68a',
    marginBottom: '28px', // ← MÁS REDUCIDO
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
    gap: '14px', // ← MÁS REDUCIDO
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px', // ← MÁS REDUCIDO
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24)',
    backgroundSize: '200% 200%',
    color: 'black',
    padding: '16px 32px', // ← REDUCIDO de 18px 36px
    borderRadius: '30px',
    fontSize: '1.1rem',
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
    padding: '16px 32px', // ← REDUCIDO de 18px 36px
    borderRadius: '30px',
    fontSize: '1.1rem',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', // ← AUMENTADO para cards más anchas
    gap: '40px', // ← AUMENTADO gap horizontal
    maxWidth: '1300px', // ← AUMENTADO para usar casi todo el ancho
    margin: '0 auto',
    padding: '0 20px', // ← PADDING LATERAL AGREGADO
  };

  const statCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(25px)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '20px',
    padding: '28px 36px', // ← PADDING HORIZONTAL AUMENTADO
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s ease-out',
    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.4)',
    width: '100%', // ← ASEGURAR QUE USE TODO EL ANCHO DISPONIBLE
  };

  const statNumberStyle = {
    fontSize: '3.5rem', // ← REDUCIDO de 4rem
    fontWeight: '300',
    color: '#fbbf24',
    marginBottom: '12px', // ← REDUCIDO de 16px
    textShadow: '0 6px 20px rgba(251, 191, 36, 0.5)',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
    letterSpacing: '-0.02em',
  };

  const statTextStyle = {
    color: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.05rem', // ← REDUCIDO de 1.15rem
    fontFamily: "'Crimson Text', 'Georgia', serif",
    fontWeight: '400',
    letterSpacing: '0.5px',
  };

  // Indicadores del hero
  const heroIndicatorsStyle = {
    position: 'absolute',
    bottom: '24px', // ← REDUCIDO de 30px
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px', // ← REDUCIDO de 12px
    zIndex: 5,
  };

  const heroIndicatorStyle = (isActive) => ({
    width: isActive ? '32px' : '10px', // ← REDUCIDO de 40px/12px
    height: '10px', // ← REDUCIDO de 12px
    borderRadius: '5px',
    backgroundColor: isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isActive ? '0 0 20px rgba(251, 191, 36, 0.6)' : 'none',
  });

  // Estilos del carrusel de instalaciones
  const carouselSectionStyle = {
    padding: '40px 0', // ← MÁS REDUCIDO VERTICALMENTE
    position: 'relative',
  };

  const carouselContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '450px', // ← MÁS REDUCIDO VERTICALMENTE
    margin: '0 auto',
    borderRadius: '20px',
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
    padding: '32px', // ← REDUCIDO de 40px
    transform: 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
  };

  const slideEmojiStyle = {
    fontSize: '6rem', // ← REDUCIDO de 8rem
    marginBottom: '20px', // ← REDUCIDO de 30px
    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))',
    animation: 'float 4s ease-in-out infinite',
  };

  const slideTitleStyle = {
    fontSize: '2.5rem', // ← REDUCIDO de 3rem
    fontWeight: '700',
    marginBottom: '16px', // ← REDUCIDO de 20px
    textShadow: '0 6px 20px rgba(0,0,0,0.5)',
    background: 'linear-gradient(45deg, #fff, #fbbf24)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: "'Playfair Display', 'Georgia', serif",
  };

  const slideDescStyle = {
    fontSize: '1.2rem', // ← REDUCIDO de 1.3rem
    opacity: 0.95,
    textShadow: '0 3px 10px rgba(0,0,0,0.5)',
    maxWidth: '480px', // ← REDUCIDO de 600px
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
    padding: '16px', // ← REDUCIDO de 20px
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s',
    zIndex: 10,
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
  };

  const leftNavStyle = {
    ...carouselNavStyle,
    left: '20px', // ← REDUCIDO de 30px
  };

  const rightNavStyle = {
    ...carouselNavStyle,
    right: '20px', // ← REDUCIDO de 30px
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px', // ← REDUCIDO de 16px
    marginTop: '20px', // ← REDUCIDO de 30px
  };

  const dotStyle = (isActive) => ({
    width: isActive ? '40px' : '12px', // ← REDUCIDO de 50px/15px
    height: '12px', // ← REDUCIDO de 15px
    borderRadius: '8px', // ← REDUCIDO de 10px
    backgroundColor: isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isActive ? '0 0 20px rgba(251, 191, 36, 0.6)' : 'none',
  });

  const featuresStyle = {
    padding: '40px 0', // ← MÁS REDUCIDO VERTICALMENTE
    position: 'relative',
  };

  const featuresTitleStyle = {
    fontSize: '2.8rem', // ← MÁS REDUCIDO VERTICALMENTE
    fontWeight: '700',
    color: 'white',
    marginBottom: '12px', // ← MÁS REDUCIDO
    textAlign: 'center',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Playfair Display', 'Georgia', serif",
    letterSpacing: '-0.01em',
  };

  const featuresSubtitleStyle = {
    fontSize: '1.15rem', // ← REDUCIDO
    color: '#d1d5db',
    maxWidth: '600px',
    margin: '0 auto 32px', // ← MÁS REDUCIDO
    textAlign: 'center',
    fontFamily: "'Inter', 'Helvetica', sans-serif",
    lineHeight: '1.6',
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // ← AUMENTADO para cards más anchas
    gap: '40px', // ← AUMENTADO gap
    maxWidth: '1300px', // ← AUMENTADO para usar casi todo el ancho
    margin: '0 auto',
    padding: '0 20px', // ← PADDING LATERAL AGREGADO
  };

  const featureCardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    borderRadius: '20px',
    padding: '32px 36px', // ← PADDING HORIZONTAL AUMENTADO
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
    width: '100%', // ← ASEGURAR QUE USE TODO EL ANCHO DISPONIBLE
  };

  const featureIconStyle = {
    width: '64px', // ← REDUCIDO de 80px
    height: '64px',
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
    borderRadius: '16px', // ← REDUCIDO de 20px
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px', // ← REDUCIDO de 28px
    transition: 'transform 0.3s',
    boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
  };

  const featureTitleStyle = {
    fontSize: '1.4rem', // ← REDUCIDO de 1.6rem
    fontWeight: '700',
    color: 'white',
    marginBottom: '12px', // ← REDUCIDO de 16px
    fontFamily: "'Playfair Display', 'Georgia', serif",
  };

  const featureDescStyle = {
    color: '#d1d5db',
    lineHeight: '1.6',
    fontFamily: "'Inter', 'Helvetica', sans-serif",
    fontSize: '0.95rem',
  };

  const ctaStyle = {
    padding: '40px 0', // ← MÁS REDUCIDO VERTICALMENTE
  };

  const ctaContentStyle = {
    background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15))',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '24px',
    padding: '36px 48px', // ← PADDING HORIZONTAL AUMENTADO
    maxWidth: '1000px', // ← AUMENTADO para usar más espacio
    margin: '0 auto',
    textAlign: 'center',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
  };

  const ctaTitleStyle = {
    fontSize: '2.8rem', // ← MÁS REDUCIDO
    fontWeight: '700',
    color: 'white',
    marginBottom: '16px', // ← MÁS REDUCIDO
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Playfair Display', 'Georgia', serif",
    letterSpacing: '-0.01em',
  };

  const ctaTextStyle = {
    fontSize: '1.15rem', // ← REDUCIDO
    color: '#d1d5db',
    marginBottom: '24px', // ← MÁS REDUCIDO
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
        {[...Array(20)].map((_, i) => (
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
              <Link 
                to="/cursos" 
                style={{...primaryButtonStyle, zIndex: 10, position: 'relative'}}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                  e.target.style.boxShadow = '0 16px 50px rgba(251, 191, 36, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 12px 40px rgba(251, 191, 36, 0.4)';
                }}
              >
                Ver Cursos Disponibles
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <button 
                style={{...secondaryButtonStyle, zIndex: 10, position: 'relative'}}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(251, 191, 36, 0.1)';
                  e.target.style.borderColor = 'rgba(251, 191, 36, 0.8)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.3)';
                  e.target.style.borderColor = 'rgba(251, 191, 36, 0.6)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Play size={18} style={{ marginRight: '8px' }} />
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
          <h2 style={{...featuresTitleStyle, marginBottom: '32px'}}>
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
            <button 
              style={leftNavStyle} 
              onClick={prevSlide}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(251, 191, 36, 0.2)';
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.6)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              style={rightNavStyle} 
              onClick={nextSlide}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(251, 191, 36, 0.2)';
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.6)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={20} />
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
            <div 
              style={featureCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(251, 191, 36, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.2)';
              }}
            >
              <div style={featureIconStyle}>
                <Heart size={28} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Atención Personalizada</h3>
              <p style={featureDescStyle}>
                Grupos reducidos y atención individual para garantizar el mejor aprendizaje. 
                Cada estudiante recibe seguimiento personalizado durante todo el proceso.
              </p>
            </div>

            <div 
              style={featureCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(251, 191, 36, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.2)';
              }}
            >
              <div style={featureIconStyle}>
                <Scissors size={28} color="black" />
              </div>
              <h3 style={featureTitleStyle}>Técnicas Avanzadas</h3>
              <p style={featureDescStyle}>
                Aprende las últimas técnicas en tratamientos faciales, corporales, 
                depilación láser y medicina estética con equipos de última generación.
              </p>
            </div>

            <div 
              style={featureCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(251, 191, 36, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.2)';
              }}
            >
              <div style={featureIconStyle}>
                <Award size={28} color="black" />
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
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 16px 50px rgba(251, 191, 36, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 12px 40px rgba(251, 191, 36, 0.4)';
              }}
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