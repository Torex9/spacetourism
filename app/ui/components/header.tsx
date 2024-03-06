"use client";
import { useState } from "react";

import { usePathname } from "next/navigation";
import clsx from "clsx";

interface HeaderPropTypes {
  logoSrcurl: string;
  menuIconUrl: string;
  closeMenuIconUrl: string;
  links: { id: string; text: string; url: string }[];
}

const Header = ({
  logoSrcurl,
  menuIconUrl,
  closeMenuIconUrl,
  links,
}: HeaderPropTypes) => {
  const [buttonClick, setButtonClick] = useState(false);
  const pathname = usePathname();

  function handleClick() {
    setButtonClick(!buttonClick);
  }

  return (
    <header className="max-w-full mt-7 ml-5 relative  z-10 mb-[50px] md:max-w-full md:mt-0 md:h-20 md:flex md:items-center md:mb-12 lg:top-9 xl:top-9 ">
      <img
        src={logoSrcurl}
        alt="Page logo"
        className="md:w-[48px] md:h-[48px]"
      />
      {/* div below is the line that stretches between the header and the nav bar */}
      <div className="hidden md:hidden lg:block lg:bg-white/30 lg:w-full lg:h-[1px] lg:ml-24 lg:mr-[720px]"></div>
      <button
        onClick={handleClick}
        id="open-menu-btn"
        className=" md:hidden xl:hidden bg-transparent border-none hover:cursor-pointer absolute right-3 top-[13px]"
      >
        <img src={menuIconUrl} alt="Icon menu" />
      </button>

      {/*Nav below is hidden */}
      <nav
        className={`${
          buttonClick ? "" : "hidden"
        }  w-[70vw] max-w-[300px] h-screen fixed z-10 pt-[150px] pl-10 right-0 top-0 backdrop-blur-xl md:inline-block md:absolute md:h-auto md:p-0 `}
      >
        <button
          onClick={handleClick}
          id="close-menu-btn"
          className="md:hidden bg-transparent border-none hover:cursor-pointer absolute right-7 top-10 "
        >
          <img src={closeMenuIconUrl} alt="Icon menu close" />
        </button>
        <ul className=" md:flex md:absolute md:gap-9  md:right-0 md:px-10 md:top-0 md:h-20   md:pt-6 md:bg-white/5 md:backdrop-blur-lg lg:px-36 lg:pt-0 ">
          {links.map((link, index) => (
            <li key={index} className="list-none mb-[25px] md:mb-0 md:h-full">
              <a
                className={clsx(
                  "no-underline text-white hover:text-red-400 md:h-full md:py-7 xl:flex xl:items-center xl:justify-center lg:flex lg:items-center lg:justify-center ",
                  {
                    " md:border-white md:border-b-2 text-red-600":
                      pathname === link.url,
                  }
                )}
                href={link.url}
              >
                <span className="mr-4 font-barlow font-bold text-base tracking-widest md:hidden xl:block lg:block">
                  {link.id}
                </span>
                <span className="font-barlow tracking-wide_xl text-base font-light md:text-sm">
                  {link.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
