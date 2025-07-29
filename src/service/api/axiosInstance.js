"use server";

import axios from "axios";
import { BASE_URL } from "@/utils/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = config.headers || {};
    const cookieStore = await cookies();
    const token = cookieStore.get("_token")?.value;


    if (!config.skipAuth) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete config.headers.Authorization;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(
      error instanceof Error ? error : new Error("Unknown Axios request error")
    );
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        // const cookieStore = await cookies();
        // cookieStore.getAll().forEach((cookie) => {
        //   cookieStore.delete(cookie.name);
        // });
        // redirect("/");
      } catch (err) {
        console.error("Error handling 401 response:", err);
      }
    }

    if (error instanceof Error) {
      return Promise.reject(error);
    } else {
      return Promise.reject(new Error(JSON.stringify(error)));
    }
  }
);

export default axiosInstance;
