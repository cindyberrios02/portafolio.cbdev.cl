import React, { useState, useEffect } from 'react'

const TypingEffect = () => {
    const strings = [
        "Desarrolladora FullStack",
        "Desarrolladora Mobile",
        "Ingeniera en Informática",
        "Diseñadora Multimedia"
    ];
    
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const handleType = () => {
            const currentString = strings[currentIndex];
            
            if (!isDeleting) {
                setCurrentText(currentString.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                setTypingSpeed(75); // Speed of typing

                if (charIndex + 1 === currentString.length) {
                    setTypingSpeed(2000); // Pause at end of word
                    setIsDeleting(true);
                }
            } else {
                setCurrentText(currentString.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                setTypingSpeed(40); // Speed of deleting

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setCurrentIndex(prev => (prev + 1) % strings.length);
                    setTypingSpeed(300); // Pause before next word
                }
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, currentIndex, typingSpeed]);

    return (
        <span className="text-primary fw-semibold">
            {currentText}
            <span className="typing-cursor">|</span>
        </span>
    );
};

function Home() {
    return (
        <section id="home" data-scroll-index="0" className="home-section-custom position-relative overflow-hidden">
            {/* Ambient Background Glowing Effects */}
            <div className="bg-effect-glow" style={{ top: '10%', left: '5%' }}></div>
            <div className="bg-effect-glow-cyan" style={{ bottom: '20%', right: '10%' }}></div>
            
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row align-items-center justify-content-between">
                    {/* Intro Details */}
                    <div className="col-lg-6 col-xl-5 text-center text-lg-start mb-5 mb-lg-0">
                        <div className="hero-intro">
                            <span className="text-uppercase tracking-wider fw-bold text-primary mb-2 d-block" style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>
                                Hola, mi nombre es
                            </span>
                            <h1 className="display-4 fw-bold mb-3">
                                Cindy Berrios
                            </h1>
                            <h2 className="h4 mb-4 fw-medium text-secondary">
                                Soy una <TypingEffect />
                            </h2>
                            <p className="lead mb-4 text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                                Especializada en el diseño y desarrollo de sistemas informáticos robustos, escalables y visualmente atractivos. Combino la rigurosidad de la Ingeniería en Informática con mi background en Programación Multimedia para construir software con excelente experiencia de usuario.
                            </p>
                            
                            {/* Call to Actions */}
                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                                <a href="#portfolio" className="btn btn-primary px-4 py-2.5 fw-semibold d-inline-flex align-items-center gap-2">
                                    Ver Proyectos <i className="bi-arrow-right"></i>
                                </a>
                                <a href="/assets/img/CV - CBerrios-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary px-4 py-2.5 fw-semibold d-inline-flex align-items-center gap-2">
                                    <i className="bi-file-earmark-pdf"></i> Descargar CV
                                </a>
                            </div>

                            {/* Social Media Links */}
                            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start">
                                <span className="text-muted small text-uppercase fw-semibold" style={{ letterSpacing: '1px' }}>Conectar:</span>
                                <ul className="custom-social-links">
                                    <li>
                                        <a href="https://www.linkedin.com/in/cindy-berrios-ugarte-376a542a2/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/cindyberrios02" target="_blank" rel="noopener noreferrer" title="GitHub">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:cindy.berrios02@gmail.com" title="Email">
                                            <i className="fa fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Developer Terminal Widget */}
                    <div className="col-lg-6 col-xl-6 ps-lg-5">
                        <div className="terminal-box">
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <span className="terminal-dot red"></span>
                                    <span className="terminal-dot yellow"></span>
                                    <span className="terminal-dot green"></span>
                                </div>
                                <span className="terminal-title">cindy-berrios.json</span>
                            </div>
                            <div className="terminal-body text-start">
                                <div className="terminal-line">
                                    <span className="terminal-keyword">const</span> <span style={{ color: '#818cf8' }}>developer</span> = &#123;
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;nombre: <span className="terminal-string">"Cindy Berrios"</span>,
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;titulo: <span className="terminal-string">"Full Stack &amp; Mobile Developer"</span>,
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;tecnologias: [
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal-string">"Java"</span>, <span className="terminal-string">"Spring Boot"</span>, <span className="terminal-string">"Android (Compose)"</span>,
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal-string">"Python"</span>, <span className="terminal-string">"PostgreSQL"</span>, <span className="terminal-string">"MongoDB"</span>, <span className="terminal-string">"React"</span>
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;],
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;educacion: <span className="terminal-string">"Ingeniería en Informática"</span>,
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;enfoque: <span className="terminal-string">"Clean Code &amp; Great User Experience"</span>,
                                </div>
                                <div className="terminal-line">
                                    &nbsp;&nbsp;estado: <span className="terminal-string">"Buscando desafíos profesionales"</span>
                                </div>
                                <div className="terminal-line">
                                    &#125;;
                                </div>
                                <div className="terminal-line mt-3">
                                    <span className="terminal-prompt">&gt;</span> <span style={{ color: '#34d399' }}>developer.getSummary()</span>
                                </div>
                                <div className="terminal-line" style={{ color: '#e2e8f0' }}>
                                    <span className="terminal-comment">"Desarrolladora con 7+ años de experiencia intermedia en soluciones web y multimedia. Apasionada por construir software robusto que genera valor de negocio inmediato."</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
