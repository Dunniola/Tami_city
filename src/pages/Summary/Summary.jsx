import React, { useContext } from "react";
import { FormContext } from "/src/context/FormContext";
import { useNavigate } from "react-router-dom";
import imageBg from "/src/assets/formImgs/Desktop/desktop.jpg";
import { info } from "/Info";

function Summary() {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

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

  // Handles back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handles final confirmation
  const handleConfirm = () => {
    console.log("Form data submitted:", formData);
    navigate("/success");
  };

  return (
    <div className="grid min-h-screen place-content-center text-[1rem]  bg-Neutral-veryLightGray py-16 rounded overflow-hidden">
      <div className="w-full lg:w-[45rem] max-md:w-[30rem] md:w-[40rem] sm:w-[35rem] md:bg-Neutral-grayishWhite rounded-lg">
        <div className="grid md:grid-cols-3 md:gap-5 p-[1rem]">
          {/* Sidebar with step navigation */}
          <div
            className="bg-center bg-cover rounded-lg max-md:h-[15rem] md:col-span-1"
            style={{ backgroundImage: `url(${imageBg})` }}
          >
            <div className="max-md:flex max-md:place-content-center">
              {info.map((x) => (
                <div key={x.id} className="flex items-center gap-3 px-3 py-2 cursor-pointer">
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
          <div className="px-8 rounded md:col-span-2 max-md:bg-Neutral-grayishWhite max-md:mx-[4rem] relative max-md:bottom-[8rem] max-md:rounded-lg">
            <h1 className="text-[1.5rem] text-Primary-veryDarkGray font-bold mt-4">Summary</h1>
            <p className="text-Neutral-darkGray mt-3 mb-5 text-[0.9rem] leading-tight">
              Double-check all information before confirming.
            </p>

            {/* Summary Details */}
            <div className="p-3 leading-3 rounded bg-Neutral-veryVeryLightGray">
              <h2 className="text-[1rem] font-bold  mb-3">School Details</h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start">
                  <span className=" w-[12rem]">School Name: </span>
                  {formData.stepOne?.name || ""}
                </div>
                <div className="flex leading-5">
                  <span className=" w-[12rem]">School Address: </span>
                  <div className="flex-1 text-start">
                  {formData.stepOne?.address || ""}
                </div>
                </div>
                <div className="flex justify-start">
                  <span className=" w-[12rem]">No of Employees: </span>
                  {formData.stepOne?.no_of_employees || ""}
                </div>
              </div>

              <h2 className="text-[1rem] font-bold mt-8 mb-3">Contact Information</h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start">
                  <span className=" w-[12rem]">Email: </span>
                  {formData.stepTwo?.email || ""}
                </div>
                <div className="flex justify-start">
                  <span className="w-[12rem]">Phone Number: </span>
                  {formData.stepTwo?.phone_no_suffix || ""}
                </div>
              </div>

              <h2 className="text-[1rem] font-bold mt-8 mb-3">Primary Contact</h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start">
                  <span className="w-[12rem]">Contact Name: </span>
                  {formData.stepThree?.contact_name || ""}
                </div>
                <div className="flex justify-start">
                  <span className="w-[12rem]">Contact Email: </span>
                  {formData.stepThree?.contact_email || ""}
                </div>
                <div className="flex justify-start">
                  <span className="w-[12rem]">Contact Phone Number: </span>
                  {formData.stepThree?.contact_phone_suffix || ""}
                </div>
              </div>

              <h2 className="text-[1rem] font-bold mt-8 mb-3">School Code</h2>
              <div className="flex justify-start">
                <span className="w-[12rem]">School Initials: </span>
                {formData.school_initials || ""}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-10 mb-5">
              <button
                className="px-5 py-2 rounded-lg text-Neutral-darkGray"
                onClick={handleBack}
              >
                Go Back
              </button>
              <button
                className="px-5 py-2 rounded-lg bg-Primary-veryDarkGray text-Neutral-veryLightGray"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
