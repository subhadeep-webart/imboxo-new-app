"use server";
import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";
import { revalidatePath } from "next/cache";

export const userDetailsUpdate = async (payload) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.USER_UPDATE, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            skipAuth: false,
        });
        console.log("Response======>",response);
        if (!response?.data?.success) {
            throw new Error(response.data.message ?? "User Details Update Failed");
        }
        revalidatePath("/profile");
        return {
            success: true,
            message: response?.data?.message ?? "User Details Updated Successfully",
        };
    } catch (error) {
        let message = "User Details Update Failed";
       console.log("Error=====>",JSON.stringify(error, null, 2));
        if (Array.isArray(error?.response?.data?.errors)) {
            const errorArray = error.response.data.errors;
            message = errorArray
                .map(err => Object.values(err).join(" "))
                .join(" & ");
        } else if (typeof error?.response?.data?.message === "string") {
            message = error.response.data.message;
        }
        return { success: false, message };
    }
};