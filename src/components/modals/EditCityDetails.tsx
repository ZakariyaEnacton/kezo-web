import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import t from "../translate";

const EditCityDetails = ({ isOpen, closeModal }: any) => {
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
              <Dialog.Panel className="w-[460px] transform overflow-hidden rounded-3xl bg-white pt-[2px] pb-8 shadow-xl transition-all">
                <div className="flex w-full flex-col items-center gap-5">
                  <div className="flex w-[396px] py-2 flex-col items-center gap-3">
                    <div>
                      <img
                        src="/Image/city_loc.png"
                        alt={"Sky_Logo"}
                        className="w-44 h-44 mb-[-16px]"
                      />
                      <img
                        src="/Image/green_edit.png"
                        alt={"Sky_Logo"}
                        className="w-16 h-16 absolute top-[100px] left-[160px]"
                      />
                    </div>
                    <div className="flex w-[396px] flex-col items-center gap-3">
                      <span className="text-2xl text-center tracking-tighter font-normal text-black">
                        Add Email To [{t("city_name")}]
                      </span>
                      <span className="text-sm text-center font-[300] text-secondary">
                        Seamlessly edit and enhance city details for a more
                        accurate and efficient waste management system.
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="border-t border-third w-[460px] py-8 px-8 flex flex-col gap-4">
                      <div className="flex w-[396px] flex-col items-start gap-1">
                        <span className="text-sm text-center font-normal text-cals">
                          City Name
                        </span>
                        <div className="flex flex-row items-center gap-2 rounded-md bg-white shadow-menu w-[396px] p-2">
                          <MapPinIcon className="h-6 w-6 text-green" />
                          <input
                            type="email"
                            placeholder="Enter Your City"
                            className="text-sm text-secondary font-normal outline-none w-full"
                          />
                        </div>
                        <span className="text-xs text-center font-[300] text-secondary">
                          Please don’t use abbreviations. Eg: R-J
                        </span>
                      </div>
                      <div className="flex w-[396px] flex-col items-start gap-2">
                        <span className="text-sm text-center font-normal text-cals">
                          Email for Admin
                        </span>

                        <div className="flex flex-row items-center gap-2 rounded-md bg-white shadow-menu w-[396px] p-2  ">
                          <EnvelopeIcon className="h-6 w-6 text-neutral hover:text-green" />
                          <input
                            type="email"
                            placeholder="Enter email"
                            className="text-sm text-secondary font-normal outline-none w-full"
                          />
                        </div>
                        <span className="text-xs text-center font-[300] text-secondary">
                          Enter admin to assign this city
                        </span>
                      </div>
                    </div>
                    <div className="flex container max-w-[396px] items-center justify-between">
                      <button
                        type="button"
                        className="flex py-2 px-4 justify-center items-center gap-[6px] rounded-md bg-white shadow-share"
                        onClick={closeModal}
                      >
                        <span className="text-sm text-black font-normal">
                          Cancel
                        </span>
                      </button>
                      <button
                        type="button"
                        className="flex py-2 px-4 justify-center items-center gap-[6px] rounded-md bg-green shadow-share"
                      >
                        <span className="text-sm text-white font-normal">
                          Save Changes
                        </span>
                      </button>
                    </div>
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

export default EditCityDetails;
