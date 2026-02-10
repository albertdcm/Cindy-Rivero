import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Psicoterapia adultos",
            description: "Proceso terapéutico para comprender y abordar malestar emocional, ansiedad, conflictos personales, relacionales o laborales desde una mirada clínica y contextual.",
            buttonText: "Agendar sesión"
        },
        {
            title: "Psicoterapia infanto-juvenil",
            description: "Acompañamiento psicológico para niñas y niños con dificultades emocionales, conductuales o escolares. Espacio clínico para adolescentes que atraviesan ansiedad, conflictos vinculares o dificultades en su identidad.",
            buttonText: "Agendar primera consulta"
        },
        {
            title: "Orientación vocacional",
            description: "Proceso de acompañamiento para elegir o redefinir un proyecto académico y profesional, integrando intereses, valores, habilidades y contexto personal.",
            buttonText: "Solicitar proceso"
        }
    ];

    const styles = {
        section: {
            padding: 'var(--spacing-xl) 0',
            backgroundColor: '#ffffff',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
        },
        card: {
            padding: '2.5rem',
            borderRadius: '16px',
            backgroundColor: 'var(--color-bg)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid transparent',
        },
        cardHover: {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid var(--color-primary)',
        },
        cardTitle: {
            fontSize: '1.3rem',
            marginBottom: '1rem',
            color: 'var(--color-primary-dark)',
            fontFamily: 'var(--font-heading)',
        },
        cardDesc: {
            fontSize: '1rem',
            marginBottom: '2rem',
            color: 'var(--color-text-light)',
            flexGrow: 1,
        }
    };

    return (
        <section id="servicios" style={styles.section}>
            <div className="container">
                <h2 style={{ textAlign: 'center' }}>Servicios</h2>
                <div style={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} style={styles.card} className="service-card">
                            <div>
                                <h3 style={styles.cardTitle}>{service.title}</h3>
                                <p style={styles.cardDesc}>{service.description}</p>
                            </div>
                            <a
                                href="https://calendar.app.google/z81hp3rG1usi3EZ17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                style={{ textAlign: 'center', textDecoration: 'none' }}
                            >
                                {service.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid var(--color-primary);
                    background-color: #fff;
                }
            `}</style>
        </section>
    );
};

export default Services;
