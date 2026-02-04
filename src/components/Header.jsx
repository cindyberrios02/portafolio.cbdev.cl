import React from 'react'

function Header() {
    return (
        <>
            {/* Header Top - Mobile */}
            <header className="main-header d-lg-none">
                <div className="container">
                    <div className="logo">
                        <a className="navbar-brand" href="#">
                            <img className="logo-dark" title="" alt="" src="/assets/img/logo03.png" />
                            <img className="logo-light" title="" alt="" src="/assets/img/logo02.png" />
                        </a>
                    </div>
                    <div className="ms-auto">
                        <button className="toggler-menu">
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar Navigation */}
            <div className="header-left-fixed one-page-nav">
                <div className="logo">
                    <a className="navbar-brand" href="#">
                        <img className="logo-dark" title="" alt="" src="/assets/img/logo03.png" />
                        <img className="logo-light" title="" alt="" src="/assets/img/logo02.png" />
                    </a>
                </div>

                <ul className="main-menu">
                    <li>
                        <a data-scroll-nav="0" href="#home">
                            <span className="m-icon">
                                <i className="bi-house-door"></i>
                            </span>
                            <span className="m-text">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a data-scroll-nav="1" href="#about">
                            <span className="m-icon">
                                <i className="bi-person"></i>
                            </span>
                            <span className="m-text">Cindy Berrios</span>
                        </a>
                    </li>
                    <li>
                        <a data-scroll-nav="2" href="#services">
                            <span className="m-icon">
                                <i className="bi-briefcase"></i>
                            </span>
                            <span className="m-text">Servicios</span>
                        </a>
                    </li>
                    <li>
                        <a data-scroll-nav="3" href="#portfolio">
                            <span className="m-icon">
                                <i className="bi-columns"></i>
                            </span>
                            <span className="m-text">Portafolio</span>
                        </a>
                    </li>
                    <li>
                        <a data-scroll-nav="4" href="#contactus">
                            <span className="m-icon">
                                <i className="bi-telephone"></i>
                            </span>
                            <span className="m-text">Contacto</span>
                        </a>
                    </li>
                </ul>

                {/* Theme Switcher */}
                <div className="theme-btn dropdown">
                    <button className="btn dropdown-toggle" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
                        <span className="bi my-1 theme-icon-active">
                            <i className="bi-circle-half"></i>
                        </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme" style={{ '--bs-dropdown-min-width': '8rem' }}>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-sun-fill"></i>
                                </span>
                                Tema Claro
                                <span className="bi ms-auto d-none">
                                    <i className="bi-check2"></i>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-moon-stars-fill"></i>
                                </span>
                                Tema Oscuro
                                <span className="bi ms-auto d-none">
                                    <i className="bi-check2"></i>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto">
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-circle-half"></i>
                                </span>
                                Auto
                                <span className="bi ms-auto d-none">
                                    <i className="bi-check2"></i>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
