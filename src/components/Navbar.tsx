"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Navitem from "./Navitem";
import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import t from "./translate";

const Navbar = () => {
  return (
    <div className="flex pt-2 pr-2 pl-5 pb-2 gap-1 items-center rounded-full z-10 bg-white ">
      <div className="flex gap-9 justify-center items-center mr-8">
        <Navitem href="/" name="Status" active={true} />
        <Navitem href="/calendar" name="Calendar" active={false} />
        <Navitem href="/manage-cities" name="Manage Cities" active={false} />
      </div>
      <div className="items-center flex gap-1">
        <Menu as="div" className="relative inline-block text-left ">
          {({ open }) => (
            <>
              <div className="items-center flex gap-1">
                <span>
                  <UserCircleIcon className="h-6 w-6" color="#008522" />
                </span>
                <Menu.Button>
                  <ChevronDownIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-6 opacity-70`}
                    color="#A4ACB9"
                  />
                </Menu.Button>
              </div>
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
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
