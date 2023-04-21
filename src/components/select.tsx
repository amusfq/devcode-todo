import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiChevronDown } from "react-icons/hi";

export const priorities = [
  { label: "Very High", value: "very-high", color: "#ED4C5C" },
  { label: "High", value: "high", color: "#F8A541" },
  { label: "Normal", value: "normal", color: "#00A790" },
  { label: "Low", value: "low", color: "#428BC1" },
  { label: "Very Low", value: "very-low", color: "#8942C1" },
];

interface SelectType {
  label: string;
  value: string;
  color: string;
}

interface Props {
  onChange: (value: SelectType) => void;
  selected?: SelectType;
}

export default function Select({ onChange, selected }: Props) {
  return (
    <div className="w-52 h-14" data-cy="modal-add-priority-dropdown">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button
            data-cy="modal-add-priority-item"
            className="relative w-full h-14 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <div className="flex flex-row items-center space-x-3">
              {selected && (
                <span
                  className="h-3 w-3 block rounded-full"
                  style={{ background: selected.color }}
                />
              )}
              <span className="block truncate">
                {selected?.label ?? "Pilih priority"}
              </span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronDown className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {priorities.map((item, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none h-14 py-2 pl-10 pr-4 flex ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={item}
                  data-cy={`modal-add-priority`}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex flex-row items-center space-x-3">
                        <span
                          className="h-3 w-3 block rounded-full"
                          style={{ background: item.color }}
                        />
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      {selected ? (
                        <span className="absolute inset-y-0 right-4 flex items-center pl-3 text-amber-600">
                          <HiCheck className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
