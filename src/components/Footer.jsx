import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#F5F5F3',
            color: '#333333',
            padding: '4rem 0 2rem',
            textAlign: 'center',
            borderTop: '1px solid #e0e0e0',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
        },
        logo: {
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: '#333333',
        },
        info: {
            color: '#666666',
            fontSize: '0.95rem',
            marginBottom: '0.25rem',
        },
        link: {
            color: '#666666',
            fontSize: '1rem',
            marginTop: '1rem',
            display: 'inline-block',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'color 0.3s ease, border-color 0.3s ease',
            fontWeight: '500',
        },
        quote: {
            fontStyle: 'italic',
            color: '#888888',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            marginTop: '1rem',
        },
        copyright: {
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #ddd',
            color: '#999999',
            fontSize: '0.85rem',
            width: '100%',
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <img src="/isotipo.png" alt="CR" style={{ height: '40px', width: 'auto' }} />
                        <h3 style={{ ...styles.logo, marginBottom: 0 }}>Cindy Rivero</h3>
                    </div>
                    <p style={styles.info}>Psicóloga Clínica</p>
                    <p style={styles.info}>Atención Online</p>
                    <a href="https://www.instagram.com/psic.rivero" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        Instagram: @psic.rivero
                    </a>
                </div>

                <p style={styles.quote}>
                    "Acompañando procesos desde la ética, el respeto y la calidez humana."
                </p>

                <div style={styles.copyright}>
                    &copy; {new Date().getFullYear()} Cindy Rivero. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
