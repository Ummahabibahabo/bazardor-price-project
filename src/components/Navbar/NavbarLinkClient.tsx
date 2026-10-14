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
    <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
      <div className="flex items-center gap-3 md:gap-5 w-max">
        {data.map((navData) => {
          return (
            <Link
              className={
                pathname === `/category/${navData.slug}`
                  ? "text-sm font-semibold text-white px-3 py-2 bg-[#05893E] rounded-xl whitespace-nowrap"
                  : "text-sm font-semibold text-[#1D271F] px-3 py-2 whitespace-nowrap hover:bg-green-50 rounded-xl"
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
    </div>
  );
};

export default NavbarLinkClient;
