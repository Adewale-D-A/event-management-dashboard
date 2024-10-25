import { useCallback } from "react";
import UsersAvatarCount from "../../assets/icons/users-avatar-cout";
import { useAppDispatch } from "../../stores/hooks";
import {
  removeEventHistoryInList,
  replaceEventHistoryInList,
} from "../../stores/services/event-histories";
import { openSnackbar } from "../../stores/appFunctionality/snackbar";
import useGetEventHistory from "../../service-hook/useGetEventHistory";

export default function EventDetail({
  id,
  setOpen,
}: {
  id: number;
  setOpen: Function;
}) {
  const dispatch = useAppDispatch();

  const { data, isLoading, isFailed, setIsFailed, retryFunction } =
    useGetEventHistory({
      id,
    });

  const handleEdit = useCallback(() => {
    dispatch(
      openSnackbar({
        message: `${data?.event_name} successfully edited`,
        isError: false,
      })
    );
    setOpen(false);
  }, [data]);
  const handleDelete = useCallback(() => {
    dispatch(removeEventHistoryInList({ id }));
    dispatch(
      openSnackbar({
        message: `${data?.event_name} successfully deleted`,
        isError: false,
      })
    );
    setOpen(false);
  }, [data]);
  const handleMarkAsCompleted = useCallback(() => {
    dispatch(replaceEventHistoryInList({ ...data, status: "Completed" }));
    dispatch(
      openSnackbar({
        message: "Event successfully updated",
        isError: false,
      })
    );
    setOpen(false);
  }, [data]);
  return (
    <div className=" flex flex-col gap-4">
      <p className=" text-gray-500 dark:text-gray-100 px-7">{data?.date}</p>
      <div className=" flex flex-col gap-8 px-7">
        <p>Event Desciption</p>
        <div className=" flex flex-col gap-10">
          <UsersAvatarCount
            dataset={[
              { id: "1", profile: "/logo192.png" },
              { id: "2", profile: "/logo192.png" },
              { id: "3", profile: "/logo192.png" },
            ]}
          />
          <div>
            <p>
              3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C.
            </p>
            <span>300 Attendees</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50/30 dark:bg-white/40 flex flex-col md:flex-row md:items-start md:justify-between gap-4 p-4 md:gap-16">
        <div className="w-full md:max-w-16">
          <button
            onClick={() => handleEdit()}
            className=" w-full md:w-fit border bg-white text-black  hover:border-2 transition-all rounded-sm text-center p-2 "
          >
            Edit
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 md:flex-row">
          <div className="w-full md:max-w-20">
            <button
              onClick={() => handleDelete()}
              className=" w-full md:w-fit  bg-red-500 hover:bg-red-600 transition-all text-white rounded-sm text-center p-2 "
            >
              Delete
            </button>
          </div>
          <div className="w-full md:w-fit">
            <button
              onClick={() => handleMarkAsCompleted()}
              className="w-full md:w-fit bg-primary-500 hover:bg-primary-500/80 transition-all text-white  rounded-sm text-center p-2 "
            >
              Mark as completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
