"use server";

import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";

export const getAllLanguages = async () => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL_LANGUAGES, {
            skipAuth: true,
        });

        if (!response.data?.success) {
            throw new Error("Failed to fetch movie quality");
        }

        return response?.data?.data ?? [];
    } catch (error) {
        console.log(error);
        return [];
    }
};
