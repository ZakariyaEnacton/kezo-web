import {
  ChatBubbleOvalLeftEllipsisIcon,
  ShareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import t from "../translate";
import { Disclosure } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const CityCard = ({ city, index }: any) => {
  return (
    <div
      key={index}
      className="flex self-stretch gap-3 rounded-xl items-start bg-primary flex-col"
    >
      <div className="flex justify-between container items-center">
        <div className="flex items-center">
          <img
            src={index < 2 ? "/Image/icon-orange.png" : "/Image/icon-green.png"}
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
            {t("last_shared")}: {t("date")}
          </span>
        </div>
      </div>
      {index % 2 !== 0 ? (
        <div className="mt-[-20px]  border-t border-third container max-w-[1270px]">
          <Disclosure>
            {({ open }) => (
              <div className="pt-2 pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 w-[711px]">
                    <ChatBubbleOvalLeftEllipsisIcon
                      className="h-5 w-5"
                      color="#666D80"
                    />
                    <span className=" text-base font-normal">
                      {t("paper_collection")}
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-5">
                    <span className="text-sm text-secondary">{t("date")}</span>
                    <Disclosure.Button className="flex items-center justify-center py-[6px] px-2 gap-[6px] bg-white shadow-share rounded">
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-green`}
                      />
                      <span className="text-sm font-normal text-feed">
                        View More
                      </span>
                    </Disclosure.Button>
                  </div>
                </div>
                <Disclosure.Panel className="px-4 pb-2 pt-4">
                  <div className="flex flex-col p-4 items-start gap-2 self-stretch rounded bg-third border border-tert">
                    <span className="text-sm font-normal text-secondary ml-[2px]">
                      {t("feedback")}
                    </span>
                    <div className="container">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <ExclamationCircleIcon className="h-5 w-5" />
                          <span className="text-base font-normal">
                            {t("example_one")}
                          </span>
                        </div>
                        <span className="text-sm text-secondary">
                          {t("date")}
                        </span>
                      </div>
                      <div className="container">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <ExclamationCircleIcon className="h-5 w-5" />
                            <span className="text-base font-normal">
                              {t("example_two")}
                            </span>
                          </div>
                          <span className="text-sm text-secondary">
                            {t("date")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      ) : null}
    </div>
  );
};

export default CityCard;
