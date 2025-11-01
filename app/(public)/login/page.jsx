"use client";

import axios from "axios";
import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAuth from "@/lib/hook/useAuth";

const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

const Login = () => {
  const { setAuth, setAccessToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        `${apiURL}/authenticate`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Required for HttpOnly refresh cookie
        }
      );

      const data = res.data;

      if (!data || !data.token || !data.user) {
        toast.error("Invalid server response: missing token or user data.");
        return;
      }

      // ✅ Store user and token in global context
      setAuth(data.user);
      setAccessToken(data.token);

      toast.success(`Welcome back, ${data.user.fullname || "User"}!`);
      router.push("/"); // redirect to homepage
    } catch (err) {
      console.error("Login error:", err);

      if (err.response) {
        const { status, data } = err.response;
        if (status === 401) {
          toast.error(data?.error || "Invalid email or password.");
        } else if (status === 422) {
          toast.error("Please fill all fields correctly.");
        } else if (status >= 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error(data?.error || "Login failed.");
        }
      } else if (err.request) {
        toast.error("No response from server. Is it running?");
      } else {
        toast.error(err.message || "Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mx-4 my-20">
      <Title
        title="Welcome Back"
        description="Login to your account to continue farming, track your investments, and access exclusive deals."
        visibleButton={false}
      />

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 bg-white shadow-md p-8 rounded-2xl w-full max-w-md mt-10 border border-slate-100"
      >
        {/* Email */}
        <div className="flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-full border border-slate-200">
          <Mail size={18} className="text-slate-600" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-transparent outline-none text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-full border border-slate-200">
          <Lock size={18} className="text-slate-600" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`flex items-center justify-center gap-2 font-medium bg-green-500 text-white px-7 py-3 rounded-full transition ${
            isLoading
              ? "opacity-70 cursor-not-allowed"
              : "hover:scale-105 active:scale-95"
          }`}
        >
          {isLoading ? (
            <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : (
            <>
              <LogIn size={18} />
              Login
            </>
          )}
        </button>

        {/* Links */}
        <div className="flex justify-between text-sm text-slate-600 mt-3">
          <a href="/signup" className="hover:text-green-600">
            Create account
          </a>
          <a href="/forgot-password" className="hover:text-green-600">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
