"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Navitem from "./Navitem";
import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import t from "./translate";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/status") {
      setActiveItem("Status");
    } else if (pathname === "/calendar") {
      setActiveItem("Calendar");
    } else if (pathname === "/manage-cities") {
      setActiveItem("Manage Cities");
    } else {
      setActiveItem("");
    }
  }, [pathname]);

  const handleNavItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className="flex pt-2 pr-2 pl-5 pb-2 gap-1 items-center rounded-full z-10 bg-white ">
      <div className="flex gap-9 justify-center items-center mr-8">
        <Navitem
          href="/status"
          name="Status"
          active={activeItem === "Status"}
          onClick={() => handleNavItemClick("Status")}
        />
        <Navitem
          href="/calendar"
          name="Calendar"
          active={activeItem === "Calendar"}
          onClick={() => handleNavItemClick("Calendar")}
        />
        <Navitem
          href="/manage-cities"
          name="Manage Cities"
          active={activeItem === "Manage Cities"}
          onClick={() => handleNavItemClick("Manage Cities")}
        />
      </div>
      <div className="items-center flex gap-1">
        <Menu as="div" className="relative inline-block text-left ">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="items-center flex gap-1">
                  <span>
                    <UserCircleIcon className="h-6 w-6" color="#008522" />
                  </span>
                  <ChevronDownIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-6 opacity-70`}
                    color="#A4ACB9"
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ">
                  <Menu.Item>
                    <div className="flex py-[6px] pl-3 pr-4 items-center gap-3 rounded">
                      <div className="w-9 h-9 bg-icon-bg rounded-full">
                        <UserCircleIcon
                          className="h-7 w-7 font-bold mx-1 my-1"
                          color="#008522"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-[2px]">
                        <span className="text-sm font-normal text-admin">
                          {t("admin")}
                        </span>
                        <span className="text-feed font-normal text-xs">
                          {t("email")}
                        </span>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="flex py-3 px-4 items-center self-stretch gap-3">
                      <ArrowRightOnRectangleIcon
                        className="h-5 w-5"
                        color="#DF1C41"
                      />
                      <span className="text-exit text-sm font-normal">
                        Log out
                      </span>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
