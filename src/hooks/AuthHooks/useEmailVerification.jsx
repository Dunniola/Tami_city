import { useState, useEffect, useRef } from "react";
import { useCountdown } from "../useCountdown";
import { useAuthContext } from "../../context/AuthContext";
import { useDataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useEmailVerification = (email) => {
  const { tempUser, tempToken, user, handleChange } = useAuthContext();
  const { postRequest } = useDataContext();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const handleOtp = (otp) => {
    setOtp(otp);
  };
  const [loading, setLoading] = useState(false);
  const { secondsLeft, start } = useCountdown();
  //send the otp to the user
  const dataFetchedRef = useRef(false);

  const sendCode = async () => {
    setLoading(true);
    const result = await postRequest("resend-email-verification", { email });

    if (result.status === "success") {
      console.log(result);
      setLoading(false);
      return true;
    } else {
      console.log(result.message);
      setLoading(false);
      return false;
    }
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    const send = sendCode();
    if (send) {
      start(180);
      return;
    } else {
      toast.error("Error Sending Code")
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await postRequest("verify-email", {
      email: email,
      code: parseInt(otp),
    });

    console.log(otp);
    console.log(result);
    if (result.status === "success") {
      handleChange(result.user, result.token);
      toast.success("Verification Successful")
      return navigate("/dashboard")
      // if (Number(result.user.onboarded) === 0) {
      //   if (result.user.role === 2 || result.user.role === 4 || result.user.role === 4) {
      //   }
      //   // navigation.replace("SelectInterests")
      // }else{
      //   return navigate("/dashboard")
      // }
    } else {
     toast.error("Invalid or expired code");
    }
    setLoading(false);
  };

  //timeout for retrying

  //   useEffect(() => {
  //     start(180);
  //   }, []);

  const handleTryAgain = () => {
    const send = sendCode();
    if (send) {
      start(180);
    } else {
      toast.error("Error Sending Code");
    }
  };

  return {
    loading,
    otp,
    handleOtp,
    handleSubmit,
    handleTryAgain,
    secondsLeft,
  };
};

export default useEmailVerification;
