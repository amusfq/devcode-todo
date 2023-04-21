import { ActivityType } from "@/types/activity";
import dayjs from "dayjs";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

type Props = {
  data: ActivityType;
  dataCy: string;
  handleDelete: (data: ActivityType) => void;
};

const ActivityItem = ({ data, dataCy, handleDelete }: Props) => {
  const handleDeleteClick = (e: any) => {
    e.preventDefault();
    handleDelete(data);
  };
  return (
    <Link
      to={`/activity/${data.id}`}
      data-cy={dataCy}
      className="bg-white rounded-xl shadow-lg aspect-square p-6 flex flex-col justify-between"
    >
      <h2 className="font-bold text-lg">{data.title}</h2>
      <div className="flex flex-row items-center justify-between">
        <span className="text-[#888888] text-sm">
          {dayjs(data.created_at).format("D MMMM YYYY")}
        </span>
        <button className="text-[#888888] text-xl" onClick={handleDeleteClick}>
          <HiOutlineTrash />
        </button>
      </div>
    </Link>
  );
};

export default ActivityItem;
