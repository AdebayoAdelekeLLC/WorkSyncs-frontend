"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { routes, opRoutes } from "@/helpers/util";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="bg-home-pattern bg-white border-r border-[#eeeeee] font-mabry">
      <div className="w-[250px] flex justify-center min-h-[80px] items-center  bg-home-pattern bg-cover bg-center">
        <Link href="/" className="my-[30px]  inline-block">
          <div className="relative w-[165px] h-[30px]">
            <Image src="/ws-logod.png" alt="the product logo" fill />
          </div>
        </Link>
      </div>
      <div className="bg-home-pattern bg-white bg-cover bg-center fixed w-[250px] p-2">
        <div className="space-y-8">
          <ul className="pt-3">
            {routes.map((route) => (
              <li
                key={route.href}
                className={`px-3 py-3 rounded-lg mb-4 last:mb-0 hover:bg-[#0097FE40] ${
                  pathname?.includes(route.href) && "bg-[#0097FE40]"
                }`}
                style={{ transition: "color 0.3s" }}
                onMouseOver={(e) => {
                  e.currentTarget
                    ?.querySelector("svg path")
                    ?.setAttribute("stroke", "#98A2B3");
                }}
                onMouseOut={(e) => {
                  e.currentTarget
                    ?.querySelector("svg path")
                    ?.setAttribute("stroke", "#98A2B3");
                }}
              >
                <Link
                  href={route.href}
                  className={`block hover:text-blue-500 truncate transition duration-150 ${
                    pathname?.includes(route.href)
                      ? "text-blue-500 hover:text-blue-500"
                      : "text-[#8F8F8F]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {route.icon}
                      <span className="text-base font-normal ml-3 duration-200">
                        {route.label}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <p className="px-2 my-[24px]">Operation</p>
            <ul>
              {opRoutes.map((route) => (
                <li
                  key={route.href}
                  className={`px-3 py-3 rounded-lg mb-4 last:mb-0 hover:bg-[#0097FE40] ${
                    pathname?.includes(route.href) && "bg-[#0097FE40]"
                  }`}
                  style={{ transition: "color 0.3s" }}
                  onMouseOver={(e) => {
                    e.currentTarget
                      ?.querySelector("svg path")
                      ?.setAttribute("stroke", "#98A2B3");
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget
                      ?.querySelector("svg path")
                      ?.setAttribute("stroke", "#98A2B3");
                  }}
                >
                  <Link
                    href={route.href}
                    className={`block hover:text-blue-500 truncate transition duration-150 ${
                      pathname?.includes(route.href)
                        ? "text-blue-500 hover:text-blue-500"
                        : "text-[#8F8F8F]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {route.icon}
                        <span className="text-base font-normal ml-3 duration-200">
                          {route.label}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
