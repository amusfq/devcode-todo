import Button from "@/components/button";
import Modal from "@/components/modal";
import ModalDelete from "@/components/modal-delete";
import ModalSuccess from "@/components/modal-success";
import TodoEmptyState from "@/components/pages/dashboard/todo-empty.state";
import Select from "@/components/select";
import { ActivityDetailType, TodoType } from "@/types/activity";
import api from "@/utils/fetch";
import { useEffect, useRef, useState } from "react";
import {
  HiChevronLeft,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
} from "react-icons/hi";
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

  const handleSubmitModal = () => {
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
            className="absolute opacity-0 pointer-events-none"
          >
            {data.title}
          </span>
          <input
            ref={titleRef}
            data-cy="todo-title"
            type="text"
            style={{ width }}
            className="bg-transparent"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.currentTarget.value })}
            disabled={!isEdit}
            onBlur={handleUpdateTitle}
          />
          <button
            className="text-gray-400 text-2xl"
            onClick={() => setIsEdit(!isEdit)}
            data-cy="todo-title-edit-button"
          >
            <HiOutlinePencil />
          </button>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <button
            data-cy="todo-sort-button"
            className="rounded-full border h-12 w-12 flex items-center justify-center text-2xl text-gray-500"
          >
            <HiArrowsUpDown />
          </button>
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
        {data.todo_items.map((item, idx) => (
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
              />
              <span
                data-cy="todo-item-priority-indicator"
                className="block w-3 h-3 rounded-full"
                style={{ background: colors[item.priority] }}
              ></span>
              <span className="text-lg font-semibold" data-cy="todo-item-title">
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
