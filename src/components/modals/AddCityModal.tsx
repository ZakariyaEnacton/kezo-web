import { Dialog, Transition } from "@headlessui/react";
import t from "../translate";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const AddCityModal = ({ isOpen, closeModal }: any) => {
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
                <div className="flex w-full flex-col items-center gap-7">
                  <div className="flex w-[396px] py-2 flex-col items-center gap-1">
                    <div className="">
                      <img
                        src="/Image/city_loc.png"
                        alt={"Sky_Logo"}
                        className="w-44 h-44 mb-[-20px]"
                      />
                      <img
                        src="/Image/add_icon.png"
                        alt={"Sky_Logo"}
                        className="w-17 h-17 absolute top-[27px] right-[150px]"
                      />
                    </div>
                    <div className="flex w-[396px] flex-col items-center gap-3">
                      <span className="text-2xl text-center tracking-tighter font-normal text-black">
                        Add Email To [{t("city_name")}]
                      </span>
                      <span className="text-sm text-center font-[300] text-secondary">
                        Strengthen communication for a more informed city with
                        the addition of email services.
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="border-t border-third w-[460px] py-8 px-8 flex flex-col gap-5">
                      <div className="flex w-[396px] flex-col items-start gap-1">
                        <span className="text-sm text-center font-normal text-cals">
                          City Name
                        </span>
                        <div className="flex flex-row items-center gap-1 rounded-md bg-white shadow-menu w-[396px] p-2">
                          <MapPinIcon className="h-6 w-6 text-neutral" />
                          <input
                            type="email"
                            placeholder="Enter City Name"
                            className="text-sm text-secondary font-normal outline-none w-full"
                          />
                        </div>
                      </div>
                      <div className="flex w-[396px] flex-col items-start gap-1">
                        <span className="text-sm text-center font-normal text-cals">
                          Excel Reference-Value
                        </span>
                        <div className="flex flex-row items-center gap-1 rounded-md bg-white shadow-menu w-[396px] p-2">
                          <MapPinIcon className="h-6 w-6 text-neutral" />
                          <input
                            type="email"
                            placeholder="Enter excel reference-value"
                            className="text-sm text-secondary font-normal outline-none w-full"
                          />
                        </div>
                        <span className="text-xs text-center font-[300] text-secondary">
                          Example: R-J for Rapperswil-Jona
                        </span>
                      </div>
                      <div className="flex w-[396px] flex-col items-start gap-1">
                        <span className="text-sm text-center font-normal text-cals">
                          Email for Admin
                        </span>

                        <div className="flex flex-row items-center gap-1 rounded-md bg-white shadow-menu w-[396px] p-2">
                          <EnvelopeIcon className="h-6 w-6 text-neutral" />
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
                      <div className="flex w-[396px] flex-row items-start justify-between gap-1">
                        <div className="flex flex-col items-start gap-1">
                          <span className="text-sm text-center font-normal text-cals">
                            First Name
                          </span>

                          <div className="flex flex-row items-center gap-1 rounded-md bg-white shadow-menu w-[188px] p-2">
                            <UserIcon className="h-6 w-6 text-neutral" />
                            <input
                              type="email"
                              placeholder="Enter first name"
                              className="text-sm text-secondary font-normal outline-none w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                          <span className="text-sm text-center font-normal text-cals">
                            Last Name
                          </span>

                          <div className="flex flex-row items-center gap-1 rounded-md bg-white shadow-menu w-[188px] p-2">
                            <UserIcon className="h-6 w-6 text-neutral" />
                            <input
                              type="email"
                              placeholder="Enter last name"
                              className="text-sm text-secondary font-normal outline-none w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[396px] flex-col items-start gap-1">
                        <span className="text-sm text-center font-normal text-cals">
                          Phone Number
                        </span>

                        <div className="flex flex-row items-center gap-1 rounded-md bg-white shadow-menu w-[396px] p-2">
                          <PhoneIcon className="h-6 w-6 text-neutral" />
                          <input
                            type="email"
                            placeholder="Enter phone number"
                            className="text-sm text-secondary font-normal outline-none w-full"
                          />
                        </div>
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
                          Add City
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

export default AddCityModal;
