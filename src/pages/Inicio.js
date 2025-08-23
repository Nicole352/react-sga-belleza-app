import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Users, 
  Award, 
  ArrowRight, 
  Play, 
  Star, 
  Heart, 
  Scissors, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
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
  }, [carouselImages.length]);

  // Auto-scroll del hero cada 5 segundos
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="container">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      {/* Efectos de fondo con partículas animadas */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section con Carrusel */}
      <section className="hero-section">
        {/* Carrusel de imágenes de fondo */}
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <div key={index} className={`hero-image ${index === currentHeroImage ? 'active' : ''}`}>
              <img src={image.url} alt={image.title} />
            </div>
          ))}
        </div>
        
        {/* Overlay adicional para mejor legibilidad */}
        <div className="hero-overlay" />

        <div className="content">
          <div className="hero-content">
            {/* Badge */}
            <div className="badge">
              <Sparkles size={16} />
              <span>Educación de Excelencia en Estética</span>
            </div>

            {/* Título Principal */}
            <h1 className="hero-title">
              Transforma vidas
              <span className="gradient-text">
                con Belleza
              </span>
            </h1>

            {/* Subtítulo dinámico basado en la imagen actual */}
            <p className="dynamic-subtitle">
              {heroImages[currentHeroImage].subtitle}
            </p>

            {/* Subtítulo principal */}
            <p className="hero-subtitle">
              Conviértete en una esteticista profesional con nuestros cursos certificados. 
              Aprende técnicas avanzadas de belleza y estética con los mejores especialistas.
            </p>

            {/* Botones CTA */}
            <div className="button-container">
              <Link to="/cursos" className="primary-button">
                Ver Cursos Disponibles
                <ArrowRight size={18} />
              </Link>
              <button className="secondary-button">
                <Play size={18} />
                Ver Instalaciones
              </button>
            </div>

            {/* Estadísticas */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-text">
                  <Users size={16} />
                  Estudiantes Graduadas
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-text">
                  <Sparkles size={16} />
                  Cursos Especializados
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-text">
                  <Star size={16} />
                  Empleabilidad
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores del Hero */}
        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`hero-indicator ${index === currentHeroImage ? 'active' : ''}`}
              onClick={() => setCurrentHeroImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Carrusel de Instalaciones */}
      <section className="carousel-section">
        <div className="content">
          <h2 className="section-title">
            Conoce Nuestras 
            <span className="gradient-text"> Instalaciones</span>
          </h2>
          
          <div className="carousel-container">
            <div className="carousel-track" style={{
              transform: `translateX(-${currentSlide * (100 / carouselImages.length)}%)`
            }}>
              {carouselImages.map((image, index) => (
                <div key={image.id} className="slide" style={{ background: image.gradient }}>
                  <div className="slide-overlay" style={{ background: `radial-gradient(circle at center, ${image.overlay} 0%, rgba(0,0,0,0.4) 100%)` }} />
                  <div className="slide-content">
                    <div className="slide-emoji">{image.emoji}</div>
                    <h3 className="slide-title">{image.title}</h3>
                    <p className="slide-description">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navegación */}
            <button className="carousel-nav left" onClick={prevSlide}>
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-nav right" onClick={nextSlide}>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicadores */}
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="content">
          <h2 className="section-title">
            ¿Por qué elegir la 
            <span className="gradient-text"> Escuela Jessica Vélez?</span>
          </h2>
          <p className="section-subtitle">
            Líder en formación de esteticistas profesionales con más de 10 años de experiencia
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={28} color="black" />
              </div>
              <h3 className="feature-title">Atención Personalizada</h3>
              <p className="feature-description">
                Grupos reducidos y atención individual para garantizar el mejor aprendizaje. 
                Cada estudiante recibe seguimiento personalizado durante todo el proceso.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Scissors size={28} color="black" />
              </div>
              <h3 className="feature-title">Técnicas Avanzadas</h3>
              <p className="feature-description">
                Aprende las últimas técnicas en tratamientos faciales, corporales, 
                depilación láser y medicina estética con equipos de última generación.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award size={28} color="black" />
              </div>
              <h3 className="feature-title">Certificación Profesional</h3>
              <p className="feature-description">
                Obtén tu certificación reconocida nacionalmente y accede a oportunidades 
                laborales en los mejores spas y centros estéticos del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="content">
          <div className="cta-content">
            <h2 className="cta-title">
              ¿Lista para comenzar tu carrera?
            </h2>
            <p className="cta-text">
              Únete a cientos de esteticistas exitosas que se formaron con nosotras
            </p>
            <Link to="/cursos" className="primary-button">
              <Sparkles size={18} />
              Ver Cursos Disponibles
            </Link>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          position: relative;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.12;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: #fbbf24;
          border-radius: 50%;
          animation: twinkle ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .hero-section {
          position: relative;
          padding: 90px 0 30px;
          overflow: hidden;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }

        .hero-image.active {
          opacity: 1;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          filter: contrast(1.1) brightness(1.05) saturate(1.1);
          transform: scale(1.02);
        }

        .hero-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 0;
        }

        .content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
        }

        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 24px;
          padding: 10px 18px;
          margin-bottom: 20px;
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 32px rgba(251, 191, 36, 0.15);
          font-family: 'Montserrat', 'Inter', 'Helvetica', sans-serif;
          font-weight: 500;
          letter-spacing: 0.5px;
          gap: 8px;
        }

        .badge svg {
          color: #fbbf24;
        }

        .badge span {
          color: #fde68a;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .hero-title {
          font-size: 4.2rem;
          font-weight: 400;
          color: white;
          margin-bottom: 16px;
          line-height: 1.05;
          text-shadow: 0 8px 40px rgba(0, 0, 0, 0.9);
          font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24, #d97706);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          animation: gradientShift 3s ease-in-out infinite;
          font-style: italic;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .dynamic-subtitle {
          font-size: 1.15rem;
          color: #fde68a;
          margin-bottom: 28px;
          font-style: italic;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.7);
          font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
          opacity: 0.95;
          transition: all 1s ease-in-out;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #f3f4f6;
          margin: 0 auto 20px;
          max-width: 850px;
          line-height: 1.6;
          text-shadow: 0 6px 25px rgba(0, 0, 0, 0.9);
          font-family: 'Crimson Text', 'Georgia', serif;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
        }

        .primary-button {
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24);
          background-size: 200% 200%;
          color: black;
          padding: 16px 32px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 12px 40px rgba(251, 191, 36, 0.4);
          animation: buttonPulse 2s ease-in-out infinite;
          font-family: 'Montserrat', 'Inter', 'Helvetica', sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
        }

        .primary-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 16px 50px rgba(251, 191, 36, 0.5);
        }

        .secondary-button {
          border: 2px solid rgba(251, 191, 36, 0.6);
          color: white;
          padding: 16px 32px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 500;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(15px);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Montserrat', 'Inter', 'Helvetica', sans-serif;
          letter-spacing: 0.5px;
        }

        .secondary-button:hover {
          background: rgba(251, 191, 36, 0.1);
          border-color: rgba(251, 191, 36, 0.8);
          transform: translateY(-2px);
        }

        @keyframes buttonPulse {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-1px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .stat-card {
          background-color: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 20px;
          padding: 28px 36px;
          transform: translateY(0);
          opacity: 1;
          transition: all 0.8s ease-out;
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.4);
          text-align: center;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 300;
          color: #fbbf24;
          margin-bottom: 12px;
          text-shadow: 0 6px 20px rgba(251, 191, 36, 0.5);
          font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
          letter-spacing: -0.02em;
        }

        .stat-text {
          color: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 1.05rem;
          font-family: 'Crimson Text', 'Georgia', serif;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .hero-indicators {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }

        .hero-indicator {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-indicator.active {
          width: 32px;
          background-color: #fbbf24;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.6);
        }

        .carousel-section {
          padding: 40px 0;
          position: relative;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 32px;
          text-align: center;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          font-family: 'Playfair Display', 'Georgia', serif;
          letter-spacing: -0.01em;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 450px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(251, 191, 36, 0.2);
        }

        .carousel-track {
          display: flex;
          width: 500%;
          height: 100%;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide {
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-direction: column;
          overflow: hidden;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .slide-content {
          text-align: center;
          color: white;
          z-index: 2;
          padding: 32px;
          transform: scale(1);
          transition: transform 0.5s ease-in-out;
        }

        .slide-emoji {
          font-size: 6rem;
          margin-bottom: 20px;
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.5));
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .slide-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          text-shadow: 0 6px 20px rgba(0,0,0,0.5);
          background: linear-gradient(45deg, #fff, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Playfair Display', 'Georgia', serif;
        }

        .slide-description {
          font-size: 1.2rem;
          opacity: 0.95;
          text-shadow: 0 3px 10px rgba(0,0,0,0.5);
          max-width: 480px;
          margin: 0 auto;
          font-family: 'Inter', 'Helvetica', sans-serif;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          border: 2px solid rgba(251, 191, 36, 0.3);
          color: #fbbf24;
          padding: 16px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .carousel-nav:hover {
          background-color: rgba(251, 191, 36, 0.2);
          border-color: rgba(251, 191, 36, 0.6);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-nav.left {
          left: 20px;
        }

        .carousel-nav.right {
          right: 20px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dot.active {
          width: 40px;
          background-color: #fbbf24;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.6);
        }

        .features-section {
          padding: 40px 0;
          position: relative;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: #d1d5db;
          max-width: 600px;
          margin: 0 auto 32px;
          text-align: center;
          font-family: 'Inter', 'Helvetica', sans-serif;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 20px;
          padding: 32px 36px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(251, 191, 36, 0.2);
          border-color: rgba(251, 191, 36, 0.4);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s;
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.3);
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          font-family: 'Playfair Display', 'Georgia', serif;
        }

        .feature-description {
          color: #d1d5db;
          line-height: 1.6;
          font-family: 'Inter', 'Helvetica', sans-serif;
          font-size: 0.95rem;
        }

        .cta-section {
          padding: 40px 0;
        }

        .cta-content {
          background: linear-gradient(45deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15));
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 24px;
          padding: 36px 48px;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .cta-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          font-family: 'Playfair Display', 'Georgia', serif;
          letter-spacing: -0.01em;
        }

        .cta-text {
          font-size: 1.15rem;
          color: #d1d5db;
          margin-bottom: 24px;
          font-family: 'Inter', 'Helvetica', sans-serif;
          line-height: 1.6;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 480px) {
          .content {
            padding: 0 16px;
          }

          .hero-title {
            font-size: 2.2rem !important;
            line-height: 1.1 !important;
            margin-bottom: 12px !important;
          }

          .hero-subtitle {
            font-size: 1rem !important;
            margin-bottom: 20px !important;
          }

          .dynamic-subtitle {
            font-size: 0.95rem !important;
            margin-bottom: 20px !important;
          }

          .button-container {
            width: 100%;
          }

          .primary-button, .secondary-button {
            padding: 14px 24px !important;
            font-size: 1rem !important;
            width: 100% !important;
            justify-content: center !important;
            max-width: 280px;
          }

          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 0 10px;
          }

          .stat-card {
            padding: 20px 24px !important;
          }

          .stat-number {
            font-size: 2.5rem !important;
          }

          .section-title {
            font-size: 2rem !important;
            margin-bottom: 24px !important;
          }

          .carousel-container {
            height: 300px !important;
            margin: 0 10px;
          }

          .carousel-nav {
            padding: 12px !important;
            display: none;
          }

          .carousel-nav.left {
            left: 10px !important;
          }

          .carousel-nav.right {
            right: 10px !important;
          }

          .slide-emoji {
            font-size: 3rem !important;
            margin-bottom: 15px !important;
          }

          .slide-title {
            font-size: 1.5rem !important;
            margin-bottom: 12px !important;
          }

          .slide-description {
            font-size: 1rem !important;
          }

          .slide-content {
            padding: 20px !important;
          }

          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 0 10px;
          }

          .feature-card {
            padding: 24px 28px !important;
          }

          .cta-content {
            padding: 28px 32px !important;
            margin: 0 16px;
          }

          .cta-title {
            font-size: 2rem !important;
          }

          .cta-text {
            font-size: 1rem !important;
          }

          .hero-indicators {
            bottom: 16px !important;
          }

          .carousel-dots {
            margin-top: 16px !important;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .hero-title {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }

          .hero-subtitle {
            font-size: 1.2rem !important;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }

          .carousel-container {
            height: 350px !important;
          }

          .slide-emoji {
            font-size: 4rem !important;
          }

          .slide-title {
            font-size: 1.8rem !important;
          }

          .carousel-nav {
            padding: 14px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem !important;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 32px !important;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }

          .carousel-container {
            height: 400px !important;
          }

          .slide-emoji {
            font-size: 5rem !important;
          }

          .slide-title {
            font-size: 2.2rem !important;
          }
        }

        @media (min-width: 1025px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        /* Touch gestures para móviles */
        @media (hover: none) and (pointer: coarse) {
          .carousel-nav {
            display: block;
            opacity: 0.8;
          }
          
          .carousel-container {
            touch-action: pan-x;
          }
        }
      `}</style>
    </div>
  );
};

export default PaginaInicio;