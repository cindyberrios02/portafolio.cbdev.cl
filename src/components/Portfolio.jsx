import React from 'react'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'MockUp App Movil',
            category: 'Seguridad Ciudadana',
            image: '/assets/img/app-movil-seguridad.jpg'
        },
        {
            id: 2,
            title: 'Mobile App Design',
            category: 'Mobile App, App Design',
            image: '/assets/img/interfaz-web-cecosf001.jpg'
        },
        {
            id: 3,
            title: 'Mobile App Design',
            category: 'Mobile App, App Design',
            image: '/assets/img/totem.jpg'
        },
        {
            id: 4,
            title: 'Mobile App Design',
            category: 'Mobile App, App Design',
            image: '/assets/img/comunidad.jpg'
        },
        {
            id: 5,
            title: 'Mobile App Design',
            category: 'Mobile App, App Design',
            image: '/assets/img/infografia-ods.jpg'
        },
        {
            id: 6,
            title: 'Mobile App Design',
            category: 'Mobile App, App Design',
            image: '/assets/img/exequiel--02.jpg'
        }
    ];

    return (
        <section id="portfolio" data-scroll-index="3" className="section portfolio-section">
            <div className="container">
                <div className="section-heading">
                    <h3>
                        <span>Mi Portafolio</span>
                    </h3>
                </div>
                <div className="lightbox-gallery">
                    <div className="row g-3 g-lg-4 portfolio-content">
                        {projects.map((project) => (
                            <div key={project.id} className="col-sm-6 col-lg-4 grid-item">
                                <div className="portfolio-box">
                                    <div className="portfolio-text">
                                        <h6>{project.title}</h6>
                                        <p>{project.category}</p>
                                        <a className="gallery-link" href={project.image}>
                                            <i className="bi-arrow-up-right-circle"></i>
                                        </a>
                                    </div>
                                    <div className="portfolio-img">
                                        <img src={project.image} title="" alt="" />
                                        <a className="px_modal portfolio-modal-link" href="#project_1">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
