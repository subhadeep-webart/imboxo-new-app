// /email-verify

/* API FOR THE SIGIN PASSWORD */
"use server";
import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";

export const resendOtp = async (payload) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.RESEND_OTP, payload, {
            skipAuth: true,
        });
        if (!response?.data?.success) {
            throw new Error(response.data.message ?? "Otp Resend Failed");
        }

        return {
            success: true,
            message: response?.data?.message ?? "Otp Resend Successfully",
        };
    } catch (error) {
        let message = "Resend Otp Failed";
        if (Array.isArray(error?.response?.data?.errors)) {
            const errorArray = error.response.data.errors;

            // Extract and join messages from each object
            message = errorArray
                .map(err => Object.values(err).join(" ")) // or `.join(", ")` if multiple keys per object
                .join(" & ");
        } else if (typeof error?.response?.data?.message === "string") {
            message = error.response.data.message;
        }
        return { success: false, message };
    }
};
