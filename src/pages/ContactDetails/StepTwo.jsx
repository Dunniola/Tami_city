import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "/src/context/FormContext";
import imageBg from "/src/assets/formImgs/Desktop/desktop.jpg";
import { info } from "/Info";
import { useLocation, useNavigate } from "react-router-dom";

function StepTwo() {
  const { formData, updateFormData } = useContext(FormContext);

  // Error state for each field
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");

  const [activeStep, setActiveStep] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
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
  }, [location.pathname]);

  const handlePhoneNumberChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone_no_suffix") {
      updateFormData({
        ...formData,
        stepTwo: {
          ...formData.stepTwo,
          phone_no_suffix: value.replace(/[^0-9]/g, ""), // 
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  error states before validation
    setEmailError("");
    setPhoneNoError("");

    // Email and phone no validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const phoneRegex = /^\+234\d{10}$/; // Updated to validate +234 followed by 10 digits
    

    let valid = true;
    // Validation
    if (!formData.stepTwo.email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(formData.stepTwo.email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (!formData.stepTwo.phone_no_suffix) {
      setPhoneNoError("Phone number is required");
      valid = false;
    } else if (!phoneRegex.test("+234" + formData.stepTwo.phone_no_suffix)) {
      setPhoneNoError("Please enter a valid phone number");
      console.log("Validating phone number:", "+234" + formData.stepTwo.phone_no_suffix);

      valid = false;
    }

    
    if (valid) {
      navigate("/primary-contact");
      console.log("Form Submitted Successfully");
      setEmailError("");
      setPhoneNoError("");
     
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({
      ...formData,
      stepTwo: {
        ...formData.stepTwo,
        [name]: value,
      },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

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
                <div key={x.id} className={`flex items-center gap-3 px-3 py-2 cursor-pointer`}>
                  <div onClick={() => handleStepClick(x.id)} className={`grid items-center h-8 px-2 w-8 border rounded-full place-items-center border-Neutral-veryLightGray relative max-md:top-[2rem] font-bold text-Neutral-veryLightGray ${activeStep === x.id ? "bg-Primary-blue" : ""}`} >
                    {x.id}
                  </div>
                  <div>
                    <span className="font-semibold text-Neutral-darkGray max-md:hidden">{x.step}</span>
                    <br />
                    <span className="font-semibold text-Neutral-veryLightGray whitespace-nowrap max-md:hidden">{x.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-8 rounded md:col-span-2 max-md:bg-Neutral-grayishWhite max-md:mx-[4rem] relative max-md:bottom-[8rem] max-md:rounded-lg">
            <h1 className="text-[1.5rem] text-Primary-veryDarkGray font-bold mt-4 mb-3">Contact Information</h1>
            <p className="text-Neutral-darkGray text-[0.9rem]">Please provide the email and phone number contacts of the following</p>

            <div>
              <InputField
                name="email"
                type="email"
                id="email"
                value={formData.stepTwo.email}
                placeholder="e.g. example@gmail.com"
                label="School Email"
                required
                onChange={handleChange}
                error={emailError}
              />
              <div className="grid w-full grid-cols-3 gap-3">
                <div className="col-span-1 ">
                  <InputField
                    name="phone_no_prefix"
                    type="text"
                    id="phone_no_prefix"
                    value="+234"
                    placeholder="e.g. +234"
                    label="Code"
                    disabled
                    onChange={handleChange} 
                  />
                </div>

                <div className="col-span-2">
                  <InputField
                    name="phone_no_suffix"
                    type="text"
                    id="phone_no_suffix"
                    value={formData.stepTwo.phone_no_suffix}
                    placeholder="e.g. 8012345678"
                    label="School Phone Number"
                    onChange={handlePhoneNumberChange} 
                    error={phoneNoError}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-[2rem] mt-[7rem]">
              <div>
                <button className="px-5 py-2 rounded-lg text-Neutral-darkGray max-md:bottom-5" onClick={handleBack}> 
                  Go Back
                </button>
              </div>
              <div>
                <button className="px-5 py-2 rounded py- bg-Primary-veryDarkGray text-Neutral-veryLightGray" onClick={handleSubmit}>
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ name, value, placeholder, id, label, onChange, error, type, disabled }) => {
  return (
    <div className="mt-3 text-Primary-veryDarkGray">
      <label htmlFor={id} className="font-semibold">{label}</label>

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full px-5 py-2 my-2 border rounded outline-none bg-Neutral-grayishWhite border-Neutral-veryVeryDarkGray text-Neutral-darkGray ${error ? "border-red-500" : ""} focus:border-Primary-veryDarkGray`}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
      />
      {error && <p className="text-sm text-red-500 float-end">{error}</p>}
    </div>
  );
};

export default StepTwo;
