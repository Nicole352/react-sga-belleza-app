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
    background: 'rgba(0, 0, 0, 0.95)', // ← EXACTAMENTE igual al header
    backdropFilter: 'blur(20px)', // ← EXACTAMENTE igual al header
    borderTop: '2px solid rgba(251, 191, 36, 0.3)', // ← EXACTAMENTE igual al header
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', // ← EXACTAMENTE igual al header
    color: 'white',
    padding: '60px 0 30px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Georgia', serif",
  };

  const containerStyle = {
    maxWidth: '100%', // ← CAMBIADO: usar todo el ancho disponible
    margin: '0',
    padding: '0 5%', // ← CAMBIADO: padding porcentual más ajustado
    position: 'relative',
    zIndex: 1,
  };

  const footerMainStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 300px 300px', // ← CAMBIADO: columnas con medidas fijas más equilibradas
    gap: '60px', // ← Espaciado adecuado
    marginBottom: '40px',
    alignItems: 'start',
    maxWidth: '1400px', // ← Contenido máximo centrado
    margin: '0 auto 40px auto', // ← Centrado del contenido
  };

  const logoSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // ← Alineación mejorada
    marginBottom: '24px', // ← Espaciado optimizado
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
  };

  const logoMainStyle = {
    fontSize: '26px',
    fontWeight: '400',
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24)', // ← EXACTO como header
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textShine 3s ease-in-out infinite',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
    letterSpacing: '-0.5px',
  };

  const logoSubStyle = {
    fontSize: '13px',
    color: '#fde68a', // ← EXACTO como header
    marginTop: '-2px',
    fontWeight: '500',
    letterSpacing: '0.5px',
    fontFamily: "'Montserrat', sans-serif",
  };

  const descriptionStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.8',
    marginBottom: '24px',
    fontFamily: "'Crimson Text', serif",
    fontSize: '16px',
    maxWidth: '320px', // ← REDUCIDO de 400px a 320px
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
    color: 'rgba(255, 255, 255, 0.9)', // ← CAMBIADO: mismo color que enlaces del header
    fontSize: '14px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '400',
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
    color: 'rgba(255, 255, 255, 0.9)', // ← CAMBIADO: exacto como header
    textDecoration: 'none',
    fontSize: '15px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '400',
    transition: 'all 0.3s ease',
    padding: '4px 0',
    letterSpacing: '0.3px',
  };

  const socialContainerStyle = {
    marginTop: '20px',
  };

  const socialGridStyle = {
    display: 'flex',
    gap: '16px',
    marginTop: '16px',
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
  };

  const tiktokStyle = {
    ...socialLinkStyle,
    background: 'rgba(255, 255, 255, 0.08)',
  };

  const instagramStyle = {
    ...socialLinkStyle,
    background: 'rgba(255, 255, 255, 0.08)',
  };

  const facebookStyle = {
    ...socialLinkStyle,
    background: 'rgba(255, 255, 255, 0.08)',
  };

  const whatsappStyle = {
    ...socialLinkStyle,
    background: 'rgba(255, 255, 255, 0.08)',
  };

  const bottomBarStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const copyrightStyle = {
    color: 'rgba(255, 255, 255, 0.9)', // ← CAMBIADO: mismo color brillante del header
    fontSize: '14px',
    fontFamily: "'Montserrat', sans-serif",
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '400',
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
        <div style={footerMainStyle}>
          {/* Logo & Description */}
          <div style={logoSectionStyle}>
            <div style={logoContainerStyle}>
              <img 
                src="https://res.cloudinary.com/di090ggjn/image/upload/v1755893582/catjq75bgehyzkzb0ryc.jpg"
                alt="Jessica Vélez - Escuela de Esteticistas"
                style={{
                  height: '80px', // ← Tamaño elegante para footer
                  width: 'auto',
                  filter: 'drop-shadow(0 6px 20px rgba(251, 191, 36, 0.4))',
                  transition: 'all 0.3s ease',
                }}
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
            
            <p style={descriptionStyle}>
              Líder en formación de esteticistas profesionales. Transformamos vidas a través de la belleza con técnicas avanzadas.
            </p>

            <div style={contactInfoStyle}>
              <div style={contactItemStyle}>
                <MapPin size={16} style={iconStyle} />
                <span>Santo Domingo, Ecuador</span>
              </div>
              <div style={contactItemStyle}>
                <Phone size={16} style={iconStyle} />
                <span>+593 99 999 9999</span>
              </div>
              <div style={contactItemStyle}>
                <Mail size={16} style={iconStyle} />
                <span>info@escuelajessicavelez.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={sectionStyle}>
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
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)'; // ← CAMBIADO: color original del header
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
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Síguenos</h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)', // ← CAMBIADO: mismo color que header
              fontSize: '14px',
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: '1.6',
              marginBottom: '0',
            }}>
              Conecta con nosotras en redes sociales
            </p>
            
            <div style={socialContainerStyle}>
              <div style={socialGridStyle}>
                <a 
                  href="https://www.tiktok.com/@escuelajessicavelez?_t=ZM-8z5xZqX5GTN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={tiktokStyle}
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
                  style={instagramStyle}
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
                  style={facebookStyle}
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
                  style={whatsappStyle}
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
        <div style={bottomBarStyle}>
          <div style={copyrightStyle}>
            <Heart size={16} color="#fbbf24" />
            <span>© {currentYear} Jessica Vélez - Escuela de Esteticistas. Todos los derechos reservados.</span>
          </div>
          
          <div style={badgeStyle}>
            <Award size={14} />
            <span>Educación Certificada</span>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>{`

        /* Responsive Design */
        @media (max-width: 1200px) {
          .footer-container {
            padding: 0 3% !important;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 0 4% !important;
          }
          
          ${footerMainStyle} {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }
          
          ${socialGridStyle} {
            justify-content: center;
          }
          
          ${bottomBarStyle} {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          
          ${descriptionStyle} {
            max-width: none;
          }
          
          ${contactInfoStyle} {
            align-items: center;
          }

          /* Logo responsivo en tablet */
          img[alt="Jessica Vélez - Escuela de Esteticistas"] {
            height: 70px !important;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 3% !important;
          }

          ${socialGridStyle} {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            justify-items: center;
          }

          /* Logo responsivo en móvil */
          img[alt="Jessica Vélez - Escuela de Esteticistas"] {
            height: 60px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;