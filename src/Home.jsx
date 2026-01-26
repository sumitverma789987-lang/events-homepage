import React from 'react'
import Navbar from './components/navbar'
import bgImage from '/assets/bg-image.png'
import Text from './components/Text'
import Second from './components/Second'
import Third from './components/Third'

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
        </div>
    )
}

export default Home
