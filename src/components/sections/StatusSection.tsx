import React from "react";
import t from "../translate";
import { ShareIcon } from "@heroicons/react/24/outline";
import StatusCard from "../cards/StatusCard";

interface City {
  city: string;
}

const StatusSection: React.FC = () => {
  const cities: City[] = [
    { city: "City C Name" },
    { city: "City D Name" },
    { city: "City A Name" },
    { city: "City B Name" },
  ];

  return (
    <div className="flex container p-3 flex-col items-center gap-2 rounded-2xl bg-white shadow-header ">
      {cities.map((city, index) => (
        <StatusCard city={city} index={index} />
      ))}
    </div>
  );
};

export default StatusSection;
