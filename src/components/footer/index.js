"use client";
import Image from "next/image";
import Link from "next/link";
import Social from "../Social";
import social from "@/config/social.json";
import { Meteors } from "../ui/Meteor";
import useMobileView from "@/hooks/useMobileView";

const menuItems = [
  {
    title: "Fast Link",
    menu: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Profile",
        href: "/profile",
      },
      {
        name: "Artikel",
        href: "/artikel",
      },
      {
        name: "Ormawa & UKM",
        href: "/ormawa-ukm",
      },
    ],
  },
  {
    title: "Category",
    menu: [
      {
        name: "Kajian",
        href: "/kajian",
      },
      {
        name: "Bacaan",
        href: "/bacaan",
      },
      {
        name: "Tips & Trik",
        href: "/tips-trik",
      },
      {
        name: "Informasi",
        href: "/informasi",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      id="end"
      className="relative bottom-0 left-0 z-50 base-color w-full overflow-hidden mt-20 py-10 px-5 md:px-0 antialiased text-white"
    >
      <div className="container mx-auto relative z-50">
        <div className="grid grid-cols-2 md:grid-cols-4 items-start justify-start">
          {/* Logo Kabinet */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/img/logo_3.png"
              width={160}
              height={160}
              quality={100}
              alt="Logo Kabinet"
            />
          </div>
          {/* List Menus */}
          {menuItems.map((list, i) => (
            <div key={i}>
              <h1 className="font-title text-2xl font-bold uppercase">
                {list.title}
              </h1>
              <ul className="font-title text-xl">
                <li>
                  {list.menu.map((item, j) => (
                    <Link className="block py-2" key={j} href={item.href}>
                      {item.name}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          ))}
          {/* Contact us */}
          <div className="space-y-3 mt-4 md:mt-0">
            <h1 className="font-title text-2xl font-bold uppercase">
              Ikuti Kami
            </h1>
            <Social className="text-3xl flex gap-4 " source={social} />
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <div>
            <ul className="flex gap-4">
              <li>Versi : Beta.v0.5.1</li>
            </ul>
          </div>
          <div className="w-full text-center text-sm font-body font-semibold">
            Copyright &#xA9; {new Date().getFullYear()} BEM UNISKA MAB -
            Development by{" "}
            <Link href="https://github.com/yudhistiaR" target="_blank">
              isKazumi
            </Link>
          </div>
        </div>
      </div>
      <Meteors number={100} />
    </footer>
  );
};

export default Footer;
