"use server";

import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";
import { cookies } from "next/headers";

export const getMovieListByUserId = async () => {
    try {
        const cookieStore = await cookies();
        const user_id = cookieStore.get("_userId")?.value;
        console.log("User Id", user_id);
        if (!user_id) {
            throw new Error("No _userId token found in cookies");
            // cookieStore.getAll().forEach(cookie => {
            //     cookieStore.delete(cookie.name);
            // });

            // // Redirect to login (logout user)
            // redirect("/login");
        }

        const response = await axiosInstance.get(`${API_ENDPOINTS.GET_MOVIES_BY_USER_ID}/${user_id}`, {
            skipAuth: false,
        });

        if (response.data?.success === false) {
            throw new Error("Failed to fetch movie api");
        }

        return response?.data?.data;
    } catch (error) {
        console.log("Error fetching user details:", error);
        return {};
    }
};
