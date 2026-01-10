"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { RegisterRequest } from "@/types/auth";

const RegisterPage = () => {
  const [formData, setFormData] = useState<RegisterRequest>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // The service handles token storage automatically
      await authService.register(formData);
      router.push("/dashboard");
    } catch (err) {
      setError("Registration failed. Email might be in use.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // Main Background: Pure Black
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      {/* Card Container */}
      <div className="w-full max-w-md p-8 bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-zinc-400">Join us to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error Banner */}
          {error && (
            <div className="p-3 text-sm text-red-400 bg-red-900/20 border border-red-900 rounded-lg text-center">
              {error}
            </div>
          )}

          {/* First & Last Name Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                First Name
              </label>
              <input
                name="firstname"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                Last Name
              </label>
              <input
                name="lastname"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Doe"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Email Address
            </label>
            <input
              name="email"
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="name@example.com"
              type="email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Password
            </label>
            <input
              name="password"
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="••••••••"
              type="password"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all 
              ${
                loading
                  ? "bg-zinc-700 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-900/20"
              }`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-blue-500 hover:text-blue-400 hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
