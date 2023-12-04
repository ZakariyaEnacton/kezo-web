import React from "react";
import t from "../translate";
import { ShareIcon } from "@heroicons/react/24/outline";

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
          className="flex self-stretch gap-3 rounded-xl items-start bg-primary flex-col"
        >
          <div className="flex justify-between container items-center">
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
            <div className="flex items-end mr-4 flex-col gap-3">
              <button
                type="button"
                className="flex shadow-share bg-white items-center gap-2 justify-center py-[6px] px-2 rounded "
              >
                <ShareIcon className="h-5 w-5" />
                <span className="text-sm font-normal text-center">
                  {t("share")}
                </span>
              </button>
              <span className="text-xs text-secondary">
                {t("last_shared")}:11 Nov 2023 on 3:32 PM
              </span>
            </div>
          </div>
          {index % 2 !== 0 ? (
            <div className="border-t border-top ">Hello</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default StatusSection;
