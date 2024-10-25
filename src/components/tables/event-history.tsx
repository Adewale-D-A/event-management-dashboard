import { useCallback, useState } from "react";
import { Disclosure } from "@headlessui/react";
import Search from "../inputs/search";
import Status from "../status";
import Select from "../inputs/select";
import DownloadIcon from "../../assets/icons/download";
import ThreeDotsIcon from "../../assets/icons/three-dot";
import Pagination from "../pagination";
import { eventHistory } from "../../types/event-history";
import ChevronRight from "../../assets/icons/chevron-right";
import ModalTemplate from "../modal";
import EventDetail from "../../pages/events/event-detail";
import useGetAllEventHistories from "../../service-hook/useGetAllEventHistories";
import NoResult from "../noResult";

export default function EventHistoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("All");
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const [limit, setLimit] = useState("10");

  const { data, isLoading, isFailed, setIsFailed, retryFunction, pagination } =
    useGetAllEventHistories({
      page: currentPage,
      sortStatus: status,
      sort: sort,
      search: search,
    });

  const openModal = useCallback((id: number) => {
    setSelectedId(id);
    setOpenDetail(true);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-5 ">
        <div className=" w-full justify-between gap-6 flex items-center flex-col lg:flex-row px-5 md:px-10">
          <div className="w-full md:w-fit flex flex-col md:flex-row items-center gap-3">
            <div className="w-full md:max-w-48">
              <Search
                placeholder="Search..."
                search={search}
                setSearch={setSearch}
              />
            </div>
            <div className="w-full md:max-w-24">
              <Select value={date} setValue={setDate} id="date">
                <option value="" disabled>
                  Date
                </option>
              </Select>
            </div>
            <div className="w-full md:max-w-24">
              <Select value={status} setValue={setStatus} id="status-filter">
                <option value="All" disabled>
                  Status
                </option>
                <option value="All" className=" text-black">
                  All
                </option>
                <option value="Complete" className=" text-black">
                  Completed
                </option>
                <option value="In Progress" className=" text-black">
                  In Progress
                </option>
              </Select>
            </div>
            <div className="w-full md:max-w-24">
              <Select value={name} setValue={setDate} id="name-filter">
                <option value="" disabled>
                  Name
                </option>
              </Select>
            </div>
            <span className="w-full text-left font-semibold whitespace-nowrap">
              Displaying 10 results
            </span>
          </div>
          <div className="w-full md:w-fit flex flex-col md:flex-row justify-end items-center gap-2 ">
            <div className="w-full md:max-w-44 flex gap-2 items-center justify-between ">
              <span className="">Sort</span>
              <div className="w-full max-w-36 md:w-24">
                <Select value={sort} setValue={setSort} id="sort">
                  <option value="" disabled>
                    Most Resent
                  </option>
                  <option value="asc" className=" text-black">
                    Ascending
                  </option>
                  <option value="desc" className=" text-black">
                    Descending
                  </option>
                </Select>
              </div>
            </div>
            <div className=" w-full md:max-w-44 flex justify-between md:justify-start">
              <button className=" flex items-center border p-2 px-4  dark:border-none dark:bg-dark-500">
                <ThreeDotsIcon />
              </button>
              <button className=" flex items-center gap-2 border p-2 px-4  dark:border-none dark:bg-dark-500">
                <DownloadIcon className=" size-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  ">
          <div className="hidden md:block px-5 md:px-10">
            <div className="dark:bg-dark-500">
              {data && data.length > 0 ? (
                <table className=" w-full overflow-x-auto ">
                  <thead className="">
                    <tr className=" text-left bg-white/10 text-gray-500 dark:text-gray-200  text-sm m-4">
                      {["Event Name", "Date", "Speaker", "Status"].map(
                        (head) => (
                          <th key={head} className=" p-4">
                            {head}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="">
                    {data.map((request) => {
                      return (
                        <tr key={request?.id} className="">
                          <td className=" min-w-16  p-3">
                            <button
                              onClick={() => openModal(request?.id)}
                              title="more detail"
                            >
                              {request?.event_name}
                            </button>
                          </td>
                          <td className=" min-w-36 p-3">{request?.date}</td>
                          <td className=" p-3">{request?.speaker}</td>
                          <td>
                            <Status status={request?.status} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <NoResult />
              )}
            </div>
          </div>
          <div className="w-full block md:hidden dark:bg-dark-500">
            <MobileTable data={data} handlePreview={openModal} />
          </div>
        </div>
        <div className=" flex items-center justify-between gap-4 px-5 md:px-10 ">
          <div className=" w-full whitespace-nowrap">
            <Pagination
              pagination={pagination}
              setCurrentPage={setCurrentPage}
              isLoading={false}
              label="Apartments"
            />
          </div>

          <div className="w-full md:max-w-44 flex items-center gap-2">
            <span className=" hidden md:block">Show:</span>
            <Select value={limit} setValue={setLimit} id="limit">
              <option value="10" className=" text-black">
                10 rows
              </option>
              <option value="20" className=" text-black" disabled>
                20 rows
              </option>
            </Select>
          </div>
        </div>
      </div>

      {/*open more detail*/}
      <ModalTemplate
        open={openDetail}
        setOpen={setOpenDetail}
        showXicon={true}
        title="Event Name"
        className=" max-w-md"
      >
        <div className="w-full">
          <EventDetail id={selectedId} setOpen={setOpenDetail} />
        </div>
      </ModalTemplate>
    </>
  );
}

function MobileTable({
  data,
  handlePreview,
}: {
  data: eventHistory[];
  handlePreview: Function;
}) {
  return (
    <div className=" w-full flex flex-col">
      <div className=" flex items-center justify-between py-3 font-semibold text-gray-500 text-sm bg-gray-100 dark:bg-dark-500 dark:text-white px-5">
        <span>Event Name</span>
        <span>Status</span>
      </div>
      {data.map((item, index) => {
        return (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="py-4 text-sm flex flex-col">
                <Disclosure.Button
                  className={`${
                    open
                      ? " bg-gray-100 dark:bg-dark-500 py-4 "
                      : "py-0 dark:bg-dark/5"
                  } flex px-5 w-full justify-between items-center transition-all gap-4 text-left font-medium focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75`}
                >
                  <div className={`   flex items-center gap-3`}>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        open ? "rotate-90 transform" : "rotate-0"
                      } text-black dark:text-white`}
                    />
                    <p className="">{item.event_name}</p>
                  </div>
                  <Status status={item?.status} />
                </Disclosure.Button>
                <Disclosure.Panel className="w-full">
                  <button
                    onClick={() => handlePreview(item?.id)}
                    className="w-full flex items-center justify-between  px-5 bg-primary/5 dark:bg-dark dark:border-b dark:border-b-white py-4"
                  >
                    <p className="">{item.speaker}</p>
                    <span>{item?.date}</span>
                  </button>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
}
