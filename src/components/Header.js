import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detectar resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const headerStyle = {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '2px solid rgba(251, 191, 36, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    padding: '12px 0',
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const logoStyle = {
    width: '56px',
    height: '56px',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #fbbf24',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '22px',
    boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const logoGlowStyle = {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '30%',
    height: '30%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'logoShine 3s ease-in-out infinite',
  };

  const logoTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
  };

  const logoMainStyle = {
    fontSize: '26px',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textShine 3s ease-in-out infinite',
    textShadow: '0 2px 10px rgba(251, 191, 36, 0.3)',
  };

  const logoSubStyle = {
    fontSize: '13px',
    color: '#fde68a',
    marginTop: '-2px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  };

  const navLinksStyle = {
    display: isMobile ? 'none' : 'flex',
    gap: '40px',
    alignItems: 'center',
  };

  const linkStyle = (active) => ({
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: active ? '#fbbf24' : 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    position: 'relative',
    padding: '12px 0',
    textShadow: active ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none',
    transform: active ? 'translateY(-2px)' : 'translateY(0)',
  });

  const linkUnderlineStyle = (active) => ({
    position: 'absolute',
    bottom: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: active ? '100%' : '0%',
    height: '3px',
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
    boxShadow: active ? '0 0 10px rgba(251, 191, 36, 0.6)' : 'none',
  });

  const loginButtonStyle = {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
    backgroundSize: '200% 200%',
    color: 'black',
    padding: '12px 28px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4)',
    border: '2px solid transparent',
    position: 'relative',
    overflow: 'hidden',
    animation: 'buttonGlow 2s ease-in-out infinite',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  };

  const mobileMenuButtonStyle = {
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(251, 191, 36, 0.1)',
    border: '2px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    background: 'rgba(0, 0, 0, 0.98)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    borderRadius: '0 0 20px 20px',
    padding: '20px',
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
    opacity: isMenuOpen ? 1 : 0,
    visibility: isMenuOpen ? 'visible' : 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  };

  const mobileLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const mobileLinkStyle = (active) => ({
    ...linkStyle(active),
    padding: '16px 20px',
    borderRadius: '12px',
    background: active 
      ? 'rgba(251, 191, 36, 0.1)' 
      : 'rgba(255, 255, 255, 0.05)',
    border: active 
      ? '1px solid rgba(251, 191, 36, 0.3)' 
      : '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
    fontSize: '18px',
    transition: 'all 0.3s ease',
  });

  return (
    <>
      <nav style={headerStyle}>
        <div style={containerStyle}>
          <div style={navStyle}>
            {/* Logo Mejorado */}
            <Link to="/" style={logoContainerStyle}>
              <div style={logoStyle}>
                <div style={logoGlowStyle} />
                <span>JV</span>
                <Crown 
                  size={12} 
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '8px',
                    color: '#fbbf24',
                    filter: 'drop-shadow(0 0 3px rgba(251, 191, 36, 0.8))'
                  }} 
                />
              </div>
              <div style={logoTextStyle}>
                <span style={logoMainStyle}>Jessica Vélez</span>
                <span style={logoSubStyle}>
                  <Sparkles size={10} style={{ marginRight: '4px', display: 'inline' }} />
                  Escuela de Esteticistas
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Mejorada */}
            <div style={navLinksStyle}>
              {[
                { path: '/', label: 'Inicio' },
                { path: '/cursos', label: 'Cursos' },
                { path: '/aula-virtual', label: 'Aula Virtual' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  style={linkStyle(isActive(item.path))}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.color = '#fbbf24';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.textShadow = '0 0 15px rgba(251, 191, 36, 0.6)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.textShadow = 'none';
                    }
                  }}
                >
                  {item.label}
                  <div style={linkUnderlineStyle(isActive(item.path))} />
                </Link>
              ))}
            </div>

            {/* Botón Login Premium */}
            <div style={{ display: isMobile ? 'none' : 'block' }}>
              <Link 
                to="/aula-virtual" 
                style={loginButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 12px 35px rgba(251, 191, 36, 0.6)';
                  e.target.style.backgroundPosition = '100% 0';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(251, 191, 36, 0.4)';
                  e.target.style.backgroundPosition = '0% 0';
                }}
              >
                <Sparkles size={14} style={{ marginRight: '8px' }} />
                Iniciar Sesión
              </Link>
            </div>

            {/* Mobile Menu Button Mejorado */}
            <button
              style={mobileMenuButtonStyle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(251, 191, 36, 0.2)';
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(251, 191, 36, 0.1)';
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)';
              }}
            >
              {isMenuOpen ? 
                <X size={24} color="#fbbf24" /> : 
                <Menu size={24} color="#fbbf24" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation Premium */}
        <div style={mobileMenuStyle}>
          <div style={mobileLinksStyle}>
            {[
              { path: '/', label: 'Inicio' },
              { path: '/cursos', label: 'Cursos' },
              { path: '/aula-virtual', label: 'Aula Virtual' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                style={mobileLinkStyle(isActive(item.path))}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Link 
              to="/aula-virtual"
              style={{
                ...loginButtonStyle,
                textAlign: 'center',
                display: 'block',
                marginTop: '10px'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles size={14} style={{ marginRight: '8px' }} />
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Estilos CSS para animaciones */}
      <style>{`
        @keyframes logoShine {
          0%, 100% { 
            opacity: 0.6; 
            transform: translate(10%, 10%) scale(1);
          }
          50% { 
            opacity: 1; 
            transform: translate(20%, 20%) scale(1.2);
          }
        }

        @keyframes textShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes buttonGlow {
          0%, 100% { 
            box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
          }
          50% { 
            box-shadow: 0 8px 25px rgba(251, 191, 36, 0.6);
          }
        }
      `}</style>
    </>
  );
};

export default Header;