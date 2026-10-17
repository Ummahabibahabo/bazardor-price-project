"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { authClient } from "../lib/auth-client";

import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUpBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    console.log(user);
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
      redirect("/");
    }
    if (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন!");
    }
  };
  const handleGoggleSignUpBtn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  const handleGithubSignUpBtn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5F8F5] px-4 py-10">
      <div className="space-y-2 mb-6 text-center">
        <h1 className="font-bold text-2xl text-[#1D271F]">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-sm sm:text-base text-[#1D271F]">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <form
        onSubmit={handleSignUpBtn}
        className="fieldset w-full max-w-md bg-white shadow-lg border-x-2 border-x-[#05893E]/30 border-y border-y-gray-200 rounded-2xl p-5 sm:p-7 space-y-1"
      >
        {/* Name */}
        <label className="label text-black font-bold text-base">নাম</label>
        <input
          type="text"
          name="name"
          required
          className="input w-full rounded-xl border-gray-200 bg-gray-50 text-base text-black placeholder:text-black focus:border-[#05893E] focus:outline-none"
          placeholder="আপনার নাম লিখুন"
        />

        {/* Email */}
        <label className="label text-black font-bold text-base mt-2">
          ইমেইল
        </label>
        <input
          type="email"
          name="email"
          required
          className="input w-full rounded-xl border-gray-200 bg-gray-50 text-base text-black placeholder:text-black focus:border-[#05893E] focus:outline-none"
          placeholder="আপনার ইমেইল লিখুন"
        />

        {/* Password */}
        <label className="label text-black font-bold text-base mt-2">
          পাসওয়ার্ড
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            minLength={8}
            className="input w-full rounded-xl border-gray-200 bg-gray-50 pr-12 text-base text-black placeholder:text-black focus:border-[#05893E] focus:outline-none"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#05893E]"
            aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
          >
            {showPassword ? <FiEye size={19} /> : <FiEyeOff size={19} />}
          </button>
        </div>

        {/* Confirm Password */}
        <label className="label text-black font-bold text-base mt-2">
          পাসওয়ার্ড নিশ্চিত করুন
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            required
            minLength={8}
            className="input w-full rounded-xl border-gray-200 bg-gray-50 pr-12 text-base text-black placeholder:text-black focus:border-[#05893E] focus:outline-none"
            placeholder="পাসওয়ার্ড আবার লিখুন"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#05893E]"
            aria-label={
              showConfirmPassword
                ? "নিশ্চিত পাসওয়ার্ড লুকান"
                : "নিশ্চিত পাসওয়ার্ড দেখুন"
            }
          >
            {showConfirmPassword ? <FiEye size={19} /> : <FiEyeOff size={19} />}
          </button>
        </div>

        {/* Create Account */}
        <button
          type="submit"
          className="btn w-full text-white bg-[#05893E] hover:bg-[#047532] border-none rounded-xl mt-5"
        >
          অ্যাকাউন্ট তৈরি করুন
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-3">
          <div className="h-px flex-1 bg-gray-200" />
          <p className="text-sm text-gray-500">অথবা</p>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* GitHub and Google Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* GitHub */}
          <button
            onClick={handleGithubSignUpBtn}
            type="submit"
            className="btn flex-1 bg-black text-white border-black hover:bg-gray-800 rounded-xl"
          >
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.35,6.15C18,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
            Login with GitHub
          </button>

          {/* Google */}
          <button
            onClick={handleGoggleSignUpBtn}
            type="submit"
            className="btn flex-1 bg-white text-black border-[#e5e5e5] hover:bg-gray-50 rounded-xl"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Login with Google
          </button>
        </div>

        {/* Sign In */}
        <p className="text-center text-sm mt-5 text-[#1D271F]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signIn"
            className="text-[#05893E] font-semibold hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
