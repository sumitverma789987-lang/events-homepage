import React from 'react'
import First from '../Secondpage/First'
import Navbar from '../Common/Navbar'
import Gallery from '../Secondpage/Gallery'
import Comments from '../Secondpage/Comments'
import Footer from '../common/Footer'



const Username = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <section>
          <First/>
      </section>
      <section>
        <Gallery/>
      </section>
      <section className='px-10'>
        <Comments/>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Username