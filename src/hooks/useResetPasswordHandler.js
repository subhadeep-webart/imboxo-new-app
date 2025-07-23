/**
 * Custom hooks responsible for customer sign up
 * @author Subhadeep Das
 * @DEF => useSignupHandler hook responsible for signup 
 * @params => none
 * @returns => handleSignup function call this function when submit the clinic signup form and a loading state indicate the request and response time
 */

import { resetPassword } from "@/server/auth/resetPassword";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const useResetPasswordHandler = () => {
    const router=useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleResetPassword = async (resetPasswordDetails,reset) => {
        try {
            setIsLoading(true);
            const result = await resetPassword(resetPasswordDetails);
            if (result?.success) {
                toast.success(result?.message ?? "Reset Password Successfully");
                router.push("/login");
                sessionStorage.clear();
                reset();
            } else {
                toast.error(result?.message ?? "Reset Password Failed");
            }
        } catch (error) {
            const errorMessage=error?.message ?? "Something went wrong. Please try again." 
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return { handleResetPassword, isLoading }
}

export default useResetPasswordHandler;