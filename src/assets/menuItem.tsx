import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../stores/hooks";
import MenuIcon from "./icons/menu";
import HomeIcon from "./icons/home";
import CalendarIcon from "./icons/calendar";
import ReportIcon from "./icons/report";
import NotificationIcon from "./icons/notification";
import MessageIcon from "./icons/message";
import SettingIcon from "./icons/settings";
import SpeakerIcon from "./icons/speaker";

export default function NavigationMenuItems() {
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );

  return (
    <div
      className={`flex flex-col gap-3 ${
        fullView ? "justify-start" : "justify-center"
      }`}
    >
      {[
        {
          id: 1,
          url: "/",
          label: "Home",
          value: "home",
          show: true,
          notification: {
            show: false,
            value: 0,
          },
          icon: <HomeIcon />,
          hasSubMenu: false,
          subMenu: [
            {
              url: "#",
              label: "",
              value: "",
              show: true,
              icon: "",
              id: 1.1,
            },
          ],
        },
        {
          id: 2,
          url: "/events",
          label: "Events",
          value: "events",
          show: true,
          notification: {
            show: false,
            value: 0,
          },
          icon: <CalendarIcon />,
          hasSubMenu: false,
          subMenu: [
            {
              url: "#",
              label: "",
              value: "",
              show: true,
              icon: "",
              id: 1.1,
            },
          ],
        },
        {
          id: 3,
          url: "/speakers",
          label: "Speakers",
          value: "speakers",
          show: true,
          notification: {
            show: false,
            value: 0,
          },
          icon: <SpeakerIcon />,
          hasSubMenu: false,
          subMenu: [
            {
              url: "#",
              label: "",
              value: "",
              show: true,
              icon: "",
              id: 1.1,
            },
          ],
        },
        {
          id: 4,
          url: "/reports",
          label: "Reports",
          value: "reports",
          show: true,
          notification: {
            show: false,
            value: 0,
          },
          icon: <ReportIcon />,
          hasSubMenu: false,
          subMenu: [
            {
              url: "#",
              label: "",
              value: "",
              show: true,
              icon: "",
              id: 1.1,
            },
          ],
        },
        {
          id: 5,
          url: "/notifications",
          label: "Notifications",
          value: "notifications",
          show: true,
          notification: {
            show: true,
            value: 3,
          },
          icon: <NotificationIcon />,
          hasSubMenu: false,
          subMenu: [
            {
              url: "#",
              label: "",
              value: "",
              show: true,
              icon: "",
              id: 1.1,
            },
          ],
        },
        {
          id: 6,
          url: "/messages",
          label: "Messages",
          value: "messages",
          show: true,
          notification: {
            show: false,
            value: 0,
          },
          icon: <MessageIcon />,
          hasSubMenu: false,
          subMenu: [
            {
              url: "#",
              label: "",
              value: "",
              show: true,
              icon: "",
              id: 1.1,
            },
          ],
        },
        {
          id: 7,
          url: "/settings",
          label: "Settings",
          value: "settings",
          show: true,
          notification: {
            show: false,
            value: 0,
          },
          icon: <SettingIcon />,
          hasSubMenu: false,
          subMenu: [
            {
              url: "#",
              label: "",
              value: "",
              show: true,
              icon: "",
              id: 1.1,
            },
          ],
        },
      ]?.map((items) => {
        if (items?.show) {
          return (
            <div key={items?.id} className="w-full group">
              <NavLink
                to={items?.url}
                className={({ isActive }) =>
                  isActive
                    ? `flex justify-between w-full p-2 md:p-3 transition-all rounded-md text-white dark:text-white bg-primary `
                    : `flex justify-between w-full p-2 md:p-3 transition-all  rounded-md hover:bg-primary/10 text-dark dark:text-white hover:pl-4`
                }
              >
                <div
                  className={`flex items-center gap-4 ${
                    fullView ? "" : "w-full justify-center"
                  }`}
                >
                  <span className="">{items?.icon}</span>
                  {fullView && <span className=" ">{items?.label}</span>}{" "}
                </div>
                {items?.hasSubMenu && fullView && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </NavLink>
              {items?.hasSubMenu && fullView && (
                <div className=" w-full ml-5 group-hover:my-4 transition-all">
                  {items?.subMenu.map((subItem) => {
                    if (subItem?.show) {
                      return (
                        <Link
                          to={subItem?.url}
                          key={subItem?.id}
                          className=" text-gray-500 group-hover:flex hidden hover:text-primary"
                        >
                          <div className="flex items-center">
                            {subItem?.icon}{" "}
                            <span className=" ">{subItem?.label}</span>{" "}
                          </div>
                        </Link>
                      );
                    } else return;
                  })}
                </div>
              )}
            </div>
          );
        } else {
          return;
        }
      })}
    </div>
  );
}
