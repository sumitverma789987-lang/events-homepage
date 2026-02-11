import React from 'react'
import bgimage from '/Assets/Header.png'
import Header from '../Events/Header'
import Navbar from '../Common/Navbar'
import Eventcards from '../Events/Eventcards'

const Events = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section
                className="relative bg-contain h-[400px] md:h-[500px]" // Set specific height
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top'
                }}
            >
                <div className="relative z-10 flex items-start pt-8 md:pt-12">
                    <Header />
                </div>
            </section>
            <section>
                <Eventcards/>
            </section>
        </div>
    )
}

export default Events