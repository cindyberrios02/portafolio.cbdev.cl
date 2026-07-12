import React from 'react'
import { FaLayerGroup, FaMobileAlt, FaLaptopCode, FaDatabase, FaPaintBrush, FaRobot } from 'react-icons/fa'

function Contact() {
    const expertise = [
        { 
            icon: <FaLayerGroup className="text-primary" />, 
            title: 'Backend (Java/Spring)',
            description: 'Construcción de arquitecturas robustas y escalables con Java y Spring Boot, bajo principios SOLID y Clean Architecture.'
        },
        { 
            icon: <FaMobileAlt className="text-primary" />, 
            title: 'Android & Mobile',
            description: 'Creación de aplicaciones nativas en Android utilizando Jetpack Compose, Kotlin y arquitectura MVVM.'
        },
        { 
            icon: <FaLaptopCode className="text-primary" />, 
            title: 'Frontend (React/JS)',
            description: 'Creación de interfaces web dinámicas y responsivas con React.js y Javascript moderno.'
        },
        { 
            icon: <FaDatabase className="text-primary" />, 
            title: 'Bases de Datos',
            description: 'Modelado y optimización de bases de datos relacionales (PostgreSQL, SQL Server) y no relacionales (MongoDB).'
        },
        { 
            icon: <FaPaintBrush className="text-primary" />, 
            title: 'Diseño & Multimedia',
            description: 'Diseño de interfaces funcionales (UI) y optimización de experiencia de usuario (UX) con Adobe Suite.'
        },
        { 
            icon: <FaRobot className="text-primary" />, 
            title: 'Automatización & Python',
            description: 'Desarrollo de scripts en Python para la automatización de procesos repetitivos y carga masiva de datos.'
        }
    ];

    return (
        <section id="contactus" data-scroll-index="3" className="section contactus-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="contact-info">
                            <h3 className="mb-3">Hablemos de tu proyecto</h3>
                            <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1rem', lineHeight: '1.7' }}>
                                Si tienes un desafío interesante, una propuesta laboral o simplemente quieres saludar, no dudes en ponerte en contacto conmigo a través de cualquiera de estos canales. ¡Estaré encargada de conversar contigo!
                            </p>
                            
                            <div className="row gy-4 justify-content-center mb-5">
                                <div className="col-md-4">
                                    <div className="d-flex flex-column align-items-center p-4 glass-card h-100">
                                        <div className="icon mb-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '50px', height: '50px', fontSize: '1.25rem' }}>
                                            <i className="bi-chat-left-dots-fill"></i>
                                        </div>
                                        <span className="fw-semibold text-heading mb-1" style={{ color: 'var(--bs-heading-color)' }}>Escríbeme</span>
                                        <p className="small text-muted mb-0"><a className="text-reset text-decoration-none hover-primary" href="mailto:cindy.berrios02@gmail.com">cindy.berrios02@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column align-items-center p-4 glass-card h-100">
                                        <div className="icon mb-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '50px', height: '50px', fontSize: '1.25rem' }}>
                                            <i className="bi-compass"></i>
                                        </div>
                                        <span className="fw-semibold text-heading mb-1" style={{ color: 'var(--bs-heading-color)' }}>Ubicación</span>
                                        <p className="small text-muted mb-0">Santiago, Región Metropolitana, Chile</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column align-items-center p-4 glass-card h-100">
                                        <div className="icon mb-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '50px', height: '50px', fontSize: '1.25rem' }}>
                                            <i className="bi-phone"></i>
                                        </div>
                                        <span className="fw-semibold text-heading mb-1" style={{ color: 'var(--bs-heading-color)' }}>Llámame</span>
                                        <p className="small text-muted mb-0">+56 (9) 5193 0927</p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider & Collaboration ribbon */}
                            <hr className="my-5 opacity-10" />
                            
                            <h5 className="mb-4 text-heading fw-semibold" style={{ color: 'var(--bs-heading-color)' }}>Colaboremos en estas áreas:</h5>
                            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3 justify-content-center">
                                {expertise.map((item, idx) => (
                                    <div key={idx} className="col">
                                        <div className="p-3 glass-card d-flex flex-column align-items-center justify-content-center h-100 expertise-tooltip-container" style={{ transition: 'all 0.2s', position: 'relative' }}>
                                            <div className="mb-2" style={{ fontSize: '1.35rem' }}>
                                                {item.icon}
                                            </div>
                                            <span style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--px-text)' }}>{item.title}</span>
                                            
                                            {/* Hover Tooltip */}
                                            <div className="expertise-tooltip">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
