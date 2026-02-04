import React from 'react'
import { FaJava, FaPython, FaAndroid, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiSpringboot, SiAdobecreativecloud } from 'react-icons/si';

function About() {
    return (
        <section id="about" data-scroll-index="1" className="section about-section">
            <div className="container">
                <div className="about-me">
                    <div className="row align-items-start">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <div className="title-01">
                                <span>Acerca de mí</span>
                            </div>
                            <div className="about-me-text pb-5">
                                <h3>Mi nombre es Cindy Berrios</h3>
                                <h5><span>Me dedico al desarrollo</span> de sistemas informáticos</h5>
                                <p>
                                    Soy una persona pro-activa, me encantan los desafios, estar en constante aprendizaje.
                                    Suelo motivar a las personas, me gusta trabajar en equipo y siempre busco la manera de mejorar en lo que hago.
                                    Me dedico al desarrollo de sistemas informáticos, me gusta la programación y el diseño web.
                                    Me gusta la música, el arte y la naturaleza.
                                    Llevo más de siete años en el mundo de la programación y el diseño web.
                                    Ultimamente estoy aprendiendo sobre el desarrollo de aplicaciones móviles, me gusta la idea de poder llevar la tecnología a todas partes.
                                    También estoy culminando un Bootcamp de desarrollo fullstack Java, me gusta la programación en Java y el desarrollo de aplicaciones web.
                                    Y en paralelo estoy terminando mi carrera de Ingeniería en Informática.
                                </p>
                                <ul>Titulada de Diseño y Programación Multimedia (2012)</ul>
                                <ul>Egresada de Analista Programador (2016)</ul>
                                <ul>Culminando Ingeniería en Informática (2024)</ul>

                                <div className="row pt-2">
                                    <div className="col-auto">
                                        <div className="a-count">
                                            <span className="count">25</span>
                                            <div className="a-count-text">Proyectos <br />Completados</div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="a-count">
                                            <span className="count">15</span>
                                            <div className="a-count-text">Clientes <br />Satisfechos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="title-01 mt-5">
                                <span>Experiencia</span>
                            </div>
                            <div className="resume-box">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <span className="time">2020 - Presente</span>
                                        <h5>Desarrolladora Full Stack Independiente</h5>
                                        <p>
                                            Consultor Independiente.
                                            <ul>· Me integro en proyectos de desarrollo web y aplicaciones móviles (Android JetPackCompose)</ul>
                                            <ul>· Me encargo de la creación de sitios web y aplicaciones web</ul>
                                            <ul>· Me encargo de la creación de experiencia de usuario y diseño de interfaces</ul>
                                            <ul>· Me encargo de actualizar sitios web, transformación digital</ul>
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <span className="time">2014 - 2020</span>
                                        <h5>Desarrolladora web y programadora multimedia, encargada de la creación de sitios web y aplicaciones web.</h5>
                                        <h5>Empresa <a href="https://decocasa.cl/">Decocasa.cl</a></h5>
                                        <p>
                                            <ul>Diseñé el sitio web E-commerce de la empresa, el cual generó un aumento en las ventas de un 40%</ul>
                                            <ul>Programé y automatice procesos propios de la empresa, trabajando en conjunto con el área de logística y ventas. (SW trazabilidad de productos en conjunto con logística).</ul>
                                            <ul>Automtización proceso de carga de información de manera optimizada a la plataforma B2B Retail Empresarial (plataforma de carga masiva de productos a través de un portal web Ripley, Falabella, etc).</ul>
                                            <ul>Desarrollé software interno para la optimización de inventario.</ul>
                                            <ul>Estuve a cargo del área de TI, Diseño y Marketing de la empresa</ul>
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <span className="time">2012 - 2013</span>
                                        <h5>Diseñadora web y programadora</h5>
                                        <h5>Empresa <a href="https://doral.cl/">Doral.cl</a></h5>
                                        <p>
                                            <ul>Diseñe sitio web E-commerce corporativo</ul>
                                            <ul>Diseñé sitio web informativo de la empresa</ul>
                                            <ul>Modele en 3D muebles, packaging y productos de la empresa</ul>
                                            <ul>Realice edición de video y sonido para campañas de publicidad</ul>
                                            <ul>Generé campañas de publicidad y marketing digital</ul>
                                            <ul>Estuve de Community Manager</ul>
                                            <ul>Diseñe digitalmente productos para el área textil de la empresa</ul>
                                            <ul>Estuve a cargo de la maquetación en InDesign del catálogo de la empresa</ul>
                                            <ul>Estuve a cargo de todos los procesos que tenían relación con diseño web y programación</ul>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-7 sticky-lg-top ps-xl-5">
                            <div className="row align-items-start">
                                <div className="col-md-7 py-4">
                                    <div className="about-me-img">
                                        <img src="/assets/img/cindy4.jpg" title="" alt="Cindy Berrios" />
                                    </div>
                                </div>
                                <div className="col-md-5 py-4">
                                    <div className="about-content">
                                        <ul>
                                            <li>
                                                <div className="a-icon">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                                <div className="a-text">
                                                    <a className="text-reset stretched-link" href="mailto:cindy.berrios02@gmail.com">E-Mail</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="a-icon">
                                                    <i className="fab fa-whatsapp"></i>
                                                </div>
                                                <div className="a-text">
                                                    <a className="text-reset stretched-link" href="https://wa.me/56951930927?text=Hola%20quiero%20más%20info">WhatsApp</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="a-icon">
                                                    <i className="fab fa-linkedin"></i>
                                                </div>
                                                <div className="a-text">
                                                    <a className="text-reset stretched-link" href="https://www.linkedin.com/in/cindy-berrios-ugarte-376a542a2/">Linkedin</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="a-icon">
                                                    <i className="fa-solid fa-file-pdf"></i>
                                                </div>
                                                <div className="a-text">
                                                    <a className="text-reset stretched-link" href="/assets/img/CV - CBerrios-2026.pdf">Resume</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 py-4">
                                    <div className="title-01">
                                        <span>Technology Stack</span>
                                    </div>
                                    <div className="skills-grid row text-center">
                                        <div className="col-4 col-sm-3 mb-4">
                                            <FaJava size={40} color="#007396" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>Java</h6>
                                        </div>
                                        <div className="col-4 col-sm-3 mb-4">
                                            <FaPython size={40} color="#3776AB" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>Python</h6>
                                        </div>
                                        <div className="col-4 col-sm-3 mb-4">
                                            <FaAndroid size={40} color="#3DDC84" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>Android</h6>
                                        </div>
                                        <div className="col-4 col-sm-3 mb-4">
                                            <SiSpringboot size={40} color="#6DB33F" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>Spring Boot</h6>
                                        </div>
                                        <div className="col-4 col-sm-3 mb-4">
                                            <SiPostgresql size={40} color="#336791" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>PostgreSQL</h6>
                                        </div>
                                        <div className="col-4 col-sm-3 mb-4">
                                            <FaDatabase size={40} color="#00758F" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>SQL</h6>
                                        </div>
                                        <div className="col-4 col-sm-3 mb-4">
                                            <SiMongodb size={40} color="#47A248" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>MongoDB</h6>
                                        </div>
                                        <div className="col-4 col-sm-3 mb-4">
                                            <SiAdobecreativecloud size={40} color="#DA3434" />
                                            <h6 className="mt-2" style={{ fontSize: '0.9rem' }}>Adobe Suite</h6>
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
