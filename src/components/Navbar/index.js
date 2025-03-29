"use client";

import Logo from "../Logo";

import { NavbarMenu } from "./Menu";
import { MobileMenu } from "./MobileMenu";
import useMobileView from "@/hooks/useMobileView";

const Navbar = () => {
  const isMobile = useMobileView();

  return (
    <header>
      <nav className="fixed z-[9999] left-1/2 -translate-x-1/2 max-w-[950px] px-10 h-20 lg:h-24 w-full top-0 lg:top-10 shadow-md flex justify-start items-center lg:rounded-full rounded-none bg-background">
        <div className="w-full flex justify-between items-center">
          {/* LOGO KABINET */}
          <Logo isMobile={isMobile} />

          {/* NAVBAR MENU a*/}
          {isMobile ? <MobileMenu /> : <NavbarMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
