"use client";

import styles from "../authform.module.scss";
import { useState } from "react";
import { PASSWORD_EYE_ICON } from "@/utils/icons";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidationSchema } from "@/utils/formValidationSchema";
import Link from "next/link";
import Loader from "@/components/ui/Loader";
import useSignupHandler from "@/hooks/useSignupHandler";

export default function SignupForm() {
    const {handleSignup,isLoading}=useSignupHandler();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(signUpFormValidationSchema),
    });

    const onSubmit = async(data) => {
       await handleSignup({role:0,...data},reset);
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.title}>Sign Up</h1>
            <div className="relative">
                <label className={styles.label}>Your Name</label>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    className={styles.input}
                    {...register("name")}
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            </div>
            <div className="relative">
                <label className={styles.label}>Email or Mobile Number</label>
                <input
                    type="text"
                    placeholder="Enter Email or Number"
                    className={styles.input}
                    {...register("email")}
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className="relative">
                <label className={styles.label}>Create Password</label>
                <div className={styles.passwordWrapper}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        className={styles.input}
                        {...register("password")}
                    />
                    <span
                        className={styles.toggle}
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        <Image src={PASSWORD_EYE_ICON.src} alt="Toggle" width={16} height={16} />
                    </span>
                </div>
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
            <div className="relative">
                <label className={styles.label}>Confirm Password</label>
                <div className={styles.passwordWrapper}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        className={styles.input}
                        {...register("confirmPassword")}
                    />
                    <span
                        className={styles.toggle}
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        <Image src={PASSWORD_EYE_ICON.src} alt="Toggle" width={16} height={16} />
                    </span>
                </div>
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
            <button type="submit" className={styles.submitButton} disabled={isLoading}>{isLoading ? <Loader /> : "Create Account"}</button>
            <p className={styles.terms}>
                By continuing, you agree to the Imboxo{" "}
                <Link href="#">Conditions of Use</Link> and <Link href="#">Privacy Notice</Link>.
            </p>
            <p className={styles.signup}>
                Already Have An Account? <Link href="#">Sign in now.</Link>
            </p>
        </form>
    );
}
