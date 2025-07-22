/**
 * Custom hooks responsible for customer sign up
 * @author Subhadeep Das
 * @DEF => useSignupHandler hook responsible for signup 
 * @params => none
 * @returns => handleSignup function call this function when submit the clinic signup form and a loading state indicate the request and response time
 */

import { signup } from "@/server/auth/signup";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignupHandler = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSignup = async (signupDetails,reset) => {
        try {
            setIsLoading(true);
            const result = await signup(signupDetails);
            if (result?.success) {
                reset();
            } else {
                toast.error(result?.message ?? "Sign up Failed");
            }
        } catch (error) {
            const errorMessage=error?.message ?? "Something went wrong. Please try again." 
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return { handleSignup, isLoading }
}

export default useSignupHandler;