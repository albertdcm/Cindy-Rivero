import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            padding: scrolled ? '1rem 0' : '1.5rem 0',
        },
        nav: { position:"fixed", top:0, left:0, width:"100%", height:"100%", background:"rgba(255,255,255,0.95)", backdropFilter:"blur(10px)", display:"flex", flexDirection:"column", padding:"20px 24px", zIndex:1000 },
        logoContainer: { display:"flex", alignItems:"center", gap:"10px", marginBottom:"28px" },
        logoImage: {
            height: '40px',
            width: 'auto',
        },
        logoText: {
            fontSize: '1.5rem',
            fontWeight: '600',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
        },
        link: {
            fontSize: '0.95rem',
            fontWeight: '500',
            color: 'var(--color-text)',
            position: 'relative',
        },
    };

    return (
        <header style={styles.header}>
            <div className="container" style={styles.nav}>
                <a href="#" style={styles.logoContainer} onClick={closeMenu}>
                    <img src="/isotipo.png" alt="CR" style={styles.logoImage} />
                    <span style={styles.logoText}>Cindy Rivero</span>
                </a>

                {/* Hamburger Icon */}
                <button
                    className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Menu */}
                <nav>
                    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#servicios" style={styles.link} onClick={closeMenu}>Servicios</a></li>
                        <li><a href="#modalidad" style={styles.link} onClick={closeMenu}>Modalidad</a></li>
                        <li>
                            <a
                                href="https://www.instagram.com/psic.rivero/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}
                                onClick={closeMenu}
                                aria-label="Instagram"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://calendar.app.google/z81hp3rG1usi3EZ17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}
                                onClick={closeMenu}
                            >
                                Agendar sesión
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
