import Link from "next/link";
import React from "react";
import SaftaLogoMobile from "./SaftaLogoMobile";

type DrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type TMenu = {
  id: number;
  label: string;
  link: string;
  children: TMenu[] | null;
};

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

const Drawer: React.FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <section
      className={`fixed inset-0 z-[999] h-full transition-all duration-700 md:hidden ${
        isOpen ? "visible bg-black/60" : "invisible bg-black/0"
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`ml-auto h-full w-full space-y-10 overflow-y-auto overflow-x-hidden bg-white p-4 text-[#363636] transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center gap-x-4 min-[400px]:gap-6">
          <Link
            aria-label="safta-logo"
            onClick={() => setIsOpen(false)}
            href={`/`}
          >
            <SaftaLogoMobile />
          </Link>

          <button
            className={`inline-flex cursor-pointer rounded-full p-2 ${"ml-auto"}`}
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.99868 11.767L17.0699 18.8382C17.3057 19.0659 17.6214 19.1919 17.9492 19.189C18.2769 19.1862 18.5904 19.0547 18.8222 18.823C19.054 18.5912 19.1854 18.2777 19.1883 17.95C19.1911 17.6222 19.0651 17.3065 18.8374 17.0707L11.7662 9.99945L18.8374 2.9282C19.0651 2.69245 19.1911 2.3767 19.1883 2.04895C19.1854 1.72121 19.054 1.40769 18.8222 1.17593C18.5904 0.944171 18.2769 0.81271 17.9492 0.809862C17.6214 0.807014 17.3057 0.933007 17.0699 1.1607L9.99868 8.23195L2.92743 1.1607C2.69062 0.938635 2.3767 0.817411 2.05209 0.822682C1.72749 0.827953 1.41767 0.959306 1.18819 1.18895C0.958714 1.41859 0.82758 1.7285 0.822539 2.05311C0.817497 2.37771 0.938944 2.69155 1.16118 2.9282L8.23118 9.99945L1.15993 17.0707C1.04054 17.186 0.945315 17.3239 0.879804 17.4764C0.814293 17.629 0.77981 17.793 0.778368 17.959C0.776925 18.1249 0.808552 18.2895 0.871403 18.4431C0.934254 18.5968 1.02707 18.7363 1.14444 18.8537C1.2618 18.9711 1.40137 19.0639 1.55499 19.1267C1.70861 19.1896 1.87321 19.2212 2.03918 19.2198C2.20516 19.2183 2.36918 19.1838 2.52169 19.1183C2.67419 19.0528 2.81212 18.9576 2.92743 18.8382L9.99868 11.767Z"
                fill="url(#paint0_linear_1019_16247)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1019_16247"
                  x1="9.98332"
                  y1="0.809814"
                  x2="9.98332"
                  y2="19.2198"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4EBB78" />
                  <stop offset="1" stopColor="#27AAE1" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm"></div>

        {/* Navigation Menus */}
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>
    </section>
  );
};

const Navigation = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openedMenuIndex, setOpenedMenuIndex] = React.useState<number | null>(
    null
  );

  React.useEffect(() => {
    if (!isOpen) {
      setOpenedMenuIndex(null);
    }
  }, [isOpen]);

  return (
    <nav className={`tracking-wider `}>
      <ul className="space-y-4">
        {NavigationMenus?.map((menu, index) => {
          const transitionDelay = `${(index + 1) * 100 + 200}ms`;
          const translateXValue = isOpen ? "0px" : `${(index + 1) * 10 + 20}px`;
          const commonClasses = isOpen
            ? `translate-x-0 transition-transform duration-200 ease-linear border-[#BBBBBB33] ${
                NavigationMenus?.length - 1 !== index && "border-b"
              }`
            : `translate-x-[calc(${(index + 1) * 10 + 20}px)]`;
          const commonStyles = {
            transitionDelay: isOpen ? transitionDelay : "700ms",
            transform: `translateX(${translateXValue})`,
          };

          return menu.children ? (
            <li
              key={menu.id}
              className={`${commonClasses}`}
              style={commonStyles}
            >
              <p
                onClick={() =>
                  setOpenedMenuIndex((prevState) =>
                    prevState !== index ? index : null
                  )
                }
                className="flex items-center justify-between py-1.5"
              >
                <span>{menu.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="13"
                  viewBox="0 0 25 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1019_16275)">
                    <path
                      d="M17.4907 2.58176L18.5428 3.65064L12.7228 9.3864C12.6296 9.47886 12.5189 9.55197 12.3973 9.60151C12.2757 9.65105 12.1455 9.67605 12.0142 9.67507C11.8828 9.6741 11.753 9.64715 11.6321 9.5958C11.5113 9.54445 11.4017 9.46971 11.3099 9.37586L5.57311 3.55393L6.64099 2.50186L12.0254 7.96616L17.4907 2.58176Z"
                      fill="#BBBBBB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1019_16275">
                      <rect
                        width="12"
                        height="24"
                        fill="white"
                        transform="translate(24.0889 0.178955) rotate(90.4272)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <div
                className={`grid rounded bg-slate-50 transition-all duration-500 ${
                  openedMenuIndex === index
                    ? "mb-1 grid-rows-[1fr] py-3"
                    : "grid-rows-[0fr]"
                }`}
              >
                <ul className="overflow-hidden">
                  {menu.children?.map((submenu) => {
                    return (
                      <li key={submenu.id}>
                        <Link
                          aria-label={menu.label}
                          href={menu.link}
                          className="block p-2 pl-5"
                        >
                          {menu.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ) : (
            <li key={menu.id} className={commonClasses} style={commonStyles}>
              <Link
                onClick={() => setIsOpen(false)}
                aria-label={menu.label}
                href={menu.link}
                className="block py-1.5"
              >
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Drawer;
