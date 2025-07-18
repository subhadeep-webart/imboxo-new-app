"use server";

import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";

export const getMovies = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_MOVIE, {
      skipAuth: true,
    });

    if (response.data?.success === false) {
      throw new Error("Failed to fetch movie api");
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
