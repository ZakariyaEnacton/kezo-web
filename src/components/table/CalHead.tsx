import {
  CheckIcon,
  ChevronDownIcon,
  DocumentIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import t from "../translate";
import LocationList from "../LocationList";

const CalHead = () => {
  return (
    <div className="flex container justify-between self-stretch items-center">
      <LocationList />
      <div className="flex items-start gap-9">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-icon_bg_2 rounded-full">
            <DocumentIcon className="h-4 w-4 font-bold mx-1 my-1 text-paper" />
          </div>
          <span className="text-xs font-normal tracking-tight text-paper uppercase">
            {t("paper")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-icon_bg_3 rounded-full">
            <TrashIcon className="h-4 w-4 font-bold mx-1 my-1 text-waste" />
          </div>
          <span className="text-xs font-normal tracking-tight text-waste uppercase">
            {t("waste")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CalHead;
