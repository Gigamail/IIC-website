import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WOW from 'wowjs';
import Footer from '../Components/Footer';
import NavBar from "../Components/NavBar";

const About = () => {

  return (
    <div className="relative bg-white w-full min-h-screen text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">
    <NavBar />
      <img style={{
        width: '100vw',  //full screen
        position: 'absolute',
        zIndex: 1,
      }}
        className="animate__animated animate__fadeInDown absolute top-[11rem] left-0 object-contain"
        src="/headeraboutpage.png"
      />
      <img style={{
        zIndex: 2,
      }}
        className="animate__animated animate__fadeInLeft absolute top-[30rem] left-[10rem]"
        src="/aboutimg1.png"
      />
      <img
        className="animate__animated animate__fadeInRight absolute top-[30rem] left-[45rem]"
        src="/textabout.png"
      />
      <img
        className="animate__animated animate__fadeInUp absolute top-[30rem] left-[-35rem]"
        alt="Text"
        src="/aboutshapes1.png"
      />
      <img style={{
        width: '100vw',
        position: 'absolute',
        zIndex: 1,
      }}
        className="wow animate__animated animate__fadeInDown absolute top-[61rem] left-0 object-contain"
        src="/headeraboutpage2.png"
      />
      <img style={{

        zIndex: 2,
      }}
        className="wow animate__animated animate__fadeInLeft absolute top-[80rem] left-[7rem]"
        src="/aboutimg2.png"
      />
      <img
        className="wow animate__animated animate__fadeInRight absolute top-[85rem] left-[45rem]"
        src="/textabout2.png"
      />
      <img
        className="wow animate__animated animate__fadeInUp absolute top-[70rem] left-[-20rem]"
        src="/aboutshapes2.png"
      />
    </div>

  );

};
export default About;
