"use client";
import Image from "next/image";
import { authClient } from "../lib/auth-client";
import React from "react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOutBtn = async () => {
    await authClient.signOut();
  };
  const handleUpDateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData.entries()) as { name: string };
    const { data, error } = await authClient.updateUser({
      ...newUser,
    });
    if (data) {
      toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
    }
    if (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন!");
    }
  };
  return (
    <div>
      <h1 className="font-bold text-[#1D271F] text-[25px]">আমার প্রোফাইল</h1>
      <p className="text-[#1D271F] text-[16px]">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>

      <div className="flex items-center justify-between gap-5 mt-10 bg-white shadow-lg p-5 rounded-xl">
        <div className="flex items-center gap-4 min-w-0">
          <div className="h-[80px] w-[80px] shrink-0 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user?.name || "User"}
                width={50}
                height={50}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="font-semibold text-black text-center text-sm px-2 break-words">
                {user?.name}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <p className="font-semibold text-[#1D271F] truncate">
              {user?.name}
            </p>
            <p className="text-sm text-gray-600 break-all">{user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleSignOutBtn}
          className=" border border-red-700 shrink-0 text-red-600 hover:bg-red-50 rounded-lg px-3 py-2 transition"
        >
          ↩ সাইন আউট
        </button>
      </div>
      <div className="mt-10 bg-white shadow-lg p-5 rounded-xl">
        <form onSubmit={handleUpDateProfile} className="mt-5">
          {/* Name */}
          <label className="label text-black font-bold text-base mb-3">
            নাম
          </label>
          <input
            type="text"
            name="name"
            required
            className="input w-full rounded-xl border-gray-200 bg-gray-50 text-base text-black placeholder:text-black focus:border-[#05893E] focus:outline-none"
            placeholder="আপনার নাম লিখুন"
          />
          {/* Create Account */}
          <button
            type="submit"
            className="btn w-full text-white bg-[#05893E] hover:bg-[#047532] border-none rounded-xl mt-5"
          >
            আপডেট
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
