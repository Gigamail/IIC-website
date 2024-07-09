import React from 'react';
import NavBar from '../Components/NavBar';
import Card1 from '../Components/Card';
const Events = () => {
  return (
    <div className="relative bg-white w-full min-h-screen text-center text-black font-barlow-semi-condensed">
      <NavBar />
      {/* Add your event-related content here */}
      <img style={{
        width: '100vw',  //full screen
        position: 'absolute',
        zIndex: 0,
      }}
        className="animate__animated animate__fadeInDown absolute top-[11rem] left-0 object-contain"
        src="/eventsbanner.png"
      />
      <div className='animate__animated animate__fadeInUp'
        style={{
          position: 'absolute',
          top: '50%',
          left: '36%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <Card1/>
      </div>
      <img style={{
        width: '100vw',
        position: 'absolute',
        zIndex: 0,
      }}
        className="animate__animated animate__fadeInUp absolute top-[40rem] left-[0] object-contain"
        src="/event_cards.png"
      />
    </div>
  );
};

export default Events;