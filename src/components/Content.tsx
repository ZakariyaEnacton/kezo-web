"use client";
import { usePathname } from "next/navigation";
import SectionHeader from "./sections/SectionHeader";
import StatusSection from "./sections/StatusSection";
import CalendarSection from "./sections/CalendarSection";
import CitiesSection from "./sections/CitiesSection";

const Contents = () => {
  const pathname = usePathname();

  const getYourSection: any = () => {
    if (pathname === "/status") {
      return <StatusSection />;
    } else if (pathname === "/calendar") {
      return <CalendarSection />;
    } else if (pathname === "/manage-cities") {
      return <CitiesSection />;
    } else {
      console.log("No Path Name Exists");
    }
  };

  return (
    <div>
      <SectionHeader />
      {getYourSection()}
    </div>
  );
};

export default Contents;
