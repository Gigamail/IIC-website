import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/"); // Navigate to "LandingPage1"
  }, [navigate]);
  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, [navigate]);
  const onEventsTextClick = useCallback(() => {
    navigate("/About");
  }, [navigate]);
  const onContactTextClick = useCallback(() => {
    navigate("/Contactus");
  }, []);
  const onTeamTextClick = useCallback(() => {
    navigate("/Team");
  }, []);

  const teams = {
    faculty: [
      {
        img: "Team Post/Faculties/IMG_0422.JPG",
        name: "Prof. Dr. Virendra Bhojwani",
        position: "President",
      },
    ],
    studentAssociation: [
      {
        img: "Team Post/Core/Atharva/IMG-20231114-WA0038.jpg",
        name: "Atharva Nimbalkar",
        position: "President",
      },
      {
        img: "Team Post/Core/Utkarsha/IMG_0333.JPG",
        name: "Utkarsha Undre",
        position: "Vice President",
      },
      {
        img: "Team Post/Core/Anisha/IMG_6491.JPG",
        name: "Anisha Jain",
        position: "Secretary",
      },
      {
        img: "Team Post/Core/Aryan/20231027_085531.jpg",
        name: "Aryan Joge",
        position: "Treasurer",
      },
    ],
    technical: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Harkeerat Dhunda",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Samay Khandelwal",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Vidhan Poddar",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Mahati Kapuganty",
        position: "Member",
      },
    ],
    content: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Madhura Gondhalekar",
        position: "Lead",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Tanvi Shetia",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Abhinav Jaiswal",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Nidhi Phopaliya",
        position: "Member",
      },
    ],
    design: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Yashvendra Singh Dhandal",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Sarthak Salunke",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Revant Katuri",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Aalok Nikam",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Tanuja Jagtap",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Aryan Varale",
        position: "Member",
      },
    ],
    marketing: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Vedant Gangatre",
        position: "Lead",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Burhanuddin Kapadvanjwala",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Mangesh Bhangde",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Ishita Jain",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Shreeya Bhagwat",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Pranita Potghan",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Sanjana Agrawal",
        position: "Member",
      },
    ],
    social: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Aditya Sangle",
        position: "Lead",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Tanay Panchal",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Yash Shivarkar",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Soham Satish Dhapate",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Suhani Vishal Hyalij",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Shrushti Kachare",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Jay Verma",
        position: "Member",
      },
    ],
    management: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Harsh Kumar",
        position: "Lead",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Rohit Gadoya",
        position: "Lead",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Tanmay Sinha",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Rohan Shitole",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Soham Dheemate",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Zia Kapoor",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Aditi Patwa",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Manjiri Deotalu",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Shripad Punde",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Yashika Dhanwani",
        position: "Member",
      },
    ],
    studentVenture: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Umar Sayyed",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Aaryan Chavan",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Ninad Borawake",
        position: "Member",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Aarya Kulkarni",
        position: "Member",
      },
    ],
    spokePerson: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Ananya Singh",
        position: "Lead",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Paaneri Naik",
        position: "Member",
      },
    ],
    ambassador: [
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Sahil Yadav",
        position: "Sangeetkala",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Tanvi Gadre",
        position: "Institute of Design",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Mugdha Jadhav",
        position: "School of Vedic Sciences",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Mohit Bansal",
        position: "Food Technology",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Mandar Chatarkar",
        position: "School of Architecture",
      },
      {
        img: "Team Post/Technical Team/Harkeerat/Harkeerat Dhunda.jpg",
        name: "Atharv Shejul",
        position: "Aerospace",
      },
    ],
  };

  return (
    <div className="relative bg-img bg-white w-full min-h-screen text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">
      <nav
        style={{
          zIndex: 2,
          background: "rgba(255, 255, 255, 0.4)",
        }}
        className="top-0 bg-gray w-full overflow-hidden flex flex-wrap justify-around items-center"
      >
        <img
          className="w-20 h-auto lg:w-[11.69rem] lg:h-[6.75rem]"
          alt="Logo"
          src="/logo-3-1@2x.png"
        />
        <div className="flex-shrink-0 space-x-[0.3rem] lg:space-x-[1.5rem]">
          <span onClick={onHomeTextClick} className="cursor-pointer">
            Home
          </span>
          <span onClick={onAboutTextClick} className="cursor-pointer">
            About
          </span>
          <span onClick={onTeamTextClick} className="cursor-pointer">
            Team
          </span>
          <span onClick={onEventsTextClick} className="cursor-pointer">
            Events
          </span>
          <span onClick={onContactTextClick} className="cursor-pointer">
            Contact
          </span>
        </div>
        <img
          className="flex-shrink-0 w-20 h-auto lg:w-[11.75rem] lg:h-[6.31rem]"
          alt="Another Image"
          src="/image-7@2x.png"
        />
      </nav>
      <img src="team_banner.png" className="w-full" />
      {/* Faculty */}
      <div className="py-14">
        <div className="flex items-center justify-center px-10 gap-x-10 mt-8">
          <p className="w-full h-[0px] bg-transparent outline outline-2 border-black"></p>
          <p className="whitespace-nowrap">Faculty Cordinator</p>
          <p className="w-full h-[0px] bg-transparent outline outline-2 border-black"></p>
        </div>
        {/* Card */}
        <div className=" py-14 flex justify-center">
          {teams.faculty.map((e) => {
            return (
              <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                <img
                  className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                  src={e.img}
                  alt={e.name}
                />
                <div>
                  <p style={{ fontSize: "16px" }}>{e.name}</p>
                  <p style={{ fontSize: "14px" }}>{e.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Student Association */}
      <div className="py-14">
        <div className="flex items-center justify-center px-10 gap-x-10 mt-8">
          <p className="w-full h-[0px] bg-transparent outline outline-2 border-black"></p>
          <p className="whitespace-nowrap">Student Association 2.0</p>
          <p className="w-full h-[0px] bg-transparent outline outline-2 border-black"></p>
        </div>
        <div className=" mt-10 mx-10 flex justify-evenly flex-wrap gap-12">
          {/* Card */}
          {teams.studentAssociation.map((e) => {
            return (
              <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                <img
                  className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                  src={e.img}
                  alt={e.name}
                />
                <div>
                  <p style={{ fontSize: "16px" }}>{e.name}</p>
                  <p style={{ fontSize: "14px" }}>{e.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Team */}
      <div className="py-14 ">
        <div className="flex items-center justify-center px-10 gap-x-10 mt-8">
          <p className="whitespace-nowrap bg-black rounded-full text-white text-[20px] py-1 px-4">
            Content Team
          </p>
          <p className="w-full h-[0px] bg-transparent outline-dashed outline-2 border-black"></p>
        </div>
        <div className=" mt-10 mx-10 flex justify-evenly flex-wrap gap-12">
          {/* Card */}
          {teams.content.map((e) => {
            return (
              <>
               {e.position.toLowerCase() != "lead" ? (
                  <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* Design Team */}
      <div className="py-14 ">
        <div className="flex items-center justify-center px-10 gap-x-10 mt-8">
          <p className="w-full h-[0px] bg-transparent outline-dashed outline-2 border-black"></p>
          <p className="whitespace-nowrap bg-black rounded-full text-white text-[20px] py-1 px-4">
            Desing Team
          </p>
        </div>
        <div className=" mt-10 mx-10 flex justify-center gap-12 flex-wrap">
          {/* Card */}
          {teams.design.map((e) => {
            return (
              <>
               {e.position.toLowerCase() != "lead" ? (
                  <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* Marketing Team */}
      <div className="py-14 ">
        <div className="flex items-center justify-center px-10 gap-x-10 mt-8">
          <p className="w-full h-[0px] bg-transparent outline-dashed outline-2 border-black"></p>
          <p className="whitespace-nowrap bg-black rounded-full text-white text-[20px] py-1 px-4">
            Marketing Team
          </p>
        </div>
        <div className=" mt-10 mx-10 flex justify-center gap-12 flex-wrap">
          {/* Card */}
          {teams.marketing.map((e) => {
            return (
              <>
               {e.position.toLowerCase() != "lead" ? (
                  <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* Social Media Team */}
      <div className="py-14 ">
        <div className="flex items-center justify-center px-10 gap-x-10 mt-8">
          <p className="w-full h-[0px] bg-transparent outline-dashed outline-2 border-black"></p>
          <p className="whitespace-nowrap bg-black rounded-full text-white text-[20px] py-1 px-4">
          Social Media Team
          </p>
        </div>
        <div className=" mt-10 mx-10 flex justify-center gap-12 flex-wrap">
          {/* Card */}
          {teams.social.map((e) => {
            return (
              <>
                {e.position.toLowerCase() != "lead" ? (
                  <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* Management Team */}
      <div className="py-14 ">
        <div className="flex items-center justify-center px-10 gap-x-10 mt-8">
          <p className="w-full h-[0px] bg-transparent outline-dashed outline-2 border-black"></p>
          <p className="whitespace-nowrap bg-black rounded-full text-white text-[20px] py-1 px-4">
            Management Team
          </p>
        </div>
        <div className=" mt-10 mx-10 flex justify-center gap-12 flex-wrap">
          {/* Card */}
          {teams.management.map((e) => {
            return (
              <>
                {e.position.toLowerCase() != "lead" ? (
                  <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="w-[13rem] h-[13rem] rounded-md flex flex-col items-center justify-between p-3 outline outline-1 outline-slate-700">
                    <img
                      className="w-[8rem] h-[8rem] aspect-square object-cover rounded-full"
                      src={e.img}
                      alt={e.name}
                    />
                    <div>
                      <p style={{ fontSize: "16px" }}>{e.name}</p>
                      <p style={{ fontSize: "14px" }}>{e.position}</p>
                    </div>
                  </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
