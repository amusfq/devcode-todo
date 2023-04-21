import Button from "@/components/button";
import Modal from "@/components/modal";
import ModalDelete from "@/components/modal-delete";
import { Menu, Transition } from "@headlessui/react";
import ModalSuccess from "@/components/modal-success";
import TodoEmptyState from "@/components/pages/dashboard/todo-empty.state";
import Select from "@/components/select";
import { ActivityDetailType, TodoType } from "@/types/activity";
import api from "@/utils/fetch";
import { Fragment, useEffect, useRef, useState } from "react";
import cx from "classnames";
import {
  HiChevronLeft,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
} from "react-icons/hi";
import {
  TbSortAscending,
  TbSortDescending,
  TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbArrowsSort,
  TbCheck,
} from "react-icons/tb";
import { HiArrowsUpDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const colors: any = {
  "very-high": "#ED4C5C",
  high: "#F8A541",
  normal: "#00A790",
  low: "#428BC1",
  "very-low": "#8942C1",
};

const sortMenu = [
  {
    label: "Terbaru",
    icon: <TbSortDescending className="h-5 w-5" />,
    value: "latest",
  },
  {
    label: "Terlama",
    icon: <TbSortAscending className="h-5 w-5" />,
    value: "oldest",
  },
  {
    label: "A-Z",
    icon: <TbSortDescendingLetters className="h-5 w-5" />,
    value: "az",
  },
  {
    label: "Z-A",
    icon: <TbSortAscendingLetters className="h-5 w-5" />,
    value: "za",
  },
  {
    label: "Belum Selesai",
    icon: <TbArrowsSort className="h-5 w-5" />,
    value: "unfinished",
  },
];

const ActivityPage = () => {
  const { id } = useParams();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [data, setData] = useState<ActivityDetailType>({
    title: "New Activity",
    id: 0,
    created_at: "",
    todo_items: [],
  });
  const [isEdit, setIsEdit] = useState(false);
  const [width, setWidth] = useState(10);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);
  const [selected, setSelected] = useState<TodoType>();
  const [selectedSort, setSelectedSort] = useState("");
  const [modalData, setModalData] = useState<{
    title: string;
    priority?: {
      label: string;
      value: string;
      color: string;
    };
  }>({
    title: "",
    priority: undefined,
  });

  const handleCloseModal = () => setIsOpenModal(false);

  const handleCloseModalDelete = () => setIsOpenModalDelete(false);

  const handleCloseSuccess = () => setIsOpenModalSuccess(false);

  const handleDelete = () => {
    api
      .delete(`/todo-items/${selected?.id}`)
      .then(() => getData())
      .finally(() => {
        setSelected(undefined);
        handleCloseModalDelete();
        setIsOpenModalSuccess(true);
      });
  };

  const handleSort = (value: string) => setSelectedSort(value);

  function sortData(a: TodoType, b: TodoType) {
    switch (selectedSort) {
      case "az" || "oldest":
        return a.title.localeCompare(b.title);
      case "za" || "latest":
        return b.title.localeCompare(a.title);
      case "unfinished":
        return b.is_active - a.is_active;
      default:
        return b.title.localeCompare(a.title);
    }
  }

  const handleSubmitModal = () => {
    if (!modalData.title) return;
    api
      .post(`/todo-items`, {
        activity_group_id: id,
        title: modalData.title,
        priority: modalData.priority?.value ?? "very-high",
      })
      .then(() => getData())
      .finally(() => {
        setModalData({ title: "", priority: undefined });
        handleCloseModal();
      });
  };

  const handleShowModalDelete = (data: TodoType) => {
    setIsOpenModalDelete(true);
    setSelected(data);
  };

  const handleShowModal = () => {
    setIsOpenModal(true);
  };

  const handleUpdateTitle = () => {
    setIsEdit(false);
    api.patch(`/activity-groups/${id}`, { title: data.title });
  };

  const handleToggleStatus = (e: any, id: number) => {
    api
      .patch(`/todo-items/${id}`, {
        is_active: !e.target.checked,
      })
      .then(() => getData());
  };

  const getData = () => {
    api.get(`/activity-groups/${id}`).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    setWidth(spanRef.current?.offsetWidth ?? 0);
  }, [data.title]);

  useEffect(() => {
    if (isEdit) titleRef.current?.focus();
  }, [isEdit]);

  useEffect(() => {
    if (id) getData();
  }, [id]);

  return (
    <div className="space-y-12">
      <div className="flex flex-row items center justify-between">
        <div className="flex flex-row items-center space-x-2 text-4xl font-bold">
          <Link data-cy="todo-back-button" to="/">
            <HiChevronLeft />
          </Link>
          <span
            ref={spanRef}
            data-cy="todo-title"
            className="absolute opacity-0 pointer-events-none"
          >
            {data.title}
          </span>
          <input
            ref={titleRef}
            type="text"
            style={{ width }}
            className="bg-transparent"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.currentTarget.value })}
            readOnly={!isEdit}
            onClick={() => setIsEdit(true)}
            onBlur={handleUpdateTitle}
          />
          <button
            className="text-gray-400 text-2xl"
            onClick={() => setIsEdit(true)}
            data-cy="todo-title-edit-button"
          >
            <HiOutlinePencil />
          </button>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                data-cy="sort-selection"
                className="rounded-full border h-12 w-12 flex items-center justify-center text-2xl text-gray-500"
              >
                <HiArrowsUpDown />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {sortMenu.map((item, idx) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex flex-row w-full items-center rounded-md px-2 py-2 text-sm justify-between`}
                          onClick={() => handleSort(item.value)}
                          data-cy={`sort-${item.value}`}
                        >
                          <div className="flex flex-row items-center space-x-2">
                            {item.icon}
                            <span>{item.label}</span>
                          </div>
                          {item.value === selectedSort && (
                            <TbCheck className="h-5 w-5" />
                          )}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Button
            data-cy="todo-add-button"
            onClick={() => setIsOpenModal(true)}
          >
            <div className="flex flex-row items-center space-x-2">
              <HiPlus size={18} />
              <span className="text-lg">Tambah</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {data.todo_items.length < 1 && (
          <TodoEmptyState onClick={handleShowModal} />
        )}
        {data.todo_items.sort(sortData).map((item, idx) => (
          <div
            key={idx}
            data-cy={`todo-item-${idx}`}
            className="bg-white rounded-md px-6 py-4 flex flex-row items-center justify-between shadow-md"
          >
            <div className="flex flex-row items-center space-x-4">
              <input
                type="checkbox"
                name=""
                id={`todo-item-${idx}`}
                className="h-5 w-5"
                data-cy="todo-item-checkbox"
                onChange={(e) => handleToggleStatus(e, item.id)}
                defaultChecked={!item.is_active}
              />
              <span
                data-cy="todo-item-priority-indicator"
                className="block w-3 h-3 rounded-full"
                style={{ background: colors[item.priority] }}
              ></span>
              <span
                className={cx(
                  "text-lg font-semibold",
                  item.is_active ? "" : "line-through"
                )}
                data-cy="todo-item-title"
              >
                {item.title}
              </span>
              <button className="text-gray-400" data-cy="todo-item-edit-button">
                <HiOutlinePencil />
              </button>
            </div>
            <button
              data-cy="todo-item-delete-button"
              className="text-gray-400 text-xl"
              onClick={() => handleShowModalDelete(item)}
            >
              <HiOutlineTrash />
            </button>
          </div>
        ))}
      </div>
      <Modal
        title="Tambah List Item"
        isOpen={isOpenModal}
        closeModal={handleCloseModal}
        handleSubmit={handleSubmitModal}
        disableSubmit={!modalData.title}
      >
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label
              className="text-xs font-semibold"
              htmlFor="modal-add-name-title"
            >
              NAMA LIST ITEM
            </label>
            <input
              type="text"
              data-cy="modal-add-name-title"
              id="modal-add-name-title"
              name="modal-add-name-title"
              className="h-14 text-base px-4 outline-none border rounded-md focus:border-primary"
              value={modalData.title}
              onChange={(e) =>
                setModalData({ ...modalData, title: e.currentTarget.value })
              }
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              className="text-xs font-semibold"
              htmlFor="modal-add-priority-title"
            >
              Priority
            </label>
            <Select
              selected={modalData.priority}
              onChange={(e) => setModalData({ ...modalData, priority: e })}
            />
          </div>
        </div>
      </Modal>
      <ModalDelete
        isOpen={isOpenModalDelete}
        closeModal={handleCloseModalDelete}
        handleSubmit={handleDelete}
      >
        <p className="text-center">
          Apakah anda yakin menghapus List Item <b>“{selected?.title}”</b>?
        </p>
      </ModalDelete>
      <ModalSuccess
        isOpen={isOpenModalSuccess}
        closeModal={handleCloseSuccess}
        title="Activity berhasil dihapus"
      />
    </div>
  );
};

export default ActivityPage;
