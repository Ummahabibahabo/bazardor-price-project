"use client";

import Link from "next/link";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#F7FAF7] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-[#E5F5E9]">
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#A5D6B2]" />

          <div className="text-center">
            <h1 className="text-7xl font-extrabold tracking-tight text-[#05893E]">
              404
            </h1>
            <div className="mt-2 text-3xl">🛒</div>
          </div>

          <span className="absolute -right-1 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-md">
            🥬
          </span>

          <span className="absolute -bottom-1 left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-md">
            🍅
          </span>
        </div>

        {/* Message */}
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#05893E]">
          Page Not Found
        </p>

        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#172B1D] sm:text-4xl">
          ওহ! পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mb-8 max-w-md text-base leading-7 text-gray-600">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, ঠিকানা
          পরিবর্তন হয়েছে অথবা পেজটি আর উপলব্ধ নেই।
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#05893E] px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#047332] sm:w-auto"
          >
            <FiHome size={19} />
            হোম পেজে ফিরে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-[#05893E] hover:text-[#05893E] sm:w-auto"
          >
            <FiArrowLeft size={19} />
            আগের পেজে ফিরে যান
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight text-[#05893E] transition-colors hover:text-[#047332]"
          >
            <FiSearch size={19} />
            বাজার দর
          </Link>

          <p className="mt-2 text-sm text-gray-500">
            সঠিক দামে বাজার করুন, নিশ্চিন্তে থাকুন।
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
