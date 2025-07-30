/**
 * Custom hooks responsible for customer sign up
 * @author Subhadeep Das
 * @DEF => useSignupHandler hook responsible for signup
 * @params => none
 * @returns => handleSignup function call this function when submit the clinic signup form and a loading state indicate the request and response time
 */
"use client";
import { verifyEmail } from "@/server/auth/verifyEmail";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const useVerifyEmailHandler = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleVerifyEmail = async (emailVerificationDetails) => {
    console.log("Email Verification", emailVerificationDetails);
    try {
      setIsLoading(true);
      const result = await verifyEmail(emailVerificationDetails);
      if (result?.success) {
        sessionStorage.clear();
        toast.success(result?.message ?? "Email Verification Completed");
        router.push("/login");
      } else {
        toast.error(result?.message ?? "Email verification Failed");
      }
    } catch (error) {
      const errorMessage =
        error?.message ?? "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleVerifyEmail, isLoading };
};

export default useVerifyEmailHandler;
