import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const headerStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(251, 191, 36, 0.2)',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
  };

  const logoStyle = {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #fbbf24',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const logoTextStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const logoMainStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fbbf24',
  };

  const logoSubStyle = {
    fontSize: '12px',
    color: '#fde68a',
    marginTop: '-4px',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '32px',
  };

  const linkStyle = (active) => ({
    fontWeight: '500',
    transition: 'color 0.3s',
    color: active ? '#fbbf24' : 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
  });

  const loginButtonStyle = {
    background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
    color: 'black',
    padding: '8px 24px',
    borderRadius: '24px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(251, 191, 36, 0.25)',
  };

  const mobileMenuStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    borderRadius: '8px',
    marginTop: '8px',
    padding: '16px',
    display: isMenuOpen ? 'block' : 'none',
  };

  const mobileLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  return (
    <nav style={headerStyle}>
      <div style={containerStyle}>
        <div style={navStyle}>
          {/* Logo */}
          <Link to="/" style={logoContainerStyle}>
            <div style={logoStyle}>
              <span>JV</span>
            </div>
            <div style={logoTextStyle}>
              <span style={logoMainStyle}>Jessica Vélez</span>
              <span style={logoSubStyle}>Escuela de Esteticistas</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ ...navLinksStyle, display: window.innerWidth >= 768 ? 'flex' : 'none' }}>
            <Link to="/" style={linkStyle(isActive('/'))}>
              Inicio
            </Link>
            <Link to="/cursos" style={linkStyle(isActive('/cursos'))}>
              Cursos
            </Link>
            <Link to="/aula-virtual" style={linkStyle(isActive('/aula-virtual'))}>
              Aula Virtual
            </Link>
          </div>

          {/* Login Button */}
          <div style={{ display: window.innerWidth >= 768 ? 'block' : 'none' }}>
            <Link to="/aula-virtual" style={loginButtonStyle}>
              Iniciar Sesión
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            style={{
              display: window.innerWidth >= 768 ? 'none' : 'block',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div style={mobileMenuStyle}>
          <div style={mobileLinksStyle}>
            <Link 
              to="/" 
              style={linkStyle(isActive('/'))}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/cursos" 
              style={linkStyle(isActive('/cursos'))}
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link 
              to="/aula-virtual" 
              style={linkStyle(isActive('/aula-virtual'))}
              onClick={() => setIsMenuOpen(false)}
            >
              Aula Virtual
            </Link>
            <Link 
              to="/aula-virtual"
              style={{ ...loginButtonStyle, textAlign: 'center', display: 'block' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;