"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkClientProps {
  data: {
    icon: string;
    id: string;
    nameBn: string;
    slug: string;
  }[];
}

const NavbarLinkClient = ({ data }: NavbarLinkClientProps) => {
  const pathname = usePathname();
  return (
    <div className=" flex items-center gap-5 max-w-7xl mx-auto p-4">
      {data.map((navData) => {
        return (
          <Link
            className={
              pathname === `/category/${navData.slug}`
                ? "text-[14px] font-semibold text-white px-3 py-2 bg-[#05893E] rounded-xl"
                : "text-[14px] font-semibold text-[#1D271F]"
            }
            href={`/category/${navData.slug}`}
            key={navData.id}
          >
            <div className="flex items-center gap-2">
              <span>{navData.icon}</span>
              <p>{navData.nameBn}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarLinkClient;
