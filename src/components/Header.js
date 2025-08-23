import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detectar resize y cerrar menú automáticamente
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      
      // Si cambia de móvil a desktop, cerrar el menú automáticamente
      if (!mobile && isMobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, isMenuOpen]); // Agregar dependencias para que detecte los cambios

  // Cerrar menú cuando cambia la ruta (navegación)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
    maxWidth: '100%',
    margin: '0',
    padding: '0 5%',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const logoImageStyle = {
    height: '60px',
    width: 'auto',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 4px 15px rgba(251, 191, 36, 0.3))',
  };

  const navLinksStyle = {
    display: isMobile ? 'none' : 'flex',
    gap: '24px', // Reducido para acomodar más enlaces
    alignItems: 'center',
  };

  const linkStyle = (active) => ({
    fontWeight: '600',
    fontSize: '15px', // Ligeramente reducido
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: active ? '#fbbf24' : 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    position: 'relative',
    padding: '12px 8px', // Reducido padding horizontal
    textShadow: active ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none',
    transform: active ? 'translateY(-2px)' : 'translateY(0)',
    fontFamily: "'Montserrat', 'Inter', 'Helvetica', sans-serif",
    letterSpacing: '0.3px',
    whiteSpace: 'nowrap',
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
    gap: '16px',
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
    fontSize: '16px',
    transition: 'all 0.3s ease',
    fontFamily: "'Montserrat', 'Inter', 'Helvetica', sans-serif",
    whiteSpace: 'normal',
  });

  // Lista de navegación actualizada
  const navigationItems = [
    { path: '/', label: 'Inicio' },
    { path: '/cursos', label: 'Cursos' },
    { path: '/avales', label: 'Avales' },
    { path: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { path: '/aula-virtual', label: 'Aula Virtual' },
    { path: '/contactenos', label: 'Contáctenos' }
  ];

  return (
    <>
      <nav style={headerStyle}>
        <div style={containerStyle} className="header-container">
          <div style={navStyle}>
            {/* Logo con imagen */}
            <Link to="/" style={logoContainerStyle}>
              <img 
                src="https://res.cloudinary.com/di090ggjn/image/upload/v1755893582/catjq75bgehyzkzb0ryc.jpg"
                alt="Jessica Vélez - Escuela de Esteticistas"
                style={logoImageStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.filter = 'drop-shadow(0 6px 20px rgba(251, 191, 36, 0.5))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.filter = 'drop-shadow(0 4px 15px rgba(251, 191, 36, 0.3))';
                }}
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div style={navLinksStyle}>
              {navigationItems.map((item) => (
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

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        <div style={mobileMenuStyle}>
          <div style={mobileLinksStyle}>
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                style={mobileLinkStyle(isActive(item.path))}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Estilos CSS para animaciones */}
      <style>{`
        /* Responsive adjustments para padding */
        @media (max-width: 1200px) {
          .header-container {
            padding: 0 3% !important;
          }
        }

        @media (max-width: 1024px) {
          /* Ajustar gap entre enlaces en tablets */
          nav div:nth-child(1) div:nth-child(2) {
            gap: 18px !important;
          }
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 4% !important;
          }
          
          img[alt="Jessica Vélez - Escuela de Esteticistas"] {
            height: 50px !important;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0 3% !important;
          }
          
          img[alt="Jessica Vélez - Escuela de Esteticistas"] {
            height: 45px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;