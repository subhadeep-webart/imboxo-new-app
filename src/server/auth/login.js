/* API FOR THE SIGIN PASSWORD */
"use server";
import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (payload) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, payload, {
      skipAuth: true,
    });
    
    if (!response?.data?.success) {
      throw new Error(response.data.message ?? "Login Failed");
    }
    console.log("Login Response======================>", response?.data);
    const token = response?.data?.token;
    const user_id = response?.data?.data?.user_id;
    const cookieStore = await cookies();

    console.log("token", user_id);

    cookieStore.set("_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "strict",
    });

    cookieStore.set("_userId", user_id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "strict",
    });

    return {
      success: true,
      details:response?.data,
      message: response?.data?.message ?? "Login Successfull",
    };
  } catch (error) {
    let message = "Login Failed";
    if (Array.isArray(error?.response?.data?.errors)) {
      const errorArray = error.response.data.errors;
      message = errorArray
        .map(err => Object.values(err).join(" ")) // or `.join(", ")` if multiple keys per object
        .join(" & ");
    } else if (typeof error?.response?.data?.message === "string") {
      message = error.response.data.message;
    }
    return { success: false, message };
  }
};
