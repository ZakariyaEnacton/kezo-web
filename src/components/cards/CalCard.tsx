import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import t from "../translate";

const CalCard = () => {
  return (
    <div className="flex container max-w-[410px] p-5 flex-col items-start gap-[10px] rounded-xl bg-white shadow-cal">
      <div className="flex flex-col items-start gap-5 self-stretch ">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-icon-bg rounded-full">
            <ClockIcon
              className="h-7 w-7 font-bold mx-1 my-1"
              color="#008522"
            />
          </div>
          <span className="text-2xl font-normal tracking-tighter">
            {t("version")}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-5 w-5 font-bold" color="#666D80" />
            <span className="text-sm font-normal text-secondary">
              {t("date")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-5 w-5 font-bold" color="#666D80" />
            <span className="text-sm font-normal text-secondary">
              {t("date")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalCard;
