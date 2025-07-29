/**
 * Custom hooks responsible for login
 * @DEF => useLoginHandler hook responsible for login 
 * @params => none
 * @returns => handleLogin function call this function when submit the login form and a loading state indicate the request and response time
 */
"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import { userDetailsUpdate } from "@/server/users/userDetailsUpdate";

const useUserDetailsUpdate=()=>{
    const [isLoading,setIsLoading]=useState(false);
    const handleUpdateUserDetails = async (userDetails,reset) => {
        try {
            setIsLoading(true);
            const result = await userDetailsUpdate(userDetails);
            if (result?.success) {
                toast.success(result?.message);
                reset();
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
    
    return {handleUpdateUserDetails,isLoading}
}

export default useUserDetailsUpdate;