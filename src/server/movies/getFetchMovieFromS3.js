"use server";

import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";

export const getFetchMovieFromS3 = async (payload) => {
    try {
        const response = await axiosInstance.post(`${API_ENDPOINTS.GET_MOVIE_S3}`, payload, {
            skipAuth: true,
        });

        if (response.data?.success === false) {
            throw new Error("Failed to fetch movie api");
        }

        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};
