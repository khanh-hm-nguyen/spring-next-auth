"use client";

import Link from "next/link";
import Badge from "./Badge";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="max-w-3xl text-center space-y-8">
        {/* Welcoming Header */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Welcome to <br />
            <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              JWT Auth Demo
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Hi there! 👋 This is a friendly frontend interface designed to
            demonstrate a full, secure authentication flow connecting to a
            Spring Boot backend.
          </p>
        </div>

        {/* Tech Stack Badge Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          <Badge
            text="Java Spring Boot 3"
            color="bg-green-900/30 text-green-400 border-green-900"
          />
          <Badge
            text="Spring Security 6"
            color="bg-green-900/30 text-green-400 border-green-900"
          />
          <Badge
            text="JWT Tokens"
            color="bg-purple-900/30 text-purple-400 border-purple-900"
          />
          <Badge
            text="Next.js 16"
            color="bg-zinc-800 text-white border-zinc-700"
          />
          <Badge
            text="Tailwind CSS"
            color="bg-blue-900/30 text-blue-400 border-blue-900"
          />
        </div>

        {/* Instructions Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-left shadow-2xl transition-all hover:border-zinc-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-xs font-bold">
              !
            </span>
            Ready to get started?
          </h3>
          <p className="text-zinc-500 text-sm mb-4">
            Follow these simple steps to test the application securely:
          </p>
          <ol className="space-y-3 text-zinc-400 text-sm list-decimal list-inside">
            <li className="pl-2">
              <span className="text-zinc-200 font-medium">Register</span> a new
              account to generate your unique credentials.
            </li>
            <li className="pl-2">
              <span className="text-zinc-200 font-medium">Login</span> with your
              new account to receive a secure JWT Access Token.
            </li>
            <li className="pl-2">
              The token will be securely stored in your browser's{" "}
              <code className="bg-zinc-950 px-1 py-0.5 rounded text-zinc-300">
                LocalStorage
              </code>
              .
            </li>
            <li className="pl-2">
              Head over to the{" "}
              <span className="text-zinc-200 font-medium">Dashboard</span> to
              see the protected data unlocked by your token!
            </li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/login"
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-transform active:scale-95 shadow-lg shadow-white/10"
          >
            Login to Account
          </Link>
          <Link
            href="/register"
            className="px-8 py-3 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-full hover:bg-zinc-800 transition-transform active:scale-95"
          >
            Create Account
          </Link>
        </div>
      </div>

      {/* Footer / Credits */}
      <footer className="absolute bottom-6 text-zinc-600 text-xs text-center">
        <p>Built for learning & security demonstration.</p>
      </footer>
    </div>
  );
};

export default HomePage;
