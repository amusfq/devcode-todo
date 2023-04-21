import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiInfoCircle } from "react-icons/bi";

type Props = {
  isOpen: boolean;
  title: string;
  closeModal: () => void;
};

const ModalSuccess = ({ isOpen, title, closeModal }: Props) => {
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
                  data-cy="modal-information"
                  className="w-full max-w-sm transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
                >
                  <div className="px-6 py-4 flex flex-row items-center space-x-2">
                    <BiInfoCircle className="text-2xl text-green-500" data-cy="modal-information-icon" />
                    <span data-cy="modal-information-title">{title}</span>
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

export default ModalSuccess;
