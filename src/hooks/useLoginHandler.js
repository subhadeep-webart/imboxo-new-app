/**
 * Custom hooks responsible for login
 * @DEF => useLoginHandler hook responsible for login 
 * @params => none
 * @returns => handleLogin function call this function when submit the login form and a loading state indicate the request and response time
 */
"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import { login } from "@/server/auth/login";
import { useRouter } from "next/navigation";

const useLoginHandler = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async (loginDetails, reset) => {
        try {
            setIsLoading(true);
            const result = await login(loginDetails);
            console.log("The Result======>", result);
            if (result?.success) {
                toast.success(result?.message);
                reset();
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userDetails",JSON.stringify(result?.details));
                router.push("/profile");
            } else {
                toast.error(result?.message ?? "Something went wrong");
            }
        } catch (error) {
            const errorMessage = error?.message ?? "Something went wrong. Please try again.";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return { handleLogin, isLoading }
}

export default useLoginHandler;