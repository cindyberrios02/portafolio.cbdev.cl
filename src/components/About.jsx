import React from 'react'
import { FaJava, FaPython, FaAndroid, FaDatabase, FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiSpringboot, SiAdobecreativecloud } from 'react-icons/si';

function About() {
    return (
        <section id="about" data-scroll-index="1" className="section about-section position-relative py-5">
            <div className="container">
                <div className="about-me">
                    <div className="row align-items-start gy-5">
                        
                        {/* Left Column: Biography & Timeline */}
                        <div className="col-lg-7 pr-lg-5">
                            <div className="title-01 mb-4">
                                <span className="text-uppercase tracking-wider fw-bold text-primary" style={{ letterSpacing: '1px' }}>Sobre Mí</span>
                            </div>
                            
                            <div className="about-me-text mb-5">
                                <h3 className="h2 fw-bold mb-3">Mi nombre es Cindy Berrios</h3>
                                <h5 className="h5 text-primary mb-4">Desarrolladora de Software & Especialista en Multimedia</h5>
                                <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                                    Soy una profesional proactiva y apasionada por la resolución de problemas lógicos y visuales. A lo largo de mi carrera, he transitado desde la creación multimedia y el diseño web hacia el desarrollo de backend robusto y aplicaciones móviles nativas. 
                                    Mi enfoque actual está centrado en la creación de arquitecturas limpias y mantenibles, especializándome en tecnologías como Java (Spring Boot) y Android (Jetpack Compose).
                                </p>
                                
                                <div className="glass-card mb-4">
                                    <div className="card-body p-3">
                                        <h6 className="fw-semibold mb-3">Formación y Títulos:</h6>
                                        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted" style={{ fontSize: '0.9rem' }}>
                                            <li className="d-flex align-items-center gap-2">
                                                <i className="bi-bookmark-star text-primary"></i>
                                                <span>Ingeniería en Informática <strong>(2026)</strong></span>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <i className="bi-mortarboard text-secondary"></i>
                                                <span>Analista Programador <strong>(Egresada - 2016)</strong></span>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <i className="bi-mortarboard text-secondary"></i>
                                                <span>Diseño y Programación Multimedia <strong>(Titulada - 2012)</strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5 border-secondary border-opacity-25" />

                            <div className="title-01 mb-4">
                                <span className="text-uppercase tracking-wider fw-bold text-primary" style={{ letterSpacing: '1px' }}>Trayectoria Profesional</span>
                            </div>
                            
                            <div className="custom-timeline">
                                <div className="timeline-item">
                                    <span className="timeline-date">2020 - Presente</span>
                                    <h5 className="fw-bold mb-1">Desarrolladora Full Stack Independiente</h5>
                                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                                        Consultoría técnica e integración en proyectos web a gran escala y aplicaciones móviles utilizando Android (Jetpack Compose). Especializada en optimización de bases de datos y creación de experiencias de usuario interactivas.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-date">2014 - 2020</span>
                                    <h5 className="fw-bold mb-1">Desarrolladora Web & Programadora Multimedia</h5>
                                    <h6 className="small text-primary mb-2">Decocasa.cl</h6>
                                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                                        Diseñé e implementé la plataforma e-commerce de la empresa (+40% de aumento en ventas). Programé y automaticé procesos críticos como la carga de productos masivos B2B a grandes portales de retail (Falabella, Ripley) y desarrollé el software interno de trazabilidad para logística.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <span className="timeline-date">2012 - 2013</span>
                                    <h5 className="fw-bold mb-1">Diseñadora Web & Programadora</h5>
                                    <h6 className="small text-primary mb-2">Doral.cl</h6>
                                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                                        Lideré el diseño del sitio web corporativo y la maquetación interactiva. Realicé modelado 3D de mobiliario y empaques, así como producción y edición de video publicitario corporativo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Profile Image, Quick Connect & Tech Stack */}
                        <div className="col-lg-5 ps-lg-5 about-sticky-sidebar" style={{ paddingBottom: '10px' }}>
                            <div className="glass-card overflow-hidden shadow-lg p-3">
                                <div className="row align-items-center gy-3">
                                    <div className="col-sm-4 col-lg-12 text-center text-sm-start text-lg-center">
                                        <div className="about-me-img d-inline-block rounded-circle overflow-hidden border border-secondary border-opacity-25" style={{ width: '90px', height: '90px' }}>
                                            <img src="/assets/img/cindy.jpg" className="w-100 h-100 object-fit-cover" alt="Cindy Berrios" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-lg-12">
                                        <div className="about-content">
                                            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}>
                                                        <FaEnvelope />
                                                    </div>
                                                    <a className="text-reset text-decoration-none small text-muted hover-primary" style={{ fontSize: '0.85rem' }} href="mailto:cindy.berrios02@gmail.com">cindy.berrios02@gmail.com</a>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <div className="bg-secondary bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', fontSize: '0.8rem', color: 'var(--bs-heading-color)' }}>
                                                        <FaGithub />
                                                    </div>
                                                    <a className="text-reset text-decoration-none small text-muted hover-primary" style={{ fontSize: '0.85rem' }} href="https://github.com/cindyberrios02" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <div className="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}>
                                                        <FaLinkedin />
                                                    </div>
                                                    <a className="text-reset text-decoration-none small text-muted hover-primary" style={{ fontSize: '0.85rem' }} href="https://www.linkedin.com/in/cindy-berrios-ugarte-376a542a2/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}>
                                                        <FaFilePdf />
                                                    </div>
                                                    <a className="text-reset text-decoration-none small text-muted hover-primary" style={{ fontSize: '0.85rem' }} href="/assets/img/CV - CBerrios-2026.pdf" target="_blank" rel="noopener noreferrer">Descargar Currículum (PDF)</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 mt-3">
                                        <div className="title-01 mb-2">
                                            <span className="text-uppercase tracking-wider fw-bold text-primary" style={{ fontSize: '0.75rem' }}>Stack de Tecnologías</span>
                                        </div>
                                        <div className="row g-2 text-center">
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <FaJava size={20} color="#f89820" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>Java</div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <SiSpringboot size={20} color="#6DB33F" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>Spring</div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <FaAndroid size={20} color="#3DDC84" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>Android</div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <FaPython size={20} color="#3776AB" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>Python</div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <SiPostgresql size={20} color="#336791" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>Postgres</div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <FaDatabase size={20} color="#00758F" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>SQL</div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <SiMongodb size={20} color="#47A248" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>MongoDB</div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-4 col-lg-3">
                                                <div className="p-1.5 bg-secondary bg-opacity-10 rounded border border-secondary border-opacity-10">
                                                    <SiAdobecreativecloud size={20} color="#DA3434" />
                                                    <div className="mt-1" style={{ fontSize: '0.7rem', fontWeight: '500' }}>Adobe</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
