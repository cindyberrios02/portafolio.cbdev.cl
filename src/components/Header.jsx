import React, { useEffect, useState } from 'react'

function Header() {
    const [theme, setThemeState] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme || 'dark'; // Default to dark!
    });

    const applyTheme = (newTheme) => {
        if (newTheme === 'auto') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-bs-theme', systemTheme);
        } else {
            document.documentElement.setAttribute('data-bs-theme', newTheme);
        }
        localStorage.setItem('theme', newTheme);
        setThemeState(newTheme);
    };

    useEffect(() => {
        applyTheme(theme);
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (localStorage.getItem('theme') === 'auto') {
                applyTheme('auto');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const getIconClass = (t) => {
        if (t === 'light') return 'bi-sun-fill';
        if (t === 'dark') return 'bi-moon-stars-fill';
        return 'bi-circle-half';
    };
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
                        <a data-scroll-nav="2" href="#portfolio">
                            <span className="m-icon">
                                <i className="bi-columns"></i>
                            </span>
                            <span className="m-text">Portafolio</span>
                        </a>
                    </li>
                    <li>
                        <a data-scroll-nav="3" href="#contactus">
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
                            <i className={getIconClass(theme)}></i>
                        </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme" style={{ '--bs-dropdown-min-width': '8rem' }}>
                        <li>
                            <button 
                                type="button" 
                                className={`dropdown-item d-flex align-items-center ${theme === 'light' ? 'active' : ''}`}
                                onClick={() => applyTheme('light')}
                            >
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-sun-fill"></i>
                                </span>
                                Tema Claro
                                {theme === 'light' && (
                                    <span className="bi ms-auto">
                                        <i className="bi-check2"></i>
                                    </span>
                                )}
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                className={`dropdown-item d-flex align-items-center ${theme === 'dark' ? 'active' : ''}`}
                                onClick={() => applyTheme('dark')}
                            >
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-moon-stars-fill"></i>
                                </span>
                                Tema Oscuro
                                {theme === 'dark' && (
                                    <span className="bi ms-auto">
                                        <i className="bi-check2"></i>
                                    </span>
                                )}
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                className={`dropdown-item d-flex align-items-center ${theme === 'auto' ? 'active' : ''}`}
                                onClick={() => applyTheme('auto')}
                            >
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-circle-half"></i>
                                </span>
                                Auto
                                {theme === 'auto' && (
                                    <span className="bi ms-auto">
                                        <i className="bi-check2"></i>
                                    </span>
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
