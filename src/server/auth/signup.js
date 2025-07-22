/* API FOR THE SIGNUP CLINIC */
"use server"
import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";


export const signup = async (payload) => {
    try {
        const response = await axiosInstance.post(
            API_ENDPOINTS.SIGNUP,
            payload,
            {
                skipAuth: true,
            }
        );
        console.log("Response=========================>",response);
        if (!response.data.success) {
            throw new Error(response.data.message ?? "Sign-up failed");
        }

        return { success: true, message: response?.data?.message ?? "Account Created Successfully" };
    } catch (error) {
        const errorMessage =
            error?.response?.data?.message ?? "Sign-up failed";
        return { success: false, message: errorMessage };
    }
};

