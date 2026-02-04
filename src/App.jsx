import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    useEffect(() => {
        // Load external scripts
        const scripts = [
            '/assets/js/jquery-3.5.1.min.js',
            '/assets/vendor/appear/jquery.appear.js',
            '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
            '/assets/vendor/one-page/scrollIt.min.js',
            '/assets/js/custom.js',
            '/assets/js/dark-light.js'
        ];

        const loadedScripts = [];

        scripts.forEach((src) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            document.body.appendChild(script);
            loadedScripts.push(script);
        });

        return () => {
            loadedScripts.forEach(script => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
        };
    }, []);

    return (
        <>
            <Header />
            <main className="wrapper">
                <div className="bg-effect-img" style={{ backgroundImage: 'url(/assets/img/bg-effect-1.png)' }}>
                    <div className="marquee">
                        <h2>Cindy Berrios</h2> <h2>Cindy Berrios</h2>
                    </div>
                </div>
                <Home />
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
