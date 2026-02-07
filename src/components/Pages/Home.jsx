import React from 'react'
import Navbar from '../Common/Navbar'
import bgImage from '/assets/bg-image.png'
import Text from '../Homepage/Text'
import Second from '../Homepage/Second'
import Third from '../Homepage/Third'
import Fourth from '../Homepage/Fourth'
import Fifth from '../Homepage/Fifth'
import Footer from '../Common/Footer'

const Home = () => {
    return (
        <div className="w-full">
            <Navbar />

            <section
                className="relative min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >


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
                <Fourth />
            </section>
            <section >
                <Fifth />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Home
