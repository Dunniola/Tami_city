import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "/src/context/FormContext";
import imageBg from "/src/assets/formImgs/Desktop/desktop.jpg";
import { info } from "/Info";
import { useNavigate, useLocation } from "react-router-dom";

function StepOne() {
  const { formData, updateFormData } = useContext(FormContext);
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [noOfEmployeesError, setNoOfEmployeesError] = useState("");
  const [activeStep, setActiveStep] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // To track the current route

  // Update the active step based on the current route
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
  }, [location.pathname]); // Ensure activeStep updates when pathname changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error states before validation
    setNameError("");
    setAddressError("");
    setNoOfEmployeesError("");

    // Validation
    if (!formData.stepOne.name) {
      setNameError("School name is required");
    }
    if (!formData.stepOne.address) {
      setAddressError("School address is required");
    }
    if (!formData.stepOne.no_of_employees) {
      setNoOfEmployeesError("Number of employees is required");
    }

    // Check if all fields are filled before submitting
    if (formData.stepOne.name && formData.stepOne.address && formData.stepOne.no_of_employees) {
      navigate("/contact-info");
      console.log("form Submitted Successfully");
      setNameError("");
      setAddressError("");
      setNoOfEmployeesError(""); // Reset error messages after submission
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({
      ...formData,
      stepOne: {
        ...formData.stepOne,
        [name]: value,
      },
    });
  };

  // Set active step and navigate accordingly
  const handleStepClick = (step) => {
    setActiveStep(step); // Set active step to the clicked step

    // Navigate to the selected step based on its id
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
    <div className="grid min-h-screen place-content-center text-[1rem] bg-Neutral-veryLightGray py-16 rounded overflow-hidden">
      <div className="w-full lg:w-[45rem] max-md:w-[38rem] md:w-[45rem] max-sm:w-[30rem] sm:w-[40rem]  md:bg-Neutral-grayishWhite rounded-lg ">
        <div className="grid md:grid-cols-3 md:gap-5 p-[1rem]">
          <div
            className="bg-center bg-cover rounded-lg max-md:h-[15rem] md:col-span-1"
            style={{ backgroundImage: `url(${imageBg})` }}
          >
            <div className="max-md:flex max-md:place-content-center">
              {info.map((x) => (
                <div key={x.id} className="flex items-center gap-3 px-3 py-2 cursor-pointer">
                  <div
                    onClick={() => handleStepClick(x.id)}
                    className={`grid items-center h-8 px-2 w-8 border rounded-full place-items-center border-Neutral-veryLightGray relative max-md:top-[2rem] font-bold text-Neutral-veryLightGray ${activeStep === x.id ? "bg-Primary-blue" : ""}`}
                  >
                    {x.id}
                  </div>

                  <div>
                    <span className="font-semibold text-Neutral-darkGray max-md:hidden">{x.step}</span>
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
            <h1 className="text-[1.5rem] mb-3 text-Primary-veryDarkGray font-bold mt-4">School Information</h1>
            <p className="text-Neutral-darkGray text-[0.9rem]">Please provide the School name, School address, and the Number of employees</p>

            <form onSubmit={handleSubmit}>
              <InputField
                name="name"
                type="text"
                id="name"
                value={formData.stepOne.name}
                placeholder="e.g. Stephen King"
                label="School name"
                onChange={handleChange}
                error={nameError}
              />

              <InputField
                name="address"
                type="text"
                id="address"
                value={formData.stepOne.address}
                placeholder="e.g. 123 School St."
                label="School Address"
                onChange={handleChange}
                error={addressError}
              />

              <InputField
                name="no_of_employees"
                type="text"
                id="no_of_employees"
                value={formData.stepOne.no_of_employees}
                placeholder="e.g. 200"
                label="No Of Employees"
                onChange={handleChange}
                error={noOfEmployeesError}
              />

              <div className="relative h-[8rem] max-md:hidden">
                <button
                  type="submit"
                  className="absolute right-0 px-5 py-2 transform rounded md:bottom-0 bg-Primary-veryDarkGray text-Neutral-grayishWhite max-md:bottom-5"
                >
                  Next Step
                </button>
              </div>

              <div className="relative  md:hidden h-[8rem]">
                <button
                  type="submit"
                  className="absolute right-0 px-5 py-2 transform rounded md:bottom-0 bg-Primary-veryDarkGray text-Neutral-veryLightGray max-md:bottom-5"
                >
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
}

export default StepOne;
