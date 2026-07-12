import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
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
                <Portfolio />
                <Testimonials />
                <Contact />
                <Footer />
            </main>
        </>
    )
}

export default App
