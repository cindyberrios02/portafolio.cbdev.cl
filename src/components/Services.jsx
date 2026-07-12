import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaLayerGroup, FaPaintBrush, FaRobot } from 'react-icons/fa'

function Services() {
    const expertise = [
        {
            icon: <FaLayerGroup className="fs-3 text-primary" />,
            title: 'Desarrollo Backend',
            description: 'Construcción de arquitecturas robustas y escalables. Experta en Java y Spring Boot para la creación de APIs REST estructuradas, persistencia de datos y desarrollo de lógica de negocio bajo principios SOLID y Clean Architecture.'
        },
        {
            icon: <FaMobileAlt className="fs-3 text-cyan" style={{ color: 'var(--neon-cyan)' }} />,
            title: 'Desarrollo Móvil Android',
            description: 'Creación de aplicaciones nativas en Android utilizando Jetpack Compose y Kotlin. Enfoque en la implementación de patrones de arquitectura como MVVM, interfaces reactivas modernas y consumo optimizado de servicios web.'
        },
        {
            icon: <FaLaptopCode className="fs-3 text-primary" />,
            title: 'Desarrollo Frontend',
            description: 'Creación de interfaces web altamente responsivas y amigables. Experiencia utilizando React.js y Javascript moderno para dar vida a diseños visuales dinámicos que se comunican de forma transparente con el backend.'
        },
        {
            icon: <FaDatabase className="fs-3 text-cyan" style={{ color: 'var(--neon-cyan)' }} />,
            title: 'Bases de Datos & SQL',
            description: 'Modelado, normalización y optimización de bases de datos relacionales (PostgreSQL, SQL Server) y no relacionales (MongoDB). Escritura de consultas complejas y optimización de rendimiento de almacenamiento.'
        },
        {
            icon: <FaPaintBrush className="fs-3 text-primary" />,
            title: 'Diseño & Multimedia',
            description: 'Mi formación original en Diseño y Programación Multimedia me permite entender a fondo la experiencia de usuario (UX) y diseñar interfaces (UI) hermosas y funcionales utilizando herramientas de Adobe Suite.'
        },
        {
            icon: <FaRobot className="fs-3 text-cyan" style={{ color: 'var(--neon-cyan)' }} />,
            title: 'Automatización & Scripting',
            description: 'Creación de herramientas internas para agilizar procesos de negocio. Programación de scripts en Python para automatizar tareas repetitivas de alta fricción, como la carga y sincronización de datos masivos B2B.'
        }
    ];

    return (
        <section id="services" data-scroll-index="2" className="section services-section position-relative py-5">
            {/* Ambient Background Glowing Effects */}
            <div className="bg-effect-glow" style={{ top: '30%', right: '5%' }}></div>
            
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="section-heading text-center mb-5">
                    <span className="text-uppercase tracking-wider fw-bold text-primary mb-2 d-block" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                        Mis Competencias
                    </span>
                    <h3 className="h2 fw-bold">
                        Áreas de Expertise
                    </h3>
                    <p className="text-muted col-lg-6 mx-auto mt-2" style={{ fontSize: '0.95rem' }}>
                        Habilidades y tecnologías clave que aplico para resolver problemas y construir productos digitales de alta calidad.
                    </p>
                </div>
                
                <div className="bento-grid">
                    {expertise.map((item, index) => (
                        <div key={index} className="bento-card">
                            <div className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 rounded-3 mb-4" style={{ width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                {item.icon}
                            </div>
                            <h5 className="fw-bold mb-3" style={{ fontSize: '1.15rem' }}>{item.title}</h5>
                            <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
