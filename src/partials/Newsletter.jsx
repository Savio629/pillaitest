import React from 'react';
import Footer from './Footer';
import PageIllustration from './PageIllustration';
import Header from './Header';
function Newsletter() {
  const bgColor = '#fc5353';
  return (
    <section className='overflow-hidden'>
      <Header/>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div style={{ background: `linear-gradient(to top, ${bgColor}, #f79c9c)` }} className="relative bg-red-400 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up" data-aos-delay="400">

    
          

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-left lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Contact Us</h3>
              <p className="text-purple-200 text-lg">Dsxkndjcudsx;z</p>
            </div>

            {/* CTA form */}
            <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-1">

                      <input id="full-name" type="text" className="form-input w-full text-white" placeholder="First and last name" required />
                      </div>
                  </div>
                      
                      <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-1">

                      <input id="email" type="text" className="form-input w-full text-white" placeholder="email" required />  
                      </div>
                  </div>
                      
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-1">
                      <input id="message" type="text" className="form-input w-full text-white" placeholder="message" required />
                    
                      </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-1">
                      <button className="btn text-white bg-red-60 hover:bg-pink-700 w-full" style={{ border: "1px solid black" }}>Send</button>
                    </div>
                  </div>
            </form>
          </div>

        </div>

      </div>
      <Footer/>
    </section>
  );
}

export default Newsletter;