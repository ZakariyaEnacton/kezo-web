import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import t from "../translate";

const DeleteModal = ({ isOpen, closeModal }: any) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog className="relative z-10" onClose={closeModal}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[460px] transform overflow-hidden rounded-3xl bg-white pt-[-10px] pb-8 shadow-xl transition-all">
                <div className="flex w-full flex-col items-center gap-1">
                  <div className="flex w-[396px] py-4 flex-col items-center gap-2">
                    <img
                      src="/Image/delete_head_icon.png"
                      alt={"Delete_head_icon"}
                      className="w-44  h-44"
                    />
                    <div className="flex w-[396px] flex-col items-center gap-3">
                      <span className="text-2xl text-center tracking-tighter font-normal text-black">
                        Are You Sure to Delete [{t("city_name")}]
                      </span>
                      <span className="text-sm text-center font-[300] text-secondary">
                        Are You Sure to Delete [{t("city_name")}]? Confirming
                        this step is crucial for maintaining accurate records.
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[396px] items-center gap-5 mt-3">
                    <button
                      type="button"
                      className="flex py-2 px-4 justify-center items-center w-[186px] gap-[6px] rounded-md bg-white shadow-share"
                      onClick={closeModal}
                    >
                      <span className="text-sm text-black font-normal">
                        Cancel
                      </span>
                    </button>
                    <button
                      type="button"
                      className="flex py-2 px-4 justify-center w-[186px] items-center gap-[6px] rounded-md bg-exit shadow-share"
                    >
                      <span className="text-sm text-white font-normal">
                        Delete City
                      </span>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteModal;
