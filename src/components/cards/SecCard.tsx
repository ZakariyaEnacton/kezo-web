import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import t from "../translate";
import { useEffect, useState } from "react";

const SecCard = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(false);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex container max-w-[410px] p-5 flex-col items-start gap-[10px] rounded-xl bg-white shadow-cal">
      <div className="flex flex-col items-start gap-5 self-stretch ">
        <div className="flex items-center gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-icon-bg rounded-full">
              <ClockIcon
                className="h-7 w-7 font-bold mx-1 my-1"
                color="#008522"
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-2xl font-normal tracking-tighter">
                {t("not_shared_yet")}
              </span>
              <button className="flex w-[240px] h-[36px] px-4 py-2 justify-center items-center gap-[6px] rounded bg-exit shadow-danger">
                <span className="text-sm font-normal text-white">
                  {t("delete_and_upload")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecCard;
