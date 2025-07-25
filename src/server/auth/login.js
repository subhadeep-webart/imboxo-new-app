/* API FOR THE SIGIN PASSWORD */
"use server";
import axiosInstance from "@/service/api/axiosInstance";
import { API_ENDPOINTS } from "@/service/api/endpoint";
import { cookies } from "next/headers";

export const login = async (payload) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, payload, {
      skipAuth: true,
    });
    console.log("Login Response======================>", response?.data);
    if (!response?.data?.success) {
      throw new Error(response.data.message ?? "Login Failed");
    }
    console.log("Login Response======================>", response?.data);
    const token = response?.data?.data?.token;
    const roles = response?.data?.data?.user?.roles[0]?.name;

    if (roles === 'Clinic') {

    }

    const cookieStore = await cookies();

    console.log("token", token);

    // if (roles === 'Clinic') {
    //   cookieStore.set("clinic-token", token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    //     path: "/",
    //     maxAge: 60 * 60 * 24 * 7,
    //     sameSite: "strict",
    //   });

    //   cookieStore.set("clinic_id", clinic_id, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    //     path: "/",
    //     maxAge: 60 * 60 * 24 * 7,
    //     sameSite: "strict",
    //   });
    // } else {
    //   cookieStore.set("customer-token", token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    //     path: "/",
    //     maxAge: 60 * 60 * 24 * 7,
    //     sameSite: "strict",
    //   });
    // }


    // cookieStore.set("roles", roles, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   path: "/",
    //   maxAge: 60 * 60 * 24 * 7,
    //   sameSite: "strict",
    // });

    return {
      success: true,
      roles: roles,
      message: response?.data?.message ?? "Login Successfull",
    };
  } catch (error) {
    let message = "Resend Otp Failed";
    if (Array.isArray(error?.response?.data?.errors)) {
      const errorArray = error.response.data.errors;

      // Extract and join messages from each object
      message = errorArray
        .map(err => Object.values(err).join(" ")) // or `.join(", ")` if multiple keys per object
        .join(" & ");
    } else if (typeof error?.response?.data?.message === "string") {
      message = error.response.data.message;
    }
    return { success: false, message };
  }
};
