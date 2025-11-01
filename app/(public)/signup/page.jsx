"use client";
import React, { useState } from "react";
import { Mail, Lock, User, UserPlus } from "lucide-react";
import Title from "@/components/Title";
import { useRouter } from "next/navigation"; // ✅ Correct hook for App Router
import toast from "react-hot-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Signup successful! 🎉");
        router.push("/login");
      } else {
        toast.error(data.message || "Signup failed.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    toast("Google signup clicked (not yet implemented)");
  };

  return (
    <div className="flex flex-col items-center mx-4 my-20">
      <Title
        title="Create an Account"
        description="Join KiniCart to start investing in farms, track your progress, and enjoy exclusive offers."
        visibleButton={false}
      />

      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 bg-white shadow-md p-8 rounded-2xl w-full max-w-md mt-10 border border-slate-100"
      >
        {/* Full Name */}
        <div className="flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-full border border-slate-200">
          <User size={18} className="text-slate-600" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent outline-none text-sm"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

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

        {/* Signup Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-105 active:scale-95 transition disabled:opacity-70"
        >
          <UserPlus size={18} />
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Google Signup */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-2 font-medium border border-slate-200 text-green-500 px-7 py-3 rounded-full hover:bg-slate-50 transition bg-white"
        >
          Continue with Google
        </button>

        {/* Links */}
        <div className="flex justify-between text-sm text-slate-600 mt-3">
          <a href="/login" className="hover:text-green-600">
            Already have an account? Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
