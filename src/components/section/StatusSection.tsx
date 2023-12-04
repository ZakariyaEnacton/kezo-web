import React from "react";
import t from "../translate";

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
    <div className="flex mt-4 container max-w-[1310px] p-3 flex-col items-center gap-2 rounded-2xl bg-white shadow-header ">
      {cities.map((city, index) => (
        <div
          key={index}
          className="flex self-stretch rounded-xl bg-primary justify-between"
        >
          <div className="flex items-center">
            <img
              src={
                index < 2 ? "/Image/icon-orange.png" : "/Image/icon-green.png"
              }
              alt={index < 2 ? "Orange_Logo" : "Green_Logo"}
              className="w-24 h-24"
            />
            <div className="flex flex-col items-start gap-2">
              <p className="text-2xl tracking-tighter font-normal text-black">
                {city.city}
              </p>
              <div className="flex items-center gap-2">
                {index % 2 !== 0 ? (
                  <img
                    src="/Image/ellipse.png"
                    className="h-2 w-2 rounded-full"
                  />
                ) : (
                  ""
                )}
                <span className="text-sm font-normal text-secondary">
                  {index % 2 === 0 ? t("nofeed") : t("feed")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p>Last Shared</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusSection;
