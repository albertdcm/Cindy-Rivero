import React from 'react';

const Modality = () => {
    const styles = {
        section: {
            padding: 'var(--spacing-xl) 0',
            backgroundImage: 'url(/secondary.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(74, 70, 60, 0.7)', // Warm dark overlay for better contrast
            zIndex: 0,
        },
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem var(--spacing-md)',
            position: 'relative',
            zIndex: 1,
        },
        title: {
            color: 'white',
            marginBottom: 'var(--spacing-md)',
            textShadow: '0 1px 3px rgba(0,0,0,0.3)', // Stronger shadow for contrast
        },
        text: {
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '500', // Slightly bolder for readability
            marginBottom: 'var(--spacing-md)',
            lineHeight: '1.8',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        }
    };

    return (
        <section id="modalidad" style={styles.section}>
            <div style={styles.overlay}></div>
            <div style={styles.container}>
                <h2 style={styles.title}>Modalidad de Atención</h2>
                <p style={styles.text}>
                    Las sesiones se realizan en modalidad <strong>individual online</strong>, creando un espacio de atención profesional, seguro y accesible desde donde estés.
                </p>
                <p style={styles.text}>
                    Mantenemos un encuadre de estricta confidencialidad y respeto, asegurando las condiciones necesarias para el proceso terapéutico.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                        Para agendar una primera cita, puedes hacerlo directamente aquí:
                    </p>
                    <a
                        href="https://calendar.app.google/z81hp3rG1usi3EZ17"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'white',
                            textDecoration: 'underline',
                            fontWeight: 'bold',
                            marginTop: '0.5rem',
                            display: 'inline-block'
                        }}
                    >
                        Reserva tu cita online
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Modality;
