import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "/src/context/FormContext";
import imageBg from "/src/assets/formImgs/Desktop/desktop.jpg";
import { info } from "/Info";
import { useLocation, useNavigate } from "react-router-dom";

function StepThree() {
  const { formData, updateFormData } = useContext(FormContext);

  // Error state for each field
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");

  const [activeStep, setActiveStep] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error states before validation
    setEmailError("");
    setPhoneNoError("");
    setNameError("");

    // Email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const phoneRegex = /^\+234\d{10}$/; // Nigerian phone number regex

    let valid = true;

    if (!formData.stepThree.contact_name) {
      setNameError("Name is required");
      valid = false;
    }

    if (!formData.stepThree.contact_email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(formData.stepThree.contact_email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (!formData.stepThree.contact_phone_suffix) {
      setPhoneNoError("Phone number is required");
      valid = false;
    } else if (!phoneRegex.test("+234" + formData.stepThree.contact_phone_suffix)) {
      setPhoneNoError("Please enter a valid phone number");
      valid = false;
    }

    // If the form is valid, navigate to the next step
    if (valid) {
      navigate("/school-code");
      console.log("Form Submitted Successfully");
      setEmailError("");
      setPhoneNoError("");
    } else {
      console.log("Validation failed.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({
      ...formData,
      stepThree: {
        ...formData.stepThree,
        [name]: value,
      },
    });
  };

  const handlePhoneNoChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact_phone_suffix") {
      updateFormData({
        ...formData,
        stepThree: {
          ...formData.stepThree,
          contact_phone_suffix: value.replace(/[^0-9]/g, ""), // Allow only numeric input
        },
      });
    }
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
    <>
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
                    <div
                      onClick={() => handleStepClick(x.id)}
                      className={`grid items-center h-8 px-2 w-8 border rounded-full place-items-center border-Neutral-veryLightGray relative max-md:top-[2rem] font-bold text-Neutral-veryLightGray ${activeStep === x.id ? "bg-Primary-blue" : ""}`}
                    >
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
              <h1 className="text-[1.5rem] text-Primary-veryDarkGray font-bold mt-4 ">Primary Contact</h1>
              <p className="text-Neutral-darkGray mt-3 mb-5 text-[0.9rem]">Please provide the contact name, contact email, and contact phone number of the following</p>

              <div>
                <InputField
                  name="contact_name"
                  type="text"
                  id="contact_name"
                  value={formData.stepThree.contact_name}
                  placeholder="e.g. Stephen George"
                  label="Contact Name"
                  onChange={handleChange}
                  error={nameError}
                />

                <InputField
                  name="contact_email"
                  type="email"
                  id="contact_email"
                  value={formData.stepThree.contact_email}
                  placeholder="e.g. example@gmail.com"
                  label="Contact Email"
                  onChange={handleChange}
                  error={emailError}
                />

                <div className="grid w-full grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <InputField
                      name="contact_phone_prefix"
                      type="text"
                      id="contact_phone_prefix"
                      value={"+234"}
                      placeholder="e.g. +1 234 567 890"
                      label="Code"
                      disabled
                      onChange={handleChange}
                     
                    />
                  </div>

                  <div className="col-span-2">
                    <InputField
                      name="contact_phone_suffix"
                      type="text"
                      id="contact_phone_suffix"
                      value={formData.stepThree.contact_phone_suffix}
                      placeholder="e.g. 123 456 7890"
                      label="Contact Phone"
                      onChange={handlePhoneNoChange}
                      error={phoneNoError}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mb-10 mt-7">
                <button className="px-5 py-2 mt-20 rounded-lg text-Neutral-darkGray" onClick={handleBack}>
                  Go Back
                </button>
                <button className="px-5 py-2 mt-20 rounded-lg bg-Primary-veryDarkGray text-Neutral-veryLightGray" onClick={handleSubmit}>
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const InputField = ({ name, value, placeholder, id, label, onChange, error, type }) => {
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
      />
      {error && <p className="text-sm text-red-500 float-end">{error}</p>}
    </div>
  );
};

export default StepThree;
