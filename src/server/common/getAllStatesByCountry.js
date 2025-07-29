"use server";

import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";

export const getAllStatesByCountry = async (country_id) => {
    try {
        const response = await axiosInstance.get(`${API_ENDPOINTS.GET_STATE_BY_COUNTRY_ID}/${country_id}`, {
            skipAuth: false,
        });

        if (response.data?.success === false) {
            throw new Error("Failed to fetch movie api");
        }

        return response?.data?.data;
    } catch (error) {
        console.log("Error fetching user details:", error);
        return [];
    }
};
