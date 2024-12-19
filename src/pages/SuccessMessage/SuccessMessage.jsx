import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import checkMark from "/src/assets/formImgs/Desktop/icon-checkmark.svg";
import imageBg from "/src/assets/formImgs/Desktop/desktop.jpg";
import { info } from "/Info";


function SuccessMessage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.onload = () =>{
      navigate("/school-info")
    }
  
    
  }, [navigate])
  
 
  

  // Handles step navigation
  const handleStepClick = (step) => {
    switch (step) {
      case 1:
        navigate("/school-info");
        break;
      case 2:
        navigate("/contact-info");
        break;
      case 3:
        navigate("/primary-contact");
        break;
      case 4:
        navigate("/school-code");
        break;
      default:
        console.error("Invalid step:", step);
        break;
    }
  };

 
  

  return (
    <div className="grid min-h-screen place-content-center text-[1rem] tracking-tighter bg-Neutral-veryLightGray py-16 rounded overflow-hidden">
      <div className="w-full lg:w-[45rem] max-md:w-[30rem] md:w-[40rem] sm:w-[35rem] md:bg-Neutral-grayishWhite rounded-lg">
        <div className="grid md:grid-cols-3 md:gap-5 p-[1rem]">
          {/* Sidebar with step navigation */}
          <div
            className="bg-center bg-cover rounded-lg max-md:h-[15rem] md:col-span-1"
            style={{ backgroundImage: `url(${imageBg})` }}
          >
            <div className="max-md:flex max-md:place-content-center">
            {info.map((x) => (
              <div
                key={x.id}
                className="flex items-center gap-3 px-3 py-2 cursor-pointer"
              >
                <div
                  onClick={() => handleStepClick(x.id)}
                  className={`grid items-center h-8 px-2 w-8 border rounded-full place-items-center border-Neutral-veryLightGray relative max-md:top-[2rem] font-bold text-Neutral-veryLightGray ${
                    x.id === 4 ? "bg-Primary-blue" : ""
                  }`}
                >
                  {x.id}
                </div>
                <div>
                  <span className="font-semibold text-Neutral-darkGray max-md:hidden">
                    {x.step}
                  </span>
                  <br />
                  <span className="font-semibold text-Neutral-veryLightGray whitespace-nowrap max-md:hidden">
                    {x.details}
                  </span>
                </div>
              </div>
            ))}
            </div> 
          </div>

          {/* Main content */}
          <div className="px-8 rounded md:col-span-2 max-md:bg-Neutral-grayishWhite max-md:mx-[4rem] text-center pt-10 pb-[8rem] relative max-md:bottom-[8rem] max-md:rounded-lg  ">
          <div className="absolute my-6 transform -translate-x-1/2 border rounded-full h-[4rem] w-[4rem] left-1/2 bg-Primary-red inset-5 mt-[8rem]">
            <div className="absolute bg-white rounded-full inset-[0.8rem]">
            <img src={checkMark} alt=""  
            className="absolute inset-0 m-auto w-[1rem]"/>
            </div>
          </div>

            
            <h1 className="text-[1.8rem] text-Primary-veryDarkGray font-bold mt-[12rem]">
            Thank you!
            </h1>
            <p className="text-Neutral-darkGray mt-3 mb-5 text-[1rem] leading-5 text-center tracking-tight">
              Thank you for confirming the details! We've received your submission. 
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;
