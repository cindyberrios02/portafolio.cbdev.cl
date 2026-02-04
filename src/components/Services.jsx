import React from 'react'

function Services() {
    const services = [
        {
            icon: 'bi-phone',
            title: 'Diseño Web Responsivo',
            description: 'Mi enfoque en el diseño web va más allá de lo estético. He aprendido a crear experiencias que se adaptan fluidamente a cualquier dispositivo, entendiendo que cada píxel cuenta. Abordo cada proyecto estudiando primero las necesidades del usuario, asegurando que la navegación sea intuitiva y accesible.'
        },
        {
            icon: 'bi-laptop',
            title: 'Desarrollo Android',
            description: 'El mundo móvil avanza rápido, y yo con él. Aprendí desarrollo Android "haciendo", enfrentando desafíos reales y superándolos. Me mantengo a la vanguardia con tecnologías como Jetpack Compose, porque creo que la mejor forma de aprender es construyendo soluciones que la gente usa en su día a día.'
        },
        {
            icon: 'bi-layers',
            title: 'Desarrollo Full Stack',
            description: 'Como desarrolladora Full Stack, tengo una visión holística del software. Desde la arquitectura en el backend con Java o Python hasta la interfaz en el frontend. He aprendido a integrar estas partes armónicamente, entendiendo que un gran sistema es la suma de componentes bien orquestados.'
        },
        {
            icon: 'bi-columns',
            title: 'Transformación Digital',
            description: 'Ayudo a las empresas a modernizarse no solo adoptando tecnología, sino cambiando su mentalidad. Mi experiencia me ha enseñado a identificar procesos manuales ineficientes y transformarlos en flujos digitales optimizados, aportando valor real y agilidad al negocio.'
        },
        {
            icon: 'bi-bar-chart',
            title: 'Análisis de Datos',
            description: 'Los datos cuentan historias si sabes escucharlos. He desarrollado la capacidad de analizar grandes volúmenes de información para extraer insights valiosos. Mi enfoque es transformar números fríos en estrategias claras que respalden la toma de decisiones informadas.'
        },
        {
            icon: 'bi-globe2',
            title: 'Metodologías Ágiles',
            description: 'Creo firmemente en la colaboración y la mejora continua. Trabajar con metodologías ágiles como Scrum me ha enseñado a ser flexible y a entregar valor de manera incremental. La comunicación constante y la adaptabilidad son claves en mi forma de liderar y contribuir a los proyectos.'
        }
    ];

    return (
        <section id="services" data-scroll-index="2" className="section services-section">
            <div className="container">
                <div className="section-heading">
                    <h3>
                        <span>Mis servicios</span>
                    </h3>
                </div>
                <div className="row gy-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-sm-6 col-lg-4">
                            <div className="feature-box-01">
                                <div className="icon"><i className={`bi ${service.icon}`}></i></div>
                                <div className="feature-content">
                                    <h5>{service.title}</h5>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
