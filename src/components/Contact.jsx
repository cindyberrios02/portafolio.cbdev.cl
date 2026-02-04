import React from 'react'

function Contact() {
    return (
        <section id="contactus" data-scroll-index="4" className="section contactus-section">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-5 d-flex">
                        <div className="d-flex flex-column w-100">
                            <div className="contact-info">
                                <h3>Hablemos de tu proyecto</h3>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="bi-chat-left-dots-fill"></i>
                                        </div>
                                        <div className="text">
                                            <label>Escríbeme</label>
                                            <p>Apenas pueda te responderé <span><a className="text-reset" href="mailto:cindy.berrios02@gmail.com">cindy.berrios02@gmail.com</a></span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="bi-compass"></i>
                                        </div>
                                        <div className="text">
                                            <label>Estoy ubicada</label>
                                            <p>Santiago de Chile <span>Región Metropolitana <br />Chile</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="bi-phone"></i>
                                        </div>
                                        <div className="text">
                                            <label>Llámame</label>
                                            <p>Lun - Vier 10 am a 18 pm <span>+56 (9) 5193 0927</span></p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="google-map mt-5">
                                    <div className="ratio ratio-21x9">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426001.56060475745!2d-70.95948568658913!3d-33.47177876593578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1732644239339!5m2!1ses!2scl"
                                            width="600"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 ps-xl-5">
                        <div className="contact-form">
                            <div className="contact-head">
                                <h4>¿Tienes ideas? Te puedo ayudar con mis habilidades. Trabajemos en equipo.</h4>
                                <p>Cuentame más sobre ti y lo que tienes en mente.</p>
                            </div>
                            <form id="contact-form" method="POST">
                                <div className="row gx-3 gy-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Nombre</label>
                                            <input name="Name" id="name" placeholder="Nombre *" className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label">Asunto</label>
                                            <input name="Subject" id="subject" placeholder="Asunto *" className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Mensaje</label>
                                            <textarea name="message" id="message" placeholder="Mensaje *" rows="4" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button className="px-btn w-100" type="button" value="Send">Enviar mensaje</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
