import React, { useState, useEffect } from 'react';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  Mail,
  Sparkles,
  Shield,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Monitor
} from 'lucide-react';

const AulaVirtual = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular proceso de login
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      
      // Simular redirección después del éxito
      setTimeout(() => {
        setShowSuccess(false);
        // Aquí podrías redirigir al dashboard del aula virtual
        console.log('Redirigir al dashboard del aula virtual');
      }, 2000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (showSuccess) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 110,
        fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif"
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '32px',
          padding: '60px',
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 24px',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          boxShadow: '0 25px 50px rgba(251, 191, 36, 0.2)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            animation: 'pulse 2s infinite'
          }}>
            <CheckCircle size={40} color="#fff" />
          </div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#1a1a1a',
            marginBottom: '16px',
            fontFamily: "'Cormorant Garamond', serif"
          }}>
            ¡Bienvenida!
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1.2rem',
            marginBottom: '32px',
            lineHeight: 1.6,
            fontFamily: "'Crimson Text', serif"
          }}>
            Has ingresado exitosamente al Aula Virtual. 
            Redirigiendo al panel de estudiante...
          </p>
          <div style={{
            background: 'rgba(251, 191, 36, 0.1)',
            padding: '20px',
            borderRadius: '16px',
            marginBottom: '24px'
          }}>
            <p style={{
              color: '#b45309',
              fontWeight: '600',
              margin: 0,
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Accediendo a tu panel de estudiante...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Google Fonts - Mismas que en Inicio.js */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.1;
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
              opacity: 0.3;
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .floating-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
          }
          
          .particle {
            position: absolute;
            background: #fbbf24;
            border-radius: 50%;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
          }
          
          .gradient-text {
            background: linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24, #d97706);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            animation: gradientShift 3s ease-in-out infinite;
          }
          
          .login-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%);
            position: relative;
            overflow: hidden;
            font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
            padding-top: 110px;
            display: flex;
            align-items: center;
          }
          
          .main-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
            width: 100%;
          }
          
          .login-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
            align-items: stretch;
            min-height: 100vh;
            position: relative;
          }
          
          .image-section {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%);
            overflow: hidden;
          }
          
          .image-section::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100%;
            background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.95) 100%);
            z-index: 2;
          }
          
          .hero-image {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            object-position: center;
            filter: brightness(0.85) contrast(1.1) saturate(1.05);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hero-image:hover {
            filter: brightness(0.9) contrast(1.15) saturate(1.1);
            transform: scale(1.02);
          }
          
          .login-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 80px 60px;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
            position: relative;
          }
          
          .login-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at left center, rgba(251, 191, 36, 0.03) 0%, transparent 70%);
            z-index: 0;
          }
          
          .login-header {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
            z-index: 1;
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
          
          .main-title {
            font-size: 3.5rem;
            font-weight: 800;
            color: white;
            margin-bottom: 16px;
            line-height: 1.1;
            text-shadow: 0 8px 40px rgba(0, 0, 0, 0.9);
            font-family: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
            letter-spacing: -0.02em;
            text-align: center;
          }
          
          .subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 32px;
            line-height: 1.6;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
            font-family: 'Crimson Text', 'Georgia', serif;
            font-weight: 400;
            text-align: center;
          }
          
          .login-form {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(30px);
            border: 1px solid rgba(251, 191, 36, 0.15);
            border-radius: 32px;
            padding: 50px;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1);
            position: relative;
            z-index: 1;
            max-width: 450px;
            margin: 0 auto;
          }
          
          .login-form::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent);
          }
          
          .form-group {
            margin-bottom: 24px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #1a1a1a;
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
          }
          
          .input-wrapper {
            position: relative;
          }
          
          .form-input {
            width: 100%;
            padding: 16px 48px 16px 48px;
            border: 2px solid rgba(251, 191, 36, 0.2);
            border-radius: 16px;
            font-size: 1.1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(255, 255, 255, 0.9);
            font-family: 'Crimson Text', serif;
            font-weight: 400;
          }
          
          .form-input:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.1);
            transform: translateY(-2px);
          }
          
          .input-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            transition: all 0.3s ease;
            z-index: 1;
          }
          
          .form-input:focus + .input-icon,
          .form-input:not(:placeholder-shown) + .input-icon {
            color: #fbbf24;
            transform: translateY(-50%) scale(1.1);
          }
          
          .password-toggle {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: #666;
            transition: all 0.3s ease;
            padding: 4px;
            border-radius: 8px;
          }
          
          .password-toggle:hover {
            color: #fbbf24;
            background: rgba(251, 191, 36, 0.1);
          }
          
          .login-button {
            width: 100%;
            background: linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24);
            background-size: 200% 200%;
            color: black;
            padding: 18px 32px;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 12px 40px rgba(251, 191, 36, 0.4);
            font-family: 'Montserrat', 'Inter', 'Helvetica', sans-serif;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 32px;
            position: relative;
            overflow: hidden;
          }
          
          .login-button:hover:not(:disabled) {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 16px 50px rgba(251, 191, 36, 0.5);
          }
          
          .login-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }
          
          .features-list {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid rgba(251, 191, 36, 0.2);
          }
          
          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
            color: #666;
            font-size: 0.95rem;
            font-family: 'Montserrat', sans-serif;
          }
          
          .loading-spinner {
            width: 24px;
            height: 24px;
            border: 3px solid rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          /* RESPONSIVE DESIGN */
          @media (max-width: 768px) {
            .login-container {
              padding-top: 90px;
            }
            
            .main-content {
              padding: 0;
            }
            
            .login-grid {
              grid-template-columns: 1fr;
              gap: 0;
              min-height: 100vh;
            }
            
            .image-section {
              height: 40vh;
              min-height: 300px;
            }
            
            .image-section::before {
              width: 100%;
              height: 80px;
              top: auto;
              bottom: 0;
              right: auto;
              left: 0;
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, transparent 100%);
            }
            
            .hero-image {
              height: 100%;
            }
            
            .login-section {
              padding: 40px 20px;
              min-height: 60vh;
            }
            
            .main-title {
              font-size: 2.5rem;
            }
            
            .subtitle {
              font-size: 1.1rem;
            }
            
            .login-form {
              padding: 32px 24px;
              border-radius: 24px;
            }
            
            .form-input {
              padding: 14px 44px 14px 44px;
              font-size: 1rem;
            }
            
            .login-button {
              font-size: 1.1rem;
              padding: 16px 28px;
            }
          }
          
          @media (max-width: 480px) {
            .image-section {
              height: 35vh;
              min-height: 250px;
            }
            
            .login-section {
              padding: 30px 16px;
            }
            
            .badge {
              padding: 8px 16px;
              font-size: 0.85rem;
            }
            
            .main-title {
              font-size: 2rem;
            }
            
            .login-form {
              padding: 24px 20px;
              border-radius: 20px;
            }
          }
          
          @media (min-width: 769px) and (max-width: 1024px) {
            .login-section {
              padding: 60px 40px;
            }
            
            .login-form {
              padding: 45px;
            }
          }
          
          @media (min-width: 1400px) {
            .login-section {
              padding: 100px 80px;
            }
            
            .login-form {
              padding: 60px;
              max-width: 500px;
            }
          }
        `}
      </style>

      <div className="login-container">
        {/* Efectos de fondo con partículas animadas - Igual que Inicio.js */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 3 + 4}s`
              }}
            />
          ))}
        </div>

        <div className="main-content">
          <div className="login-grid">
            {/* Sección de imagen (izquierda) */}
            <div 
              className="image-section"
              style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Aquí va tu imagen - Por ahora uso una placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=500&q=80"
                alt="Aula Virtual - Jessica Vélez Escuela de Esteticistas"
                className="hero-image"
              />
            </div>

            {/* Sección de login (derecha) */}
            <div 
              className="login-section"
              style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '200ms'
              }}
            >
              <div className="login-header">
                {/* Badge */}
                <div className="badge">
                  <Monitor size={16} />
                  <span>Plataforma Virtual de Aprendizaje</span>
                </div>

                {/* Título Principal */}
                <h1 className="main-title">
                  Aula
                  <span className="gradient-text"> Virtual</span>
                </h1>

                {/* Subtítulo */}
                <p className="subtitle">
                  Accede a tu plataforma de aprendizaje personalizada. 
                  Continúa tu formación profesional desde cualquier lugar.
                </p>
              </div>

              {/* Formulario de Login */}
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="tu@email.com"
                      required
                    />
                    <Mail size={20} className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="••••••••"
                      required
                    />
                    <Lock size={20} className="input-icon" />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="password-toggle"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner" />
                      Iniciando Sesión...
                    </>
                  ) : (
                    <>
                      <LogIn size={20} />
                      Ingresar al Aula Virtual
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Características del aula virtual */}
                <div className="features-list">
                  <div className="feature-item">
                    <Shield size={16} color="#10b981" />
                    <span>Acceso seguro y encriptado</span>
                  </div>
                  <div className="feature-item">
                    <BookOpen size={16} color="#3b82f6" />
                    <span>Material de estudio actualizado</span>
                  </div>
                  <div className="feature-item">
                    <GraduationCap size={16} color="#8b5cf6" />
                    <span>Seguimiento de progreso académico</span>
                  </div>
                  <div className="feature-item">
                    <User size={16} color="#ef4444" />
                    <span>Soporte personalizado 24/7</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AulaVirtual;