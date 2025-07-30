/**
 * Custom hooks responsible for customer sign up
 * @author Subhadeep Das
 * @DEF => useSignupHandler hook responsible for signup
 * @params => none
 * @returns => handleSignup function call this function when submit the clinic signup form and a loading state indicate the request and response time
 */
"use client";
import { resendOtp } from "@/server/auth/resendOtp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const useResendOtpHandler = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleResendOtp = async (resendOtpDetails, isRedirect = false) => {
    try {
      setIsLoading(true);
      const result = await resendOtp(resendOtpDetails);
      if (result?.success) {
        toast.success(result?.message ?? "Otp Send To Your Email");
        if (isRedirect) {
          sessionStorage.setItem("emailForOTP", resendOtpDetails.email);
          router.push("/verify-otp");
        }
      } else {
        toast.error(result?.message ?? "Otp Send Failed");
      }
    } catch (error) {
      const errorMessage =
        error?.message ?? "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleResendOtp, isLoading };
};

export default useResendOtpHandler;
