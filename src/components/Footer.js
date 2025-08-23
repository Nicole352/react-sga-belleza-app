import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail,
  Heart,
  Award,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(20px)',
    borderTop: '2px solid rgba(251, 191, 36, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    color: 'white',
    padding: '60px 0 30px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
  };

  const containerStyle = {
    maxWidth: '100%',
    margin: '0',
    padding: '0 5%',
    position: 'relative',
    zIndex: 1,
  };

  const footerMainStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 300px 300px',
    gap: '60px',
    marginBottom: '40px',
    alignItems: 'start',
    maxWidth: '1400px',
    margin: '0 auto 40px auto',
  };

  const logoSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '24px',
  };

  const descriptionStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.8',
    marginBottom: '24px',
    fontFamily: "'Crimson Text', serif",
    fontSize: '16px',
    maxWidth: '320px',
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '400',
    flexWrap: 'wrap',
  };

  const iconStyle = {
    color: '#fbbf24',
    flexShrink: 0,
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#fbbf24',
    marginBottom: '20px',
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: '0.5px',
  };

  const linkListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    fontSize: '15px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '400',
    transition: 'all 0.3s ease',
    padding: '4px 0',
    letterSpacing: '0.3px',
    display: 'inline-block',
  };

  const socialContainerStyle = {
    marginTop: '20px',
  };

  const socialGridStyle = {
    display: 'flex',
    gap: '16px',
    marginTop: '16px',
    flexWrap: 'wrap',
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.08)',
  };

  const bottomBarStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const copyrightStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
    fontFamily: "'Montserrat', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '400',
    flexWrap: 'wrap',
    textAlign: 'center',
    width: '100%',
  };

  const badgeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'rgba(251, 191, 36, 0.1)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    borderRadius: '20px',
    color: '#fbbf24',
    fontSize: '13px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '500',
    whiteSpace: 'nowrap',
  };

  // Icono personalizado de TikTok usando CSS
  const TikTokIcon = () => (
    <div style={{
      width: '20px',
      height: '20px',
      background: '#fff',
      maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'/%3E%3C/svg%3E")`,
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      maskSize: 'contain',
    }} />
  );

  return (
    <footer style={footerStyle}>
      <div style={containerStyle} className="footer-container">
        {/* Main Footer Content */}
        <div style={footerMainStyle} className="footer-main">
          {/* Logo & Description */}
          <div style={logoSectionStyle} className="footer-logo-section">
            <div style={logoContainerStyle}>
              <img 
                src="https://res.cloudinary.com/di090ggjn/image/upload/v1755893582/catjq75bgehyzkzb0ryc.jpg"
                alt="Jessica Vélez - Escuela de Esteticistas"
                style={{
                  height: '80px',
                  width: 'auto',
                  filter: 'drop-shadow(0 6px 20px rgba(251, 191, 36, 0.4))',
                  transition: 'all 0.3s ease',
                }}
                className="footer-logo"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.filter = 'drop-shadow(0 8px 25px rgba(251, 191, 36, 0.6))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.filter = 'drop-shadow(0 6px 20px rgba(251, 191, 36, 0.4))';
                }}
              />
            </div>
            
            <p style={descriptionStyle} className="footer-description">
              Líder en formación de esteticistas profesionales. Transformamos vidas a través de la belleza con técnicas avanzadas.
            </p>

            <div style={contactInfoStyle} className="footer-contact">
              <div style={contactItemStyle} className="contact-item">
                <MapPin size={16} style={iconStyle} />
                <span>Santo Domingo, Ecuador</span>
              </div>
              <div style={contactItemStyle} className="contact-item">
                <Phone size={16} style={iconStyle} />
                <span>+593 99 999 9999</span>
              </div>
              <div style={contactItemStyle} className="contact-item">
                <Mail size={16} style={iconStyle} />
                <span>info@escuelajessicavelez.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={sectionStyle} className="footer-links">
            <h3 style={sectionTitleStyle}>Enlaces</h3>
            <div style={linkListStyle}>
              <Link 
                to="/" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#fbbf24';
                  e.target.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.paddingLeft = '0px';
                }}
              >
                Inicio
              </Link>
              <Link 
                to="/cursos" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#fbbf24';
                  e.target.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.paddingLeft = '0px';
                }}
              >
                Cursos
              </Link>
              <Link 
                to="/aula-virtual" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#fbbf24';
                  e.target.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.paddingLeft = '0px';
                }}
              >
                Aula Virtual
              </Link>
              <a 
                href="#contacto" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#fbbf24';
                  e.target.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.paddingLeft = '0px';
                }}
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div style={sectionStyle} className="footer-social-section">
            <h3 style={sectionTitleStyle}>Síguenos</h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '14px',
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: '1.6',
              marginBottom: '0',
            }} className="social-description">
              Conecta con nosotras en redes sociales
            </p>
            
            <div style={socialContainerStyle}>
              <div style={socialGridStyle} className="social-grid">
                <a 
                  href="https://www.tiktok.com/@escuelajessicavelez?_t=ZM-8z5xZqX5GTN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="social-link tiktok-link"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'rgba(255, 0, 80, 0.15)';
                    e.target.style.borderColor = 'rgba(255, 0, 80, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <TikTokIcon />
                </a>

                <a 
                  href="https://www.instagram.com/escuelajessicavelez/?igsh=MWtxMXBhMmFxMmN5bg%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="social-link instagram-link"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'rgba(225, 48, 108, 0.15)';
                    e.target.style.borderColor = 'rgba(225, 48, 108, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <Instagram size={20} color="#fff" />
                </a>

                <a 
                  href="#facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="social-link facebook-link"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'rgba(66, 103, 178, 0.15)';
                    e.target.style.borderColor = 'rgba(66, 103, 178, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <Facebook size={20} color="#fff" />
                </a>

                <a 
                  href="#whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="social-link whatsapp-link"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'rgba(37, 211, 102, 0.15)';
                    e.target.style.borderColor = 'rgba(37, 211, 102, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <MessageCircle size={20} color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyle} className="footer-bottom">
          <div style={copyrightStyle} className="copyright">
            <Heart size={16} color="#fbbf24" />
            <span>© {currentYear} Jessica Vélez - Escuela de Esteticistas. Todos los derechos reservados.</span>
          </div>
          
          <div style={badgeStyle} className="certification-badge">
            <Award size={14} />
            <span>Educación Certificada</span>
          </div>
        </div>
      </div>

      {/* Estilos CSS Completamente Responsivos */}
      <style>{`
        /* BREAKPOINTS RESPONSIVOS COMPLETOS */

        /* Extra Large Desktop (1400px+) */
        @media (min-width: 1400px) {
          .footer-container {
            padding: 0 8% !important;
          }
          
          .footer-main {
            grid-template-columns: 1.2fr 280px 280px !important;
            gap: 80px !important;
          }
          
          .footer-description {
            max-width: 380px !important;
            font-size: 17px !important;
          }
        }

        /* Large Desktop (1200px - 1399px) */
        @media (max-width: 1399px) and (min-width: 1200px) {
          .footer-container {
            padding: 0 6% !important;
          }
          
          .footer-main {
            grid-template-columns: 1fr 260px 260px !important;
            gap: 50px !important;
          }
        }

        /* Medium Desktop (992px - 1199px) */
        @media (max-width: 1199px) and (min-width: 992px) {
          .footer-container {
            padding: 0 4% !important;
          }
          
          .footer-main {
            grid-template-columns: 1fr 240px 240px !important;
            gap: 40px !important;
          }
          
          .footer-description {
            max-width: 280px !important;
            font-size: 15px !important;
          }
          
          .footer-logo {
            height: 70px !important;
          }
        }

        /* Small Desktop/Large Tablet (768px - 991px) */
        @media (max-width: 991px) and (min-width: 768px) {
          .footer-container {
            padding: 0 4% !important;
          }
          
          .footer-main {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
            text-align: left !important;
          }
          
          .footer-social-section {
            grid-column: 1 / -1 !important;
            text-align: center !important;
            margin-top: 20px !important;
          }
          
          .social-grid {
            justify-content: center !important;
          }
          
          .footer-description {
            max-width: none !important;
          }
          
          .footer-logo {
            height: 65px !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 16px !important;
            justify-content: center !important;
          }
        }

        /* Tablet Portrait (481px - 767px) */
        @media (max-width: 767px) and (min-width: 481px) {
          footer {
            padding: 40px 0 20px !important;
          }
          
          .footer-container {
            padding: 0 5% !important;
          }
          
          .footer-main {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center !important;
            margin-bottom: 30px !important;
          }
          
          .footer-logo-section {
            align-items: center !important;
          }
          
          .footer-logo {
            height: 60px !important;
          }
          
          .footer-description {
            max-width: none !important;
            font-size: 15px !important;
            text-align: center !important;
          }
          
          .footer-contact {
            align-items: center !important;
          }
          
          .contact-item {
            justify-content: center !important;
            font-size: 13px !important;
          }
          
          .social-grid {
            justify-content: center !important;
            gap: 12px !important;
          }
          
          .social-link {
            width: 44px !important;
            height: 44px !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 16px !important;
            justify-content: center !important;
            padding-top: 20px !important;
          }
          
          .copyright {
            font-size: 13px !important;
            justify-content: center !important;
            width: 100% !important;
          }
          
          .certification-badge {
            font-size: 12px !important;
            padding: 6px 12px !important;
          }
        }

        /* Mobile Large (376px - 480px) */
        @media (max-width: 480px) and (min-width: 376px) {
          footer {
            padding: 35px 0 20px !important;
          }
          
          .footer-container {
            padding: 0 4% !important;
          }
          
          .footer-main {
            gap: 25px !important;
          }
          
          .footer-logo {
            height: 55px !important;
          }
          
          .footer-description {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          .contact-item {
            font-size: 12px !important;
            flex-direction: row !important;
            align-items: center !important;
          }
          
          .social-grid {
            gap: 10px !important;
            flex-wrap: wrap !important;
          }
          
          .social-link {
            width: 42px !important;
            height: 42px !important;
          }
          
          .social-link svg,
          .social-link div {
            width: 18px !important;
            height: 18px !important;
          }
          
          .copyright span {
            font-size: 12px !important;
            text-align: center !important;
            line-height: 1.4 !important;
          }
        }

        /* Mobile Small (320px - 375px) */
        @media (max-width: 375px) {
          footer {
            padding: 30px 0 15px !important;
          }
          
          .footer-container {
            padding: 0 3% !important;
          }
          
          .footer-main {
            gap: 20px !important;
          }
          
          .footer-logo {
            height: 50px !important;
          }
          
          .footer-description {
            font-size: 13px !important;
            line-height: 1.5 !important;
          }
          
          .contact-item {
            font-size: 11px !important;
            gap: 8px !important;
          }
          
          .contact-item svg {
            width: 14px !important;
            height: 14px !important;
          }
          
          .social-grid {
            gap: 8px !important;
          }
          
          .social-link {
            width: 40px !important;
            height: 40px !important;
          }
          
          .social-link svg,
          .social-link div {
            width: 16px !important;
            height: 16px !important;
          }
          
          .copyright {
            flex-direction: column !important;
            gap: 4px !important;
          }
          
          .copyright span {
            font-size: 11px !important;
            line-height: 1.3 !important;
          }
          
          .certification-badge {
            font-size: 11px !important;
            padding: 5px 10px !important;
          }
          
          .certification-badge svg {
            width: 12px !important;
            height: 12px !important;
          }
        }

        /* Extra Small Mobile (< 320px) */
        @media (max-width: 319px) {
          footer {
            padding: 25px 0 15px !important;
          }
          
          .footer-container {
            padding: 0 2% !important;
          }
          
          .footer-logo {
            height: 45px !important;
          }
          
          .footer-description {
            font-size: 12px !important;
          }
          
          .contact-item {
            font-size: 10px !important;
            gap: 6px !important;
          }
          
          .social-grid {
            gap: 6px !important;
          }
          
          .social-link {
            width: 36px !important;
            height: 36px !important;
          }
          
          .social-link svg,
          .social-link div {
            width: 14px !important;
            height: 14px !important;
          }
          
          .copyright span {
            font-size: 10px !important;
          }
          
          .certification-badge {
            font-size: 10px !important;
            padding: 4px 8px !important;
          }
        }

        /* Landscape Mobile Fixes */
        @media (max-height: 500px) and (orientation: landscape) {
          footer {
            padding: 20px 0 15px !important;
          }
          
          .footer-main {
            gap: 20px !important;
            margin-bottom: 20px !important;
          }
          
          .footer-bottom {
            padding-top: 15px !important;
          }
        }

        /* High Resolution Displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .footer-logo {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }

        /* Hover Effects for Touch Devices */
        @media (hover: none) {
          .social-link:hover {
            transform: none !important;
            background: rgba(255, 255, 255, 0.08) !important;
          }
          
          .footer-logo:hover {
            transform: none !important;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          footer {
            background: rgba(0, 0, 0, 0.98) !important;
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          footer {
            border-top: 3px solid #fbbf24 !important;
          }
          
          .social-link {
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;