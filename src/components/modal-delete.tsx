import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import Button from "@/components/button";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
  handleSubmit: () => void;
};

const ModalDelete = ({ isOpen, closeModal, children, handleSubmit }: Props) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  data-cy="modal-delete"
                  className="w-full max-w-md transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
                >
                  <div className="mt-2 px-6 py-4">
                    <svg
                      data-cy="modal-delete-icon"
                      width="68"
                      height="61"
                      viewBox="0 0 68 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto my-8"
                    >
                      <path
                        d="M34 44.5V44.535M34 23.5V30.5V23.5Z"
                        stroke="#ED4C5C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.50018 58.5012H58.5002C59.6423 58.4932 60.765 58.2059 61.7705 57.6643C62.7761 57.1227 63.6338 56.3433 64.2689 55.3941C64.904 54.4449 65.2972 53.3546 65.4142 52.2186C65.5312 51.0825 65.3685 49.935 64.9402 48.8762L40.0902 6.00125C39.4848 4.90714 38.5975 3.99515 37.5203 3.3601C36.4432 2.72504 35.2156 2.39011 33.9652 2.39011C32.7148 2.39011 31.4872 2.72504 30.41 3.3601C29.3329 3.99515 28.4455 4.90714 27.8402 6.00125L2.99018 48.8762C2.56997 49.9108 2.40334 51.0308 2.5042 52.1428C2.60506 53.2549 2.97048 54.3266 3.56996 55.2687C4.16943 56.2107 4.98556 56.9956 5.95022 57.558C6.91487 58.1203 8.00006 58.4438 9.11518 58.5012"
                        stroke="#ED4C5C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span data-cy="modal-delete-title">{children}</span>
                  </div>
                  <div className="mt-4 px-6 py-4 flex flex-row justify-evenly">
                    <Button
                      type="basic"
                      data-cy="modal-delete-cancel-button"
                      onClick={closeModal}
                    >
                      <div className="flex flex-row items-center space-x-2">
                        <span className="text-lg">Batal</span>
                      </div>
                    </Button>
                    <Button
                      type="error"
                      data-cy="modal-delete-confirm-button"
                      onClick={handleSubmit}
                    >
                      <div className="flex flex-row items-center space-x-2">
                        <span className="text-lg">Hapus</span>
                      </div>
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalDelete;
