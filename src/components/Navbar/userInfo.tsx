"use client";

import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

const UserInfoPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);
  const handleSignOutBtn = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div className="relative group">
          {/* নাম এবং ছবির জায়গা */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-[100px] w-[100px] rounded-xl  bg-gray-200 flex items-center justify-center overflow-hidden s">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className=" object-cover"
                />
              ) : (
                <span className="font-bold text-black">{user.name}</span>
              )}
            </div>

            <p className="font-semibold text-[#1D271F]">{user.name}</p>

            <BiChevronDown
              size={16}
              className="text-gray-500 transition-transform group-hover:rotate-180"
            />
          </div>

          {/* Hover করলে এই অংশ দেখাবে */}
          <div className="hidden group-hover:block absolute right-0 top-full pt-2 z-50 w-60">
            <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-3 text-center">
                <div className="min-w-0 text-center">
                  <p className="font-semibold text-[#1D271F] truncate">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
              </div>

              <button
                onClick={handleSignOutBtn}
                className="mt-3 w-full text-left text-red-600 hover:bg-red-50 rounded-lg px-3 py-2 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link href="/signIn">
            <button className="font-semibold text-[#1D271F]">সাইন ইন</button>
          </Link>

          <Link href="/signUp">
            <button className="px-3 py-2 rounded-xl bg-[#05893E] text-white font-semibold">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfoPage;
