import Link from "next/link";
import NavbarLinkClient from "./NavbarLinkClient";

interface NavLinkType {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}
const NavLink = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data: NavLinkType[] = await res.json();

  return (
    <div className="border-2 border-gray-200 ">
      <NavbarLinkClient data={data}></NavbarLinkClient>
    </div>
  );
};

export default NavLink;
