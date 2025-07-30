"use client";
import OtpInput from "react-otp-input";
import Styles from "../../form.module.scss";
import { useState, useEffect } from "react";
import useVerifyEmailHandler from "@/hooks/useVerifyEmailHandler";
import useResendOtpHandler from "@/hooks/useResendOtpHandler";
import toast from "react-hot-toast";
import Loader from "@/components/ui/Loader";

const VerifyOtpForm = () => {
  const { handleVerifyEmail, isLoading } = useVerifyEmailHandler();
  const { handleResendOtp, isLoading: isResendOtpLoading } =
    useResendOtpHandler();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = sessionStorage.getItem("emailForOTP");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("OTP must be exactly 6 digits.");
      return;
    }
    handleVerifyEmail({ email, otp: otp });
  };

  const handleResendOtpHandler = () => {
    handleResendOtp({ email });
  };

  return (
    <form className={Styles.otp_form} onSubmit={onSubmit}>
      <h1 className={Styles.title}>OTP Verification</h1>
      <p className={Styles.otp_instruction}>
        One Time Password (OTP) has been sent via Email to <br />
        <span>{email ? email : ""}</span>
      </p>
      <p className={Styles.otp_instruction}>
        Enter the OTP below to verify it.
      </p>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        containerStyle={Styles.otp_input_group}
        renderInput={(props) => (
          <div className={Styles.otp_input_wrapper}>
            <input {...props} />
          </div>
        )}
      />

      <button
        type="button"
        className={Styles.resend_timer}
        onClick={handleResendOtpHandler}
        disabled={isResendOtpLoading}
      >
        Resend OTP
      </button>

      <button
        type="submit"
        className={Styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : "Verify OTP"}
      </button>
    </form>
  );
};

export default VerifyOtpForm;
