import { useCallback } from "react";
import 'animate.css'
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
const LandingPage2 = () => {
  const navigate = useNavigate(); 

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">
         <NavBar />

      <img
        className="animate__animated animate__fadeIn absolute top-0 left-0 w-full h-full object-cover"
        alt="LandingPage2"
        src="/LandingPage2.png"
      />
      <img
        className="animate__animated animate__fadeInLeft absolute top-[13rem] left-[15rem]"
        alt="mascot"
        src="/mascot.png"
      />
      <img
        className="animate__animated animate__fadeInRight absolute top-[15rem] left-[55rem]"
        alt="Text"
        src="/Text.png"
      />
    </div>
  );
};

export default LandingPage2;
