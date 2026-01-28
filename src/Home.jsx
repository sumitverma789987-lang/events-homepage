import React from 'react'
import Navbar from './components/Navbar'
import bgImage from '/assets/bg-image.png'
import Text from './components/Text'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Footer from './components/Footer'

const Home = () => {
    return (
        <div className="w-full">

            <section
                className="relative min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <Navbar />

                <div className="absolute inset-0 bg-black/50" />


                <div className="relative z-10 flex min-h-screen">
                    <Text />
                </div>
            </section>


            <section className="min-h-screen">
                <Second />
            </section>
            <section >
                <Third />
            </section>
            <section >
               <Fourth/>
            </section>
            <section >
                <Fifth />
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    )
}

export default Home
