import React from 'react';

const Hero = () => {
    const styles = {
        hero: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px', // Header height
            background: 'linear-gradient(135deg, var(--color-bg) 0%, #F0F4F0 100%)',
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            flexWrap: 'wrap-reverse', // Image on top on mobile if wrapped
        },
        text: {
            flex: 1,
            minWidth: '300px',
        },
        imageWrapper: {
            flex: 1,
            minWidth: '300px',
            display: 'flex',
            justifyContent: 'center',
        },
        image: {
            width: '100%',
            maxWidth: '450px',
            borderRadius: '20px', // Soft corners
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            objectFit: 'cover',
        },
        subtitle: {
            color: 'var(--color-primary-dark)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.9rem',
            fontWeight: '700',
            marginBottom: '1rem',
            display: 'block',
        },
        title: {
            marginBottom: '1.5rem',
            lineHeight: '1.2',
        },
        intro: {
            fontSize: '1.1rem',
            color: 'var(--color-text-light)',
            marginBottom: '2rem',
            maxWidth: '600px',
        },
    };

    return (
        <section id="hero-section" style={styles.hero}>
            <div className="container">
                <div id="hero-content" style={styles.content}>
                    <div style={styles.text}>
                        <span style={styles.subtitle}>Psicóloga Clínica</span>
                        <h1 style={styles.title}>Acompañando procesos hacia el bienestar</h1>
                        <p style={styles.intro}>
                            Acompaño procesos de evaluación y psicoterapia desde una mirada clínica, humana y contextual, orientada a comprender el malestar más allá de los síntomas y a fortalecer los recursos personales, familiares y vinculares.
                        </p>
                        <p style={styles.intro}>
                            Mi trabajo se basa en una práctica ética, respetuosa de la diversidad, con especial atención a la historia, el entorno y las necesidades particulares de cada etapa de la vida.
                        </p>
                        <a
                            href="https://calendar.app.google/z81hp3rG1usi3EZ17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ textDecoration: 'none' }}
                        >
                            Agendar sesión
                        </a>
                    </div>
                    <div style={styles.imageWrapper}>
                        <img src="/hero.jpg" alt="Cindy Rivero - Psicóloga" style={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
