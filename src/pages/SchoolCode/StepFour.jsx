import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "/src/context/FormContext";
import imageBg from "/src/assets/formImgs/Desktop/desktop.jpg";
import { info } from "/Info";
import { useLocation, useNavigate } from "react-router-dom";

function StepFour() {
  const { formData, updateFormData } = useContext(FormContext);
  const [schoolInitialsError, setSchoolInitialsError] = useState("");
  const [activeStep, setActiveStep] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()


  useEffect(() => {
    switch(location.pathname){
      case "/school-info":
        setActiveStep(1);
        break;
      case "/contact-info":
        setActiveStep(2);
        break;
      case "/primary-contact":
        setActiveStep(3);
        break;
      case "/school-code":
        setActiveStep(4);
        break;
      default:
        setActiveStep(null); 
     
    }
  }, [location.pathname])
  

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error state
    setSchoolInitialsError("");

    // Validation logic
    const schoolInitials = formData.school_initials;
    if (!schoolInitials) {
      setSchoolInitialsError("School code is required");
      return;
    } else if (schoolInitials.length < 2 || schoolInitials.length > 5) {
      setSchoolInitialsError("School code must be between 2 and 5 characters");
      return;
    }

    // Navigate to summary if valid
    navigate("/summary");
    console.log("Form submitted successfully");
  };

  // Handles input changes
  const handleChange = (e) => {
    const {value } = e.target;

    // Update form data and error state dynamically
    if (value.length >= 2 && value.length <= 5) {
      setSchoolInitialsError("");
    } else {
      setSchoolInitialsError("School code must be between 2 and 5 characters");
    }

    updateFormData({
      ...formData,
      school_initials: value,
    });
  };

  // Handles step navigation
  const handleStepClick = (step) => {
    setActiveStep(step);
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
    console.log(`Navigating to step ${step}`);
  };

  // Handles back navigation
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="grid min-h-screen place-content-center text-[1rem]  bg-Neutral-veryLightGray py-16 rounded overflow-hidden">
      <div className="w-full lg:w-[45rem] max-md:w-[30rem] md:w-[40rem] sm:w-[35rem] md:bg-Neutral-grayishWhite rounded-lg">
        <div className="grid md:grid-cols-3 md:gap-5 p-[1rem]">
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
                  className={`grid items-center h-8 px-2 w-8 border rounded-full place-items-center border-Neutral-veryLightGray relative max-md:top-[2rem] font-bold text-Neutral-veryLightGray ${activeStep === x.id ? "bg-Primary-blue" : ""}`}
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

          <div className="px-8 rounded md:col-span-2 max-md:bg-Neutral-grayishWhite max-md:mx-[4rem] relative max-md:bottom-[8rem] max-md:rounded-lg">
            <h1 className="text-[1.5rem] text-Primary-veryDarkGray font-bold mt-4">
              School Code 
            </h1>
            <p className="text-Neutral-darkGray mt-3 mb-5 text-[0.9rem] leading-tight">
              Please provide the school initials below
            </p>

            <InputField
              name="school_initials"
              type="text"
              id="school_initials"
              value={formData.school_initials || ""}
              placeholder="e.g. 1234"
              label="School Initials"
              onChange={handleChange}
              error={schoolInitialsError}
              minLength={2}
              maxLength={5}
            />

            <div className=" flex justify-between mb-[2rem] mt-[7rem]">
              <button
                className="px-5 py-2 mt-20 rounded-lg text-Neutral-darkGray"
                onClick={handleBack}
              >
                Go Back
              </button>
              <button
                className="px-5 py-2 mt-20 rounded-lg bg-Primary-veryDarkGray text-Neutral-veryLightGray"
                onClick={handleSubmit}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ name, value, placeholder, id, label, onChange, error, type, minLength, maxLength }) => {
  return (
    <div className="mt-3 text-Primary-veryDarkGray">
      <label htmlFor={id} className="font-semibold">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full px-5 py-2 my-2 border rounded outline-none bg-Neutral-grayishWhite border-Neutral-veryVeryDarkGray text-Neutral-darkGray ${
          error ? "border-red-500" : ""
        } focus:border-Primary-veryDarkGray`}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      {error && <p className="text-sm text-red-500 float-end">{error}</p>}
    </div>
  );
};

export default StepFour;
