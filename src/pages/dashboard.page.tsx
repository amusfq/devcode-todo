import Button from "@/components/button";
import ActivityEmptyState from "@/components/pages/dashboard/activity-empty-state";
import { ActivityType } from "@/types/activity";
import api from "@/utils/fetch";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import ActivityItem from "../components/pages/dashboard/activity-item";
import ModalDelete from "@/components/modal-delete";
import ModalSuccess from "@/components/modal-success";

const DashboardPage = () => {
  const [data, setData] = useState<ActivityType[]>([]);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);
  const [selected, setSelected] = useState<ActivityType>();

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false);
    setSelected(undefined);
  };

  const handleShowModalDelete = (data: ActivityType) => {
    setSelected(data);
    setIsOpenModalDelete(true);
  };

  const handleCloseSuccess = () => setIsOpenModalSuccess(false);

  const handleDelete = () => {
    api
      .delete(`/activity-groups/${selected?.id}`)
      .then(() => getData())
      .finally(() => {
        handleCloseModalDelete();
        setIsOpenModalSuccess(true);
      });
  };

  const handleAddActivity = () => {
    api
      .post("activity-groups", {
        email: import.meta.env.VITE_EMAIL,
        title: "New Activity",
      })
      .then(() => getData());
  };

  const getData = () => {
    api
      .get("/activity-groups", {
        params: {
          email: import.meta.env.VITE_EMAIL,
        },
      })
      .then((response) => {
        setData(response.data.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex flex-row items-center justify-between">
        <h1 data-cy="activity-title" className="font-bold text-4xl">
          Activity
        </h1>
        <Button data-cy="activity-add-button" onClick={handleAddActivity}>
          <div className="flex flex-row items-center space-x-2">
            <HiPlus size={18} />
            <span className="text-lg">Tambah</span>
          </div>
        </Button>
      </div>
      {data.length < 1 && <ActivityEmptyState />}
      {data.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, idx) => (
            <ActivityItem
              key={idx}
              data={item}
              handleDelete={handleShowModalDelete}
            />
          ))}
        </div>
      )}
      <ModalDelete
        isOpen={isOpenModalDelete}
        closeModal={handleCloseModalDelete}
        handleSubmit={handleDelete}
      >
        <p className="text-center">
          Apakah anda yakin menghapus activity <b>“{selected?.title}”</b>?
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

export default DashboardPage;
