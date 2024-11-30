import React, { useEffect, useState } from "react";
import Button from "../../components/General/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Progressbar from "../../components/General/Progressbar";
import useCountdown from "../../hooks/useCountdown";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";
import Loading from "../../components/General/Loading";
import useEmailVerification from "../../hooks/AuthHooks/useEmailVerification";
import OtpInput from "react-otp-input";

const EmailSent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email").replace(/ /g, '+');

  const { loading, otp, handleOtp, handleSubmit, handleTryAgain, secondsLeft } =
    useEmailVerification(email);

  return (
    <>
      {loading && <Loading />}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] max-md:min-h-[80vh]">
          <div className="flex justify-center items-center h-full w-full lg:col-span-1">

          <div className="bg-white px-4 lg:px-14 pt-16 text-primary">
            <h1 className="text-2xl font-bold mb-6">Verify Email</h1>

            <p className="py-5">
              we have sent a verification code to{" "}
              <span className="text-secondary">
                {email}
              </span>
            </p>
            <form autoComplete="off">
              <div className="mb-5">
                <label htmlFor="" className="text-gray-500 text-xs mb-2">
                  Enter OTP <span className="text-secondary">*</span>
                </label>
                <div className="flex justify-center items-center">
                  <OtpInput
                    value={otp}
                    onChange={handleOtp}
                    numInputs={4}
                    renderSeparator={<span className="text-gray-100">--</span>}
                    renderInput={(props) => (
                      <input
                        {...props}
                        className="bg-[#EAF0F7] text-black rounded-lg text-5xl w-20"
                      />
                    )}
                  />
                </div>
              </div>

              <Button text={"Verify"} type={"primary"} onClick={handleSubmit}/>
            </form>

            <button
              onClick={handleTryAgain}
              disabled={secondsLeft > 0}
              className="underline text-xs py-4"
            >
              {secondsLeft > 0 ? (
                <>Resend Code in ({secondsLeft} seconds)</>
              ) : (
                <>Resend Code</>
              )}
            </button>

            {/* continue with socias section */}

          </div>
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

export default EmailSent;
