"use client";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const LocationList = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className="relative mt-1">
            <div className="flex p-2 items-center self-stretch gap-2 rounded bg-white shadow-menu">
              {!open ? (
                <>
                  <MapPinIcon className="h-5 w-5 text-green" />
                  <Combobox.Input
                    className="flex text-sm font-normal w-full text-cals outline-none"
                    displayValue={(person: any) => person.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                    <ChevronDownIcon className="h-5 w-5" color="#A4ACB9" />
                  </Combobox.Button>
                </>
              ) : (
                <div className="flex px-1 py-[2px] items-center self-stretch gap-2 rounded bg-white shadow-search w-full justify-between">
                  <MagnifyingGlassIcon className="h-5 w-5 text-green" />
                  <Combobox.Input
                    className="flex text-sm font-normal w-full text-cals outline-none"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <XMarkIcon
                    className="h-5 w-5 cursor-pointer"
                    color="#A4ACB9"
                  />
                </div>
              )}
            </div>
            <Transition
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-2  ${
                          active ? "bg-select text-cals" : "text-cals"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center justify-between self-stretch ">
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="h-5 w-5 text-cals" />
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                          </div>
                          {selected ? (
                            <span
                              className={` ${
                                active ? "text-white" : "text-cals"
                              }`}
                            >
                              <CheckIcon className="h-4 w-4" />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Combobox.Option>
                  ))
                )}

                <div className="border-t flex py-[11px] px-[14px] items-end gap-[10px] ">
                  <button className="flex py-[6px] px- justify-center items-center gap-[6px] rounded bg-white shadow-share w-full ">
                    <span>Save</span>
                  </button>
                </div>
              </Combobox.Options>
            </Transition>
          </div>
        )}
      </Combobox>
    </div>
  );
};

export default LocationList;
