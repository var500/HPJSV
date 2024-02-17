"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";
import banner from "@/assets/jsv.png";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-blue-400 text-lg"
        placeholder={undefined}
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-blue-400 text-lg"
        placeholder={undefined}
      >
        <HoverCard openDelay={2} closeDelay={1}>
          <HoverCardTrigger className="flex gap-2 items-center hover:cursor-pointer hover:text-blue-400">
            Citizen Services
            <ChevronDown size={20} />
          </HoverCardTrigger>
          <HoverCardContent className="relative w-[21rem] z-30">
            <div className="flex flex-col gap-4 text-lg">
              <Link
                href={""}
                className="hover:text-blue-400 font-bold hover:cursor-pointer"
              >
                Generated Water Bill Locations
              </Link>
              <Link
                href={"/pay-water-bill"}
                className="hover:text-blue-400 font-bold hover:cursor-pointer"
              >
                Pay IPH Water Bills Online
              </Link>
              <Link
                href={""}
                className="hover:text-blue-400 font-bold hover:cursor-pointer"
              >
                Apply Online (Water Connection)
              </Link>
              <Link
                href={""}
                className="hover:text-blue-400 font-bold hover:cursor-pointer"
              >
                Water Connection Application Status
              </Link>
              <Link
                href={""}
                className="hover:text-blue-400 font-bold hover:cursor-pointer"
              >
                View STP sample Results
              </Link>
              <Link
                href={""}
                className="hover:text-blue-400 font-bold hover:cursor-pointer"
              >
                Progress of IPH Contracts
              </Link>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-blue-400 text-lg"
        placeholder={undefined}
      >
        <a href="/contact" className="flex items-center">
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-blue-400 text-lg"
        placeholder={undefined}
      >
        <a href="#" className="flex items-center">
          Login
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="flex flex-col flex-wrap">
        <div className="w-full bg-gray-800 h-6 md:h-10">
          <p className="p-2 text-white text-[10px] md:text-sm ml-4 md:ml-36">
            HIMACHAL PRADESH | हिमाचल प्रदेश
          </p>
        </div>
        <Image src={banner} alt={"banner"} />
      </div>
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-lg "
        placeholder={undefined}
      >
        <div className="flex items-center justify-end text-blue-gray-900">
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              placeholder={undefined}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </>
  );
}
