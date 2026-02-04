import React, { useEffect } from 'react'

function Home() {
    useEffect(() => {
        // Initialize TypeIt animation when available
        if (window.TypeIt) {
            new window.TypeIt("#type-it", {
                speed: 100,
                loop: true,
                strings: [
                    "Desarrolladora Full Stack",
                    "Diseñadora Web",
                    "Programadora Multimedia"
                ],
                breakLines: false,
                waitUntilVisible: true,
            }).go();
        }
    }, []);

    return (
        <section id="home" data-scroll-index="0" className="home-section-03">
            <div className="container position-relative">
                <div className="row align-items-center min-vh-100 justify-content-center">
                    <div className="col-lg-6">
                        <div className="home-image">
                            <div className="home-image-in">
                                <img src="/assets/img/cindy.jpg" title="" alt="" />
                            </div>
                        </div>

                        <div className="home-intro">
                            <h1>Cindy Berrios</h1>
                            <h2>Soy una <span id="type-it"></span></h2>
                            <ul className="nav social-link">
                                <li>
                                    <a href="https://www.linkedin.com/in/cindy-berrios-ugarte-376a542a2/"><i className="fab fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/cindyberrios02"><i className="fab fa-github"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-discord"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
