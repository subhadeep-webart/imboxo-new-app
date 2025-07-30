"use client";
import { verifyEmailValiation } from "@/utils/formValidationSchema";
import Styles from "../../form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useResendOtpHandler from "@/hooks/useResendOtpHandler";
import Loader from "@/components/ui/Loader";

const ForgotPasswordForm = () => {
  const { handleResendOtp, isLoading } = useResendOtpHandler();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifyEmailValiation),
  });

  const onSubmit = async (data) => {
    await handleResendOtp(data, true, true);
  };
  return (
    <form className={Styles.otp_form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={Styles.title}>Forgot Password</h1>
      <div className="relative w-full">
        <label className={`${Styles.label} !mt-0`}>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          className={Styles.input}
          {...register("email")}
        />
        {errors.email && <p className={Styles.error}>{errors.email.message}</p>}
      </div>
      <button
        type="submit"
        className={Styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : "Submit"}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
