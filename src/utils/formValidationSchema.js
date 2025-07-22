import { object, string,ref } from "yup";

export const loginFormValidationSchema = object({
    email: string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
});

export const signUpFormValidationSchema = object({
    name: string().min(2).max(20).required("Please enter your name"),
    email: string().email().required("Please enter your email"),
    password: string().min(8).required("Please enter your password"),
    confirmPassword: string()
        .required("Please confirm your password")
        .oneOf([ref("password"), null], "Password must match"),
})