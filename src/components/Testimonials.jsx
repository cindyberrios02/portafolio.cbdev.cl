import React from 'react'

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Francisco Rocco',
            position: 'Docente - INACAP STGO SUR',
            image: '/assets/img/rocco.jpg',
            relation: 'Francisco dió clases a Cindy',
            text: 'Siendo yo docente de Inacap, siempre noté en Cindy lo inteligente que era como alumna para retener información y administrarla. De eso se trata en carreras especialmente analíticas como las que ha estudiado y que me a sorprendido años después ver el alcance que ha tenido con sus clientes esta cualidad. Sabe mucho de diseño y estándares web, y entiende el trabajo en equipo.'
        },
        {
            id: 2,
            name: 'Alfredo Aravena Flores',
            position: 'Tech Lead - IBM',
            image: '/assets/img/alfredo.jpg',
            relation: 'Alfredo fue compañero de Cindy',
            text: 'Una de las personas que conozco con mayores conocimientos en programación, que no ha parado de actualizarse con todas las novedades que la tecnología nos ofrece'
        },
        {
            id: 3,
            name: 'Luis Ramírez',
            position: 'Apps Dev Programmer Analyst - Citi Bank',
            image: '/assets/img/luis.jpg',
            relation: 'Trabajaron juntos en proyectos',
            text: 'Cindy es una profesional destacada por su proactividad y habilidad para encontrar soluciones creativas a los desafíos. Su enfoque colaborativo y su disposición para ayudar e intercambiar ideas enriquecen cualquier equipo del que forme parte.'
        }
    ];

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-heading">
                    <h3>
                        <span>Recomendaciones</span>
                    </h3>
                </div>
                <div className="owl-carousel" data-items="3" data-nav-dots="true" data-lg-items="3" data-md-items="2" data-sm-items="1.5" data-xs-items="1" data-space="24" data-autoplay="false">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonials-box">
                            <div className="t-lead">
                                <img src={testimonial.image} title="" alt={testimonial.name} />
                            </div>
                            <div className="t-text">
                                <h5>{testimonial.relation}</h5>
                                <p>{testimonial.text}</p>
                                <div className="t-avatar">
                                    <h6>{testimonial.name}</h6>
                                    <span>{testimonial.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
