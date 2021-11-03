import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="absolute right-8 inset-y-2 transform translate-y-8 -mt-1.5 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="font-mono text-xs px-3 py-0.5 font-medium text-green-200 bg-gray-800 rounded-md bg-opacity-100  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          INFO
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-x-0 z-50 top-0 overflow-y-auto "
          onClose={closeModal}
        >
          <div
            onClick={closeModal}
            className="fixed h-screen w-screen text-center bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur"
          ></div>
          <div className="h-screen w-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed absolute inset-x-12" />
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
              <div className=" border relative font-mono inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
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
                  className="ml-8 flex font-molle justify-center font-bold text-4xl font-medium  text-gray-900 mb-3"
                >
                  shifty sharks{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="ml-3 mt-1.5"
                  >
                    <path d="M13.25 7c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25zm10.75 5c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-2 0c0-5.514-4.486-10-10-10s-10 4.486-10 10 4.486 10 10 10 10-4.486 10-10zm-13-2v2h2v6h2v-8h-4z" />
                  </svg>
                </Dialog.Title>

                <div className="flex flex-col">
                  <div className="flex mx-auto justify-center">
                    <img
                      src="./test.svg"
                      className="shadow rounded-full h-56  z-40 justify-center"
                    />
                  </div>
                  <div className="-mt-1 lg:-mt-2  z-0 px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-2 lg:gap-4 leading-tight">
                    <p className="bg-gray-50 shadow text-xs text-gray-500 p-2 lg:p-4 border rounded-lg">
                      * Shifty Sharks is an On-Chain PFP project with
                      specialized reveal mechanics and using Chainlink for
                      randomness *
                    </p>
                    <p className="bg-gray-50 shadow text-xs text-gray-500 p-2 lg:p-4 border rounded-lg">
                      * Sharks are Free to Mint (except tx cost) and cost .005
                      ETH each to reveal. Sharks are fully minted and tradeable
                      before reveal. *
                    </p>
                    <p className="bg-gray-50 shadow text-xs text-gray-500 p-2 lg:p-4 border rounded-lg">
                      * Reveal Period will begin after sell-out or after one
                      month of sale, whichever comes first. *
                    </p>
                    <p className="bg-gray-50 shadow text-xs text-gray-500 p-2 lg:p-4 border rounded-lg">
                      * Unrevealed Sharks are stored on ipfs. Revealed Sharks
                      are Fully-On-Chain SVGs. For more see "More Info" below. *
                    </p>
                  </div>
                  <div className="z-0 text-xs md:text-sm text-gray-500 px-3 mx-4 mt-5 justify-center flex flex-col mx-auto">
                    <table class="table-auto">
                      <tbody className="text-sm">
                        <tr className="text-sm">
                          <td>Levels of Trait Rarity:</td>
                          <td>6</td>
                        </tr>
                        <tr>
                          <td>Total Number of Traits:</td>

                          <td>125</td>
                        </tr>
                        <tr>
                          <td className="pr-3">Possible Variations:</td>

                          <td>456355</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-5 font-bold text-sm">
                      Total Minted: 253 of 5000
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="button"
                    className="mx-0.5 inline-flex text-lg justify-center px-5 py-0.5 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    MORE INFO
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
