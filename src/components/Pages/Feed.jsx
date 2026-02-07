import React from 'react'
import Profile from '../Feed/Profile'
import Navbar from '../Common/Navbar'
import Newpost from '../Feed/Newpost'
import Footer from '../Common/Footer'


const Feed = () => {
    return (
      
        <div>
            <section>
                <Navbar/>
            </section>
            <section>
                <Profile />
            </section>
            <section className='flex items-center justify-center'>
                <Newpost/>
            </section>
          

            <section>
                <Footer />
            </section>
     </div>
  )
}

export default Feed