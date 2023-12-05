"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import t from "@/components/translate";

const SectionHeader = () => {
  const [sectionTitle, setSectionTitle] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/status") {
      setSectionTitle("Status");
    } else if (pathname === "/calendar") {
      setSectionTitle("Calendar");
    } else if (pathname === "/manage-cities") {
      setSectionTitle("Manage Cities");
    } else {
      console.log("No Pathname exists");
    }
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="text-black text-4xl tracking-tightest">
        {sectionTitle}
      </div>
      <div>
        {pathname === "/manage-cities" ? (
          <button
            type="button"
            className="rounded-md bg-green shadow-button flex gap-2 pt-2 pb-2 pr-4 pl-2 items-center justify-center"
          >
            <span>
              <PlusIcon className="h-5 w-5" color="white" />
            </span>
            <span className="text-white font-medium text-sm">{t("add")}</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SectionHeader;
