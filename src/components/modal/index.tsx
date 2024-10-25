import { Fragment, ReactNode, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CancelIcon from "../../assets/icons/cancel";

export default function ModalTemplate({
  children,
  open,
  setOpen,
  showXicon,
  title,
  titleIcon,
  className,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Function;
  showXicon?: boolean;
  title?: string;
  titleIcon?: ReactNode;
  className?: string;
}) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backgrop-bg-filter" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
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
                className={`w-full ${
                  className ? className : "max-w-screen-sm"
                }  transform overflow-hidden rounded-sm bg-white dark:bg-dark-500 text-left align-middle shadow-xl transition-all`}
              >
                <div className="flex flex-col justify-center items-center dark:text-white">
                  {showXicon && (
                    <div className="flex justify-between w-full items-center px-7 pt-7">
                      <h4 className=" font-semibold text-xl flex items-center gap-2">
                        {titleIcon} {title}
                      </h4>
                      <button
                        type="button"
                        title="clode modal"
                        onClick={() => setOpen(false)}
                        className=" p-1 border rounded-full dark:bg-white/40 dark:border-none dark:text-dark-500 dark:hover:bg-white/60 hover:scale-125 transition-all"
                      >
                        <CancelIcon className=" size-4" />
                      </button>
                    </div>
                  )}
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
