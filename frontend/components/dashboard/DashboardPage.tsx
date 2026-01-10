"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithAuth } from "@/utils";
import { authService } from "@/services/auth.service";

const DashboardPage = () => {
  const [message, setMessage] = useState("Loading...");
  const router = useRouter();

  useEffect(() => {
    // check if user is logged in (client side check)
    if (!authService.isAuthenticated()) {
      router.push("/login");
      return; // stop execution here
    }

    // if toke exists, try to fetch the secure data
    const getData = async () => {
      try {
        const res = await fetchWithAuth("/demo-controller");
        if (res && res.ok) {
          const text = await res.text();
          setMessage(text);
        } else {
          setMessage("Access Denied");
        }
      } catch (error) {
        // If token is invalid/expired
        authService.logout();
        router.push("/login");
      }
    };
    getData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F4C430] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full text-[#FFF8E7] opacity-30"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>
      <div className="relative z-10 bg-[#FFF8E7] p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center">
        <h1 className="text-5xl font-extrabold text-[#3E2723] tracking-wider uppercase drop-shadow-md font-sans">
          Dashboard
          <span className="block text-xl font-medium mt-2 text-[#5D4037]">
            (Secure)
          </span>
        </h1>
        <div className="mt-8 p-6 bg-[#3E2723] rounded-xl text-[#FFF8E7]">
          <p className="text-lg font-semibold text-[#F4C430]">
            Backend Response:
          </p>
          <p className="mt-2 font-mono text-xl font-bold tracking-wide">
            {message}
          </p>
        </div>
        <div className="mt-10">
          <button
            onClick={handleLogout}
            className="px-8 py-3 bg-[#3E2723] text-[#F4C430] font-bold rounded-full hover:bg-[#5D4037] hover:text-[#FFF8E7] transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            LOGOUT
          </button>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;
