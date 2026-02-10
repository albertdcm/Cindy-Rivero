import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Psicoterapia Adultos',
        reason: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const styles = {
        section: {
            padding: 'var(--spacing-xl) 0',
            backgroundColor: 'var(--color-bg)',
        },
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 var(--spacing-md)',
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem',
        },
        intro: {
            color: 'var(--color-text-light)',
            marginBottom: '2rem',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
        },
        label: {
            fontWeight: '600',
            fontSize: '0.9rem',
            color: 'var(--color-text)',
        },
        input: {
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease',
            backgroundColor: '#fafafa',
            width: '100%',
        },
        select: {
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            backgroundColor: '#fafafa',
            width: '100%',
            cursor: 'pointer',
        },
        textarea: {
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            minHeight: '150px',
            resize: 'vertical',
            backgroundColor: '#fafafa',
            width: '100%',
        },
        button: {
            marginTop: '1rem',
            padding: '1.2rem',
            fontSize: '1rem',
            width: '100%',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease',
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Show loading state
        Swal.fire({
            title: 'Enviando mensaje...',
            text: 'Por favor espera un momento.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const response = await fetch("https://formsubmit.co/ajax/psic.riverotorres@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "Nombre": formData.name,
                    "Email": formData.email,
                    "Teléfono": formData.phone,
                    "Servicio de Interés": formData.service,
                    "Motivo": formData.reason,
                    "Mensaje": formData.message,
                    _subject: `Nueva consulta de ${formData.name}`,
                    _template: "box",
                    _captcha: "false"
                })
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Gracias por escribirme. Te responderé a la brevedad posible.',
                    confirmButtonColor: 'var(--color-secondary)',
                    confirmButtonText: 'Cerrar'
                });

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'Psicoterapia Adultos',
                    reason: '',
                    message: ''
                });
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje. Por favor intenta nuevamente o contáctame directamente por Instagram.',
                confirmButtonColor: 'var(--color-primary)'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2>Contacto y Agenda</h2>
                    <p style={styles.intro}>
                        Para consultas o agendar una cita, por favor completa el siguiente formulario.
                    </p>
                </div>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="name">Nombre completo</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="email">Email</label>
                        <input
                            style={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tucorreo@ejemplo.com"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="phone">Teléfono</label>
                        <input
                            style={styles.input}
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Tu número de teléfono"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="service">Servicio de interés</label>
                        <select
                            style={styles.select}
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        >
                            <option value="Psicoterapia Adultos">Psicoterapia Adultos</option>
                            <option value="Psicoterapia Infanto-Juvenil">Psicoterapia Infanto-Juvenil</option>
                            <option value="Orientación Vocacional">Orientación Vocacional</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="reason">Motivo de consulta (breve)</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            placeholder="Ej: Ansiedad, orientación..."
                            disabled={isSubmitting}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="message">Mensaje</label>
                        <textarea
                            style={styles.textarea}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="¿Cómo puedo ayudarte?"
                            required
                            disabled={isSubmitting}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn"
                        style={{
                            ...styles.button,
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Solicitar información'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
