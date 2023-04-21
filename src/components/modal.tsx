import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import Button from "@/components/button";

type Props = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  closeModal: () => void;
  handleSubmit: () => void;
};

const Modal = ({
  isOpen,
  title,
  closeModal,
  children,
  handleSubmit,
}: Props) => {
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
                  data-cy="modal-add"
                  className="w-full max-w-3xl transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all divide-y"
                >
                  <Dialog.Title
                    as="h3"
                    data-cy="modal-add-title"
                    className="font-semibold text-lg text-gray-900 px-6 py-4"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2 px-6 py-4">{children}</div>
                  <div className="mt-4 px-6 py-4 flex flex-row justify-end">
                    <Button
                      data-cy="modal-add-save-button"
                      onClick={handleSubmit}
                    >
                      <div className="flex flex-row items-center space-x-2">
                        <span className="text-lg">Simpan</span>
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

export default Modal;
