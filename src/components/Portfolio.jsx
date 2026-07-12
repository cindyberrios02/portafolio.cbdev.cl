import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Trazabilidad Logística Interna',
            category: 'Desarrollo Backend',
            description: 'Software corporativo desarrollado en conjunto con el área de logística de Decocasa.cl para la optimización de inventarios y trazabilidad de productos en tiempo real.',
            tags: ['Java', 'SQL Server', 'JDBC', 'Swing'],
            image: '/assets/img/totem.jpg',
            github: 'https://github.com/cindyberrios02/trazabilidad-logistica'
        },
        {
            id: 2,
            title: 'Automatizador Carga Masiva B2B',
            category: 'Scripting & Automatización',
            description: 'Script automatizado en Python que procesa masivamente catálogos de productos y los sincroniza de manera óptima en los portales B2B de grandes tiendas retail (Falabella, Ripley, etc.).',
            tags: ['Python', 'Pandas', 'Web Scraping', 'Excel API'],
            image: '/assets/img/exequiel--02.jpg',
            github: 'https://github.com/cindyberrios02/b2b-retail-automation'
        },
        {
            id: 3,
            title: 'App Seguridad Ciudadana Compose',
            category: 'Desarrollo Móvil Android',
            description: 'Aplicación móvil prototipo para seguridad ciudadana, con alertas comunitarias y mapa interactivo. Desarrollada con Kotlin, Jetpack Compose y consumo de APIs.',
            tags: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Maps API'],
            image: '/assets/img/app-movil-seguridad.jpg',
            github: 'https://github.com/cindyberrios02/seguridad-ciudadana-compose'
        },
        {
            id: 4,
            title: 'Plataforma E-Commerce Decocasa',
            category: 'Desarrollo Web Full Stack',
            description: 'Desarrollo de plataforma de comercio electrónico a la medida, automatizando pedidos e inventarios. Logró un incremento del 40% en las ventas de la compañía.',
            tags: ['PHP', 'JavaScript', 'MySQL', 'CSS3', 'HTML5'],
            image: '/assets/img/decocasa.jpg',
            github: 'https://github.com/cindyberrios02/ecommerce-decocasa',
            link: 'https://www.decocasa.cl'
        },
        {
            id: 5,
            title: 'Sitio Web E-Commerce Doral',
            category: 'Desarrollo Web & Diseño 3D',
            description: 'Rediseño completo de la tienda en línea corporativa, incorporando modelados 3D interactivos de muebles y automatización en la maquetación del catálogo digital.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Blender 3D'],
            image: '/assets/img/doral.jpg',
            github: 'https://github.com/cindyberrios02/ecommerce-doral',
            link: 'https://www.doral.cl'
        },
        {
            id: 6,
            title: 'Plataforma Marketprime',
            category: 'Desarrollo Web Full Stack',
            description: 'Desarrollo de tienda en línea y panel de administración, incluyendo pasarela de pagos integrada y gestión de inventario automatizado.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB'],
            image: '/assets/img/marketprime.jpg',
            github: 'https://github.com/cindyberrios02/marketprime-ecommerce',
            link: 'https://www.marketprime.cl'
        }
    ];

    return (
        <section id="portfolio" data-scroll-index="2" className="section portfolio-section position-relative py-5">
            {/* Ambient Background Glowing Effects */}
            <div className="bg-effect-glow-cyan" style={{ top: '10%', left: '5%' }}></div>
            
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="section-heading text-center mb-5">
                    <span className="text-uppercase tracking-wider fw-bold text-primary mb-2 d-block" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                        Mis Proyectos
                    </span>
                    <h3 className="h2 fw-bold">
                        Portafolio Técnico
                    </h3>
                    <p className="text-muted col-lg-6 mx-auto mt-2" style={{ fontSize: '0.95rem' }}>
                        Una selección de proyectos que demuestran mi capacidad para resolver problemas complejos de negocio mediante código y diseño de calidad.
                    </p>
                </div>
                
                <div className="row g-4 justify-content-center">
                    {projects.map((project) => (
                        <div key={project.id} className="col-md-6 col-lg-4 d-flex">
                            <div className="project-card-glass w-100">
                                <div className="project-card-image">
                                    <img src={project.image} title={project.title} alt={project.title} />
                                </div>
                                <div className="project-card-info d-flex flex-column flex-grow-1">
                                    <span className="text-primary small fw-semibold text-uppercase tracking-wider mb-1" style={{ fontSize: '0.75rem' }}>
                                        {project.category}
                                    </span>
                                    <h5 className="project-card-title">{project.title}</h5>
                                    <p className="project-card-desc">{project.description}</p>
                                    
                                    <div className="project-tags mt-auto mb-4">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="tech-badge">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="project-links d-flex gap-2">
                                        {project.github && (
                                            <a className="btn-project btn-project-secondary" href={project.github} target="_blank" rel="noopener noreferrer" title="Ver código en GitHub">
                                                <FaGithub /> Código
                                            </a>
                                        )}
                                        {project.link && (
                                            <a className="btn-project btn-project-primary" href={project.link} target="_blank" rel="noopener noreferrer" title="Visitar demostración en vivo">
                                                <FaExternalLinkAlt /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
