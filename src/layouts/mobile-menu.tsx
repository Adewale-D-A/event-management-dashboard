import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/icons/home";
import CalendarIcon from "../assets/icons/calendar";
import ReportIcon from "../assets/icons/report";
import SpeakerIcon from "../assets/icons/speaker";
import UserIcon from "../assets/icons/user";
export default function MobileMenu() {
  return (
    <nav className="w-full flex items-center gap-2 px-5 ">
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
          id: 7,
          url: "/profile",
          label: "Profile",
          value: "profile",
          show: true,
          notification: {
            show: false,
            value: 0,
          },
          icon: <UserIcon />,
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
        return (
          <div key={items?.id} className="w-full group">
            <NavLink
              to={items?.url}
              className={({ isActive }) =>
                isActive
                  ? `flex justify-center w-full p-2 md:p-3 transition-all py-4  dark:text-white border-primary border-t-4 `
                  : `flex justify-center w-full p-2 md:p-3 transition-all py-4 rounded-md hover:bg-primary/10 text-dark dark:text-white hover:pl-4`
              }
            >
              <div className={`flex items-center flex-col gap-3 `}>
                {items?.icon}
                <span className=" text-sm">{items?.label}</span>
              </div>
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
}
