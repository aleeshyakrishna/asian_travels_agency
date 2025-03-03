"use client";

import Link from "next/link";
import styles from "../../../_css/header_section.module.css";

type TMenu = {
  id: number;
  label: string;
  link: string;
  children: TMenu[] | null;
};

const Navigation: React.FC<{ isSticky: boolean }> = ({ isSticky }) => {
  const NavigationMenus: TMenu[] = [
    {
      id: 1,
      label: "Home",
      link: "/",
      children: null,
    },
    {
      id: 2,
      label: "About",
      link: "/about-us",
      children: null,
    },
    {
      id: 3,
      label: "Contact",
      link: "/contact",
      children: null,
    },
  ];
  return (
    <nav className="hidden text-sm md:block xl:text-lg font-medium">
      <ul className="flex items-center justify-center md:gap-x-1 lg:gap-x-28 2xl:gap-x-[3.4rem]">
        {NavigationMenus.map((menu) => {
          return (
            <li key={menu.id} className="relative group">
              <Link
                title={menu.label}
                className="flex items-center justify-center px-3 py-2 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-gray-300"
                aria-label={menu.label}
                href={menu.link}
              >
                <span className="truncate relative after:absolute after:inset-0  after:opacity-0 after:transition-all after:duration-300 group-hover:after:opacity-100">
                  {menu.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
