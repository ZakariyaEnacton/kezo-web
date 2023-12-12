"use client";
import {
  EnvelopeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import t from "../translate";
import { useState } from "react";
import AddEmailModal from "../modal/AddEmailModal";
import DeleteModal from "../modal/DeleteModal";

const CityCard = ({ data }: any) => {
  const [openAddEmail, setOpenAddEmail] = useState(false);
  const [openDelete, setDelete] = useState(false);

  const openAddEmailModal = () => {
    setOpenAddEmail(true);
  };

  const closeAddEmailModal = () => {
    setOpenAddEmail(false);
  };

  const openDeleteModal = () => {
    setDelete(true);
  };

  const closeDeleteModal = () => {
    setDelete(false);
  };

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
                <button
                  className="flex items-center gap-2"
                  type="button"
                  onClick={openAddEmailModal}
                >
                  <img src="/Image/email_add.png" className="h-5 w-5" />
                  <span className="text-sm font-normal text-green">
                    {t("add_email")}
                  </span>
                  <img
                    src="/Image/compul_sory.png"
                    className="h-[6px] w-[6px]"
                  />
                </button>
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
            onClick={openDeleteModal}
          >
            <TrashIcon className="h-5 w-5 text-exit" />
            <span className="text-sm font-normal text-center text-exit">
              {t("delete")}
            </span>
          </button>
        </div>
      </div>
      <AddEmailModal isOpen={openAddEmail} closeModal={closeAddEmailModal} />
      <DeleteModal isOpen={openDelete} closeModal={closeDeleteModal} />
    </div>
  );
};

export default CityCard;
