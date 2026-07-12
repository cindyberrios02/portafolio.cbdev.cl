import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="footer-avatar">
                        <img src="/assets/img/hackerman.jpg" title="" alt="Cindy Berrios" />
                    </div>
                    <h6>Cindy Berrios</h6>
                </div>
                <ul className="nav social-link">
                    <li>
                        <a href="https://github.com/cindyberrios02"><i className="fab fa-github"></i></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/cindy-berrios-ugarte-376a542a2/"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://wa.me/56951930927?text=Hola%20quiero%20más%20info"><i className="fab fa-whatsapp"></i></a>
                    </li>
                </ul>
                <p className="copyright">© 2026 todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
