import React, { useState, useEffect } from "react";
import Button from "../../components/General/Button";
import { useDataContext } from "../../context/DataContext";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { postRequest } = useDataContext();
  const { handleChange, user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await postRequest(`login`, form);

    if (result.status === "success") {
      if (!result.verified) {
        return navigate(`/email-verification?email=${form.email}`);
      }
      handleChange(result.user, result.token);
      toast.success("Login Success!");
    } else {
      toast.error("Invalid email or Password");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] max-md:min-h-[100vh]">
        <div className="col-span-1 w-full h-full flex flex-col  justify-center gap-[20px]">
          <form className="w-[400px] m-auto flex flex-col  gap-[30px] max-md:px-4" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center">
              <img src="assets/mboard.png" alt="" className="w-[150px]" />
            </div>
            <h1 className="font-bold text-[#242351] text-[30px]">Login</h1>
            <div className="flex flex-col gap-[20px]">
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full h-[50px] p-[20px] focus:outline-none focus:border-solid focus:border-[2px] focus:border-primary rounded border-[1px] border-[#ddd]"
                />
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
              </div>
              <div className="flex justify-between items-center">
                <Link to="/register" className="text-primary hover:underline">
                  Create Account
                </Link>
                <a href="#" className="text-primary">
                  Forgot Password?
                </a>
              </div>
              {/* <button className="p-[15px] bg-primary text-[#fff] rounded">
                Login
              </button> */}

              <Button type={"primary"} isLoading={loading} onClick={handleSubmit} text={"Login"}/>
            </div>
          </form>
        </div>
        <div className="lg:col-span-1 overflow-hidden h-screen max-md:hidden">
          <img
            className="w-full object-cover "
            src="assets/login-image.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Login;
