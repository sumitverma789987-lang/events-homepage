import React from 'react'
import Header from '../Events/Header'
import Navbar from '../Common/Navbar'
import Eventcards from '../Events/Eventcards'
import Footer from '../Common/Footer'

const Events = () => {
    return (
        <div>
            <section>
                <Navbar
                    bgColor="bg-white/90 shadow-xl"
                    textColor="text-white"
                    scrolledTextColor="text-black"
                />
            </section>
            <section
                className="relative bg-cover flex items-center before:absolute before:inset-0  before:bg-black/50 before:z-0 h-[400px] md:h-[500px]"
                style={{
                    backgroundImage: 'url(/Assets/Header.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top'
                }}
            >
                <div className="relative z-10 flex items-start w-screen pt-8 md:pt-12">
                    <Header />
                </div>
            </section>
            <section>
                <Eventcards />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Events