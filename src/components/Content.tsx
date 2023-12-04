"use client";
import { usePathname } from "next/navigation";
import SectionHeader from "./section/SectionHeader";
import StatusSection from "./section/StatusSection";
import CalendarSection from "./section/CalendarSection";
import CitiesSection from "./section/CitiesSection";

const Contents = () => {
  const pathname = usePathname();

  const getYourSection: any = () => {
    if (pathname === "/") {
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
