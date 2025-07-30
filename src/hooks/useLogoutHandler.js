"use client";
// hooks/useLogoutHandler.ts
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useLogoutHandler = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (!res.ok) throw new Error("Logout failed");
      localStorage.setItem("isLoggedIn", false);
      toast.success("Logout successfully");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error(error?.message ?? "Something went wrong");
    }
  };

  return handleLogout;
};
