import React from 'react';
import FeatImage01 from '../images/calendar.png';
import FeatImage02 from '../images/metalhealth.png';
import FeatImage03 from '../images/sh.jpeg';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">The majority of us cannot approach to people directly for help.</h2>
            <p className="text-xl text-gray-400">Through us you can discuss issues with people and get help. We are a platform to provide help and support to everyone.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src={FeatImage01} width="64" height="64" alt="Features 01" />
             
              <h4 className="h4 mb-2">Menstruation</h4>
              <p className="text-lg text-gray-400 text-center">Track your cycle, Know more products, Know it All</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src={FeatImage02} width="64" height="64" alt="Features 02" />
              
              <h4 className="h4 mb-2">Mental Health</h4>
              <p className="text-lg text-gray-400 text-center">It is not the bruises on the body that hurt. It is the wounds of the heart and the scars on the mind.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <img className="max-w-full mx-auto md:max-w-none h-auto rounded-full" src={FeatImage03} width="64" height="64" alt="Features 02" />
             
              <h4 className="h4 mb-2">Sexual Health</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

           

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
