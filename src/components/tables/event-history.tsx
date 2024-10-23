import { Disclosure } from "@headlessui/react";
import Search from "../inputs/search";
import data from "../../assets/event-history.json";
import Status from "../status";
import Select from "../inputs/select";
import { useState } from "react";
import DownloadIcon from "../../assets/icons/download";
import ThreeDotsIcon from "../../assets/icons/three-dot";
import Pagination from "../pagination";
import { eventHistory } from "../../types/event-history";
import ChevronRight from "../../assets/icons/chevron-right";

export default function EventHistoryTable() {
  const [currentPage, setCurrentPage] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");

  const [limit, setLimit] = useState("10");

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className=" w-full justify-between gap-6 flex items-center flex-col lg:flex-row  px-5 md:px-10">
          <div className="w-full md:w-fit flex flex-col md:flex-row items-center gap-3">
            <div className="w-full md:max-w-52">
              <Search placeholder="Search..." />
            </div>
            <div className="w-full md:max-w-24">
              <Select value={date} setValue={setDate} id="date">
                <option value="" disabled>
                  Date
                </option>
              </Select>
            </div>
            <div className="w-full md:max-w-24">
              <Select value={status} setValue={setDate} id="status-filter">
                <option value="" disabled>
                  Status
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
              Displaying 100 results
            </span>
          </div>
          <div className="w-full md:w-fit flex flex-col md:flex-row items-center gap-2">
            <div className="w-full md:w-fit flex gap-2 items-center justify-between md:justify-end">
              <span>Sort</span>
              <div className=" md:max-w-24">
                <Select value={sort} setValue={setSort} id="sort">
                  <option value="" disabled>
                    Most Resent
                  </option>
                </Select>
              </div>
            </div>
            <div className=" w-full md:w-fit flex justify-between md:justify-start">
              <button className=" flex items-center gap-2 border p-2 px-4  dark:border-none dark:bg-dark-500">
                <ThreeDotsIcon />
              </button>
              <button className=" flex items-center gap-2 border p-2 px-4  dark:border-none dark:bg-dark-500">
                <DownloadIcon className=" size-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="hidden md:block  px-5 md:px-10">
            <table className=" w-full overflow-x-auto ">
              <thead className="">
                <tr className=" text-left bg-primary/5 text-gray-500  text-sm m-4">
                  {["Event Name", "Date", "Speaker", "Status"].map((head) => (
                    <th key={head} className=" p-4">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {data.map((request) => {
                  return (
                    <tr key={request?.id} className="">
                      <td className=" min-w-16  p-3">{request?.event_name}</td>
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
          </div>
          <div className="w-full block md:hidden">
            <MobileTable data={data} />
          </div>
        </div>
        <div className=" flex items-center justify-between gap-4 px-5 md:px-10 ">
          <div className=" w-full whitespace-nowrap">
            <Pagination
              pagination={{
                current_page: 1,
                last_page: 3,
                per_page: 10,
                total: 30,
                from: 1,
                to: 10,
              }}
              setCurrentPage={setCurrentPage}
              isLoading={false}
              label="Apartments"
            />
          </div>

          <div className=" flex items-center gap-2">
            <span className=" hidden md:block">Show:</span>
            <div className=" w-fit md:max-w-44">
              <Select value={limit} setValue={setLimit} id="limit">
                <option value="10">10 rows</option>
                <option value="20">20 rows</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileTable({ data }: { data: eventHistory[] }) {
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
                <Disclosure.Panel className=" flex items-center justify-between  px-5 bg-primary/5 dark:bg-dark dark:border-b dark:border-b-white py-4">
                  <p className="">{item.speaker}</p>
                  <span>{item?.date}</span>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
}
