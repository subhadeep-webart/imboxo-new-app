"use server";

import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";

export const getMoviesByGenre = async (paylod) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.GET_ALL_MOVIES_BY_GENRE, paylod, {
            skipAuth: true,
        });

        if (response.data?.success === false) {
            throw new Error("Failed to fetch movie api");
        }

        return response?.data?.data ?? [];
    } catch (error) {
        console.log(error);
        return [];
    }
};
