import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" }
];

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <>
      <div className="fixed transform translate-y-96 mt-2 right-8 mr-0.5 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="font-mono text-xs px-3 py-0.5 font-medium text-green-200 bg-gray-800 rounded-md bg-opacity-100  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          MINT
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative font-mono inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="absolute right-2 top-2">
                  <button
                    type="button"
                    className="text-xl inline-flex justify-center text-gray-600 text-sm font-medium text-gray-700  border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="font-mono font-bold text-2xl font-medium  text-gray-900 mb-5"
                >
                  Reserve Mint Shifty Sharks Token
                </Dialog.Title>

                <div className="mt-8 flex">
                  <div>
                    <p className="text-sm text-gray-500 px-3 ml-12">
                      How many Shifty Sharks would you like to Reserve Mint?
                      (Max 3)
                    </p>
                  </div>
                  <div>
                    <Listbox
                      value={selectedPerson}
                      onChange={setSelectedPerson}
                    >
                      <Listbox.Button className="text-gray-500 flex flex-row border ml-2 pr-2 py-1 rounded-lg mr-10 transform -translate-x-3">
                        <ChevronDownIcon className="w-5 text-gray-300 mt-0.5" />{" "}
                        {selectedPerson.name}
                      </Listbox.Button>

                      <Listbox.Options className="border rounded-lg fixed px-3 ml-2.5 mt-1 transform -translate-x-3">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            value={person}
                            as={Fragment}
                          >
                            {({ active, selected }) => (
                              <li
                                className={`${
                                  active
                                    ? "bg-white text-gray-500 cursor-pointer"
                                    : "bg-white text-gray-500 cursor-pointer"
                                }`}
                              >
                                {selected}
                                {person.name}
                              </li>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="button"
                    className="mx-0.5 inline-flex text-lg justify-center px-5 py-0.5 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    MINT
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
