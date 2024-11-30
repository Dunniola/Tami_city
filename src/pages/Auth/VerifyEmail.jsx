import React, { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import { useLocation, useNavigate } from "react-router-dom";  
import toast from "react-hot-toast";
import Loading from "../../components/General/Loading";
import { useAuthContext } from "../../context/AuthContext";

const VerifyEmail = () => {
  const { postRequest } = useDataContext();
  const { handleChange, user} = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const token = queryParams.get("token");

  const handleVerify = async () => {
    setLoading(true);
    const result = await postRequest(`verify-email`, {
      email: email,
      token: token,
    });
    if (result.status === "success") {
      setStatus("success");
        handleChange(result.user, result.token);
    } else {
      toast.error("Unable to verify email");
      setStatus("fail");
    }
    setLoading(false);
  };
  useEffect(() => {
    handleVerify();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user])
  

  return (
    <>
      {loading && <Loading />}

      {status === "success" && <Success />}
      {status === "fail" && <Cancel />}
    </>
  );
};

const Success = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <img className="w-[100px]" src="/checked.png" alt="" />

          <h3 className="text-gray-600 font-semibold text-xl text-center">
            Email Verified Successfully
          </h3>
          <p className="text-sm text-center text-gray-500">
            if you have any issues or enquiry please visit{" "}
            <a href="https://neovarsity.com/support" className="underline">
              {" "}
              neovarsity.com/support
            </a>{" "}
            so we can assist you
          </p>
        </div>
      </div>
    </>
  );
};
const Cancel = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <img className="w-[100px]" src="/cancel.png" alt="" />

          <h3 className="text-gray-600 font-semibold text-xl text-center">
            Unable to verify Email
          </h3>
          <p className="text-sm text-center text-gray-500">
            if you have any issues or enquiry please visit{" "}
            <a href="https://neovarsity.com/support" className="underline">
              {" "}
              neovarsity.com/support
            </a>{" "}
            so we can assist you
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
