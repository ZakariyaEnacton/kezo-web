import {
  EnvelopeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import t from "../translate";

const CityCard = ({ data }: any) => {
  return (
    <div
      key={data.id}
      className="flex self-stretch gap-3 rounded-xl items-start bg-primary flex-col"
    >
      <div className="flex justify-between container items-center">
        <div className="flex items-center">
          <img
            src={"/Image/icon_sky.png"}
            alt={"Sky_Logo"}
            className="w-20 h-20"
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-2xl tracking-tighter font-normal text-black">
              {data.name}
            </p>
            <div className="flex items-center gap-2 ">
              {data.email == "" ? (
                <>
                  <img src="/Image/email_add.png" className="h-5 w-5" />
                  <span className="text-sm font-normal text-green">
                    {t("add_email")}
                  </span>
                  <img
                    src="/Image/compul_sory.png"
                    className="h-[6px] w-[6px]"
                  />
                </>
              ) : (
                <>
                  <EnvelopeIcon className="h-5 w-5 text-green" />
                  <span className="text-sm font-normal text-cals">
                    {data.email}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-end mr-4 gap-3">
          <button
            type="button"
            className="flex shadow-share bg-white items-center gap-2 justify-center py-[6px] px-2 rounded "
          >
            <PencilIcon className="h-5 w-5" />
            <span className="text-sm font-normal text-center">
              {t("edit_city")}
            </span>
          </button>
          <button
            type="button"
            className="flex shadow-share bg-white items-center gap-2 justify-center py-[6px] px-2 rounded "
          >
            <TrashIcon className="h-5 w-5 text-exit" />
            <span className="text-sm font-normal text-center text-exit">
              {t("delete")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
