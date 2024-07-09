import { useCallback, useState } from "react";
import styles from './LandingPage1.module.css'
import {useNavigate} from "react-router-dom";
const LandingPage1 = () => {
  const navigate = useNavigate();
  const onHomeTextClick = useCallback(() => {
    navigate("/")
  
  }, [navigate]); 

  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, [navigate]);
  const onEventsTextClick = useCallback(() => {
  }, []);

  const onContactTextClick = useCallback(() => {
    navigate("./Contactus")
  }, []);

  const [showIntro, setShowIntro] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [showRocket, setShowRocket] = useState(false);
  const [showText, setShowText] = useState(false);

  const onLetsStartTextClick = useCallback(() => {
    console.log("Let's start button clicked!")
    setShowIntro(false);  // hide the INNOVATE text and button
    // show the rocket and asteroids after INNOVATE disappears
    setTimeout(() => {
      setShowRocket(true);
    }, 300);  

    setTimeout(() => {
      setShowText(true);
    }, 2300); // 300ms for INNOVATE + 2 seconds for rocket

    setTimeout(() => {
      navigate("/LandingPage2");    }, 5800); // 2300ms for above + 2 seconds for text
  }, [navigate]);

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Rocket In Space"
        src="/Rocket In Space.png"
      />
      {showNav && (
        <>
          <nav style={{
            zIndex: 2,
          }} className="absolute top-0 bg-gray w-full overflow-hidden p-2 lg:p-[2rem] flex flex-wrap justify-around items-center">
            <img
              className="w-20 h-auto lg:w-[11.69rem] lg:h-[6.75rem]"
              alt="Logo"
              src="/logo-3-1@2x.png"
            />
            <div className="flex-shrink-0 space-x-[0.3rem] lg:space-x-[1.5rem]">
              <span onClick={onHomeTextClick} className="cursor-pointer">Home</span>
              <span onClick={onAboutTextClick} className="cursor-pointer">About</span>
              <span>Team</span>
              <span onClick={onEventsTextClick} className="cursor-pointer">Events</span>
              <span onClick={onContactTextClick} className="cursor-pointer">Contact</span>
            </div>
            <img
              className="flex-shrink-0 w-20 h-auto lg:w-[11.75rem] lg:h-[6.31rem]"
              alt="Another Image"
              src="/image-7@2x.png"
            />
          </nav>
        </>)}
      {showIntro && (<>
        <div className="absolute top-[20rem] left-[4rem] lg:left-[18.94rem] sm:text-center lg:text-left text-[1rem] lg:text-[3rem] xl:left-[33rem] xl:top-[25rem] font-inter">
          <div className="mb-8 lg:mb-4  text-[3rem] md:text-6x1 lg:text-[10.5rem] text-white font-whyte-inktrap">
            INNOVATE
          </div>

          <div className="absolute sm:top-[15rem] lg:top-[15rem] left-[5rem] lg:left-[20.94rem] text-left text-[1rem] lg:text-[3rem] font-inter">

            <div
              style={{ filter: 'drop-shadow(0 0 20px white)' }}
              className="rounded-full lg:text-[2rem] w-auto h-auto bg-white p-2 lg:p-[2rem] cursor-pointer"
              onClick={onLetsStartTextClick}
            >

              <b className="tracking-wider lg:tracking-[0.04em]">Let’s start</b>
            </div>
          </div>
        </div>
      </>
      )}
      {showRocket && (
        <>
          <img
            style={{
              width: '100vw',
              height: '120vh', 
              position: 'absolute', 
              zIndex: 1,
            }}
            className={`absolute ${showRocket ? styles.asteroidAnimation : ''}`}
            alt="Rocket And Asteroids"
            src="/asteroids.png"
          />

          <img
            className={`absolute ${showRocket ? styles.rocketAnimation : ''}`}
            alt="Rocket And Asteroids"
            src="/Rocket.png"
          />
        </>
      )}/

      {showText && (
        <div className={`absolute ${showText ? styles.textAnimation : ''}`}>
          <span>Innovation</span><br />
          <span>Inspiration</span><br />
          <span>Ideation</span><br />
          <span>    </span>
        </div>
      )}

    </div>
  );
};

export default LandingPage1;