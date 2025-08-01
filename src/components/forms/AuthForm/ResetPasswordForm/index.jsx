"use client"
import { useState } from "react";
import { resetPasswordValidation, verifyEmailValiation } from "@/utils/formValidationSchema";
import Styles from "../../form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useResendOtpHandler from "@/hooks/useResendOtpHandler";
import Loader from "@/components/ui/Loader";
import { PASSWORD_EYE_ICON } from "@/utils/icons";
import Image from "next/image";
import useResetPasswordHandler from "@/hooks/useResetPasswordHandler";

const ResetPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { handleResetPassword, isLoading } = useResetPasswordHandler();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(resetPasswordValidation),
    });

    const onSubmit = async (data) => {
        const email = sessionStorage.getItem("emailForOTP");
        const payloadData = { ...data, email }
        await handleResetPassword(payloadData, reset);
    }
    return (
        <form className={Styles.otp_form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={Styles.title}>RESET PASSWORD</h1>
            <div className="relative w-full">
                <label className={Styles.label}>Create Password</label>
                <div className={Styles.passwordWrapper}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        className={Styles.input}
                        {...register("new_password")}
                    />
                    <span
                        className={Styles.toggle}
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        <Image src={PASSWORD_EYE_ICON.src} alt="Toggle" width={16} height={16} />
                    </span>
                </div>
                {errors.new_password && <p className={Styles.error}>{errors.new_password.message}</p>}
            </div>
            <div className="relative w-full">
                <label className={Styles.label}>Confirm Password</label>
                <div className={Styles.passwordWrapper}>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        className={Styles.input}
                        {...register("confirm_password")}
                    />
                    <span
                        className={Styles.toggle}
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                        <Image src={PASSWORD_EYE_ICON.src} alt="Toggle" width={16} height={16} />
                    </span>
                </div>
                {errors.confirm_password && <p className={Styles.error}>{errors.confirm_password.message}</p>}
            </div>
            <button
                type="submit"
                className={Styles.submitButton}
                disabled={isLoading}
            >
                {isLoading ? <Loader /> : "Submit"}
            </button>
        </form>
    )
}

export default ResetPasswordForm;