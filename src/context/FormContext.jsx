import { createContext, useState } from "react";

export const FormContext = createContext()


export const FormProvider = ({children})=>{
const [formData, setFormData] = useState({
    stepOne: {
        name : "",
        address : "",
        no_of_employees : ""
    },
    stepTwo : {
        email: "",
        phone_no_suffix : "",
    },
    stepThree: {
        contact_name : "",
        contact_email : "",
        contact_phone_suffix : "",
    },
    school_initials : "",
    

})

const[currentStep, setCurrentStep] = useState(1)

const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,  
      ...newData,   
    }));
  };

const contextValue = {
    formData,
    currentStep,
    updateFormData,
    setCurrentStep,
}
return (
    <FormContext.Provider value={contextValue}>
        {children}

    </FormContext.Provider> 
)
};
