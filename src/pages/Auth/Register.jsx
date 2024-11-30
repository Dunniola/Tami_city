import React, { useState, useEffect } from "react";
import Button from "../../components/General/Button";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PillSelect from "../../components/General/PillSelect";
import Progressbar from "../../components/General/Progressbar";

const Register = () => {
  const navigate = useNavigate();
  const { postRequestFeedback } = useDataContext();
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [form, setForm] = useState({
    // name: "",
    role: "",
    email: "",
    password: "",
    referral_code: "",

    // client_url: window.location.origin,
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const [errors, setErrors] = useState(false);
  const [dbErrors, setDbErrors] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleInputChange2 = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    setErrors(false);
    if (activeStep === 1) {
      if (form.role === "") {
        isValid = false;
        setErrors(true);
      }
    }

    if (activeStep === 2) {
      if (form.email === "") {
        isValid = false;
        setErrors(true);
      }
      if (form.password === "") {
        isValid = false;
        setErrors(true);
      }
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFilled = validate();
    if (!isFilled) {
      return toast.error("Please fill all fields!");
    }

    setLoading(true);

    const result = await postRequestFeedback(`register`, form);

    if (result.status === "success") {
      toast.success("Success!");
      navigate(`/email-verification?email=${result.user.email}`);
    } 
    else if (result.errors) {
        setDbErrors(result.errors);
    }
    else {
      toast.error("Error");
    }   
    setLoading(false);
  };

  const handleNext = (e = false) => {
    if (e) {
      e.preventDefault();
    }
    const isFilled = validate();
    if (!isFilled) {
      return toast.error("Please fill all fields!");
    }
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setActiveStep((prevStep) => prevStep - 1);
  };
  return (
    <>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] max-md:min-h-[80vh]">
        <div className="col-span-1 w-full h-full flex flex-col  justify-center gap-[20px]">
          <form className="w-[400px] m-auto flex flex-col  gap-[30px] max-md:px-4">
            <div className="flex justify-center items-center">
              <img
                src="assets/mboard.png"
                alt=""
                className="w-[120px]"
              />
            </div>
            <h1 className="font-bold text-[#242351] text-[30px]">
              Create an Account
            </h1>
            <div className="flex flex-col gap-[20px]">
              {activeStep === 1 && (
                <>
                  <div className="mb-4">
                    <Progressbar value={30} />
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    {/* <PillSelect
                      name={"role"}
                      value={3}
                      text={"User"}
                      selected={form.role}
                      onChange={handleInputChange2}
                    /> */}
                    <PillSelect
                      name={"role"}
                      value={2}
                      text={"Advertiser"}
                      selected={form.role}
                      onChange={handleInputChange2}
                    />
                    <PillSelect
                      name={"role"}
                      value={4}
                      text={"Publisher"}
                      selected={form.role}
                      onChange={handleInputChange2}
                    />
                  </div>
                  {errors && form.role === "" ? (
                    <p className="text-sm pt-1 pl-2 text-red-600">
                      *Required field
                    </p>
                  ) : null}

                  {/* <div>
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full h-[50px] p-[20px] focus:outline-none focus:border-solid focus:border-[2px] focus:border-primary rounded border-[1px] border-[#ddd]"
                    />
                    {errors && form.name === "" ? (
                      <p className="text-sm pt-1 pl-2 text-red-600">
                        *Required field
                      </p>
                    ) : null}
                  </div> */}

                  <div className="flex gap-1 items-center text-sm">
                    <span href="#" className="text-gray-500">
                      Already have an account
                    </span>
                    <Link to="/login" className="text-primary underline">
                      Login here
                    </Link>
       
                  </div>

                  <Button
                    isLoading={loading}
                    onClick={handleNext}
                    text={"Next"}
                    type={"primary"}
                    tailwindClass={"bg-primary border-primary h-[50px] rounded"}
                  />
                </>
              )}

              {activeStep === 2 && (
                <>
                  <div className="mb-4">
                    <Progressbar value={60} />
                  </div>
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="w-full h-[50px] p-[20px] focus:outline-none focus:border-solid focus:border-[2px] focus:border-primary rounded border-[1px] border-[#ddd]"
                    />
                    {errors && form.email === "" ? (
                      <p className="text-sm pt-1 pl-2 text-red-600">
                        *Required field
                      </p>
                    ) : null}
                    {dbErrors && dbErrors?.email ? (
                      <p className="text-sm pt-1 pl-2 text-red-600">
                        *{dbErrors.email[0]}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleInputChange}
                      className="w-full h-[50px] p-[20px] focus:outline-none focus:border-solid focus:border-[2px] focus:border-primary rounded border-[1px] border-[#ddd]"
                    />
                    {errors && form.password === "" ? (
                      <p className="text-sm pt-1 pl-2 text-red-600">
                        *Required field
                      </p>
                    ) : null}
                    {dbErrors && dbErrors?.password ? (
                      <p className="text-sm pt-1 pl-2 text-red-600">
                        *{dbErrors.password[0]}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="">Referral Code (optional)</label>
                    <input
                      type="text"
                      name="referral_code"
                      value={form.referral_code}
                      onChange={handleInputChange}
                      className="w-full h-[50px] p-[20px] focus:outline-none focus:border-solid focus:border-[2px] focus:border-primary rounded border-[1px] border-[#ddd]"
                    />

                  </div>
                  <div className="flex gap-1 items-center text-sm">
                    <span href="#" className="text-gray-500">
                      Already have an account
                    </span>
                    <Link to="/login" className="text-primary underline">
                      Login here
                    </Link>
       
                  </div>
                  {/* <button className="p-[15px] bg-primary border-primary text-[#fff] rounded">
                  Login
                </button> */}
                  <div className="flex gap-3">
                    <Button
                      onClick={handlePrev}
                      text={"Previous"}
                      type={"secondary"}
                    />
                    <Button
                      isLoading={loading}
                      onClick={handleSubmit}
                      text={"Get Started"}
                      type={"primary"}
                    />
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
        <div className="lg:col-span-1 overflow-hidden h-screen max-md:hidden">
          <img
            className="w-full object-cover "
            src="/assets/login-image.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Register;
