"use client";

import styles from "../authform.module.scss";
import { useState } from "react";
import { PASSWORD_EYE_ICON } from "@/utils/icons";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidationSchema } from "@/utils/formValidationSchema";
import useLoginHandler from "@/hooks/useLoginHandler";
import Link from "next/link";
import Loader from "@/components/ui/Loader";



export default function LoginForm() {
    const { handleLogin, isLoading } = useLoginHandler();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(loginFormValidationSchema),
    });

    const onSubmit = (data) => {
        handleLogin(data,reset)
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.title}>Sign In</h1>

            <label className={styles.label}>Email or Mobile Number</label>
            <input
                type="text"
                placeholder="Enter Email or Number"
                className={styles.input}
                {...register("email")}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}

            <label className={styles.label}>Password</label>
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

            <div className={styles.forgotWrapper}>
                <Link href="/forgot-password" className={styles.forgotLink}>
                    Forgot Password?
                </Link>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isLoading}>{isLoading ? <Loader/> : "Submit"}</button>

            <div className={styles.orDivider}>Or</div>

            <button type="button" className={styles.codeButton} disabled={isLoading}>Use a Sign In Code</button>

            <p className={styles.terms}>
                By continuing, you agree to the Imboxo{" "}
                <Link href="#">Conditions of Use</Link> and <Link href="#">Privacy Notice</Link>.
            </p>

            <p className={styles.signup}>
                New to Imboxo? <Link href="/sign-up">Sign up now.</Link>
            </p>
        </form>
    );
}
