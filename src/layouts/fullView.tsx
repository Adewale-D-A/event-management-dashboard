import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { toggleMenuView } from "../stores/appFunctionality/navMenuFunctions";
import NavigationMenuItems from "../assets/menuItem";
import ToggleButton from "../components/button/toggle";
import ChevronDoubleLeft from "../assets/icons/chevron-double-left";
import ChevronDoubleRight from "../assets/icons/chevron-double-right";
import CancelIcon from "../assets/icons/cancel";

//full view
function FullMenuView() {
  const dispatch = useAppDispatch();

  const [darkMode, setDarkMode] = useState(false);
  //get side bar meny status from redux store
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );

  //toggle side bar menu using redux dispatcher
  const toggleMenu = useCallback(() => {
    dispatch(toggleMenuView());
  }, []);

  const darkModeHandler = useCallback(() => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  }, []);

  return (
    <div
      className={`flex h-screen overflow-y-auto text-white flex-col justify-between gap-10 transition-all ${
        fullView ? "w-[260px]" : "hidden md:w-20 md:flex"
      }`}
    >
      {/* nav items section */}
      <div className=" flex flex-col gap-3 px-2">
        <div className="w-full justify-between md:justify-center flex items-center gap-2 p-2 md:p-5">
          <div className="flex items-center justify-center  gap-2 ">
            <Link
              to={"/"}
              className="flex items-center justify-center h-8 w-8 aspect-square rounded-full overflow-hidden"
            >
              <img src="/logo512.png" alt="avatar" className="w-full h-auto" />
            </Link>
            <div
              className={`text-center ${fullView ? "block" : "hidden"}`}
            ></div>
          </div>

          {fullView && (
            <button
              type="button"
              title="toggle-bar"
              onClick={() => toggleMenu()}
              className=" block md:hidden text-red-500 hover:rotate-90 transition-all"
            >
              <CancelIcon />
            </button>
          )}
        </div>
        <NavigationMenuItems />
        <div className="w-full text-dark dark:text-white  transition-all flex flex-col gap-3 ">
          <button
            onClick={() => toggleMenu()}
            type="button"
            title="toggle bar"
            className={`flex items-center p-2 md:p-3  gap-4 ${
              fullView ? "" : "w-full justify-center"
            }`}
          >
            {fullView ? (
              <ChevronDoubleLeft className=" size-4" />
            ) : (
              <ChevronDoubleRight className=" size-4" />
            )}
            {fullView && <span className=" ">Collapse</span>}
          </button>
          <div
            className={`flex cursor-pointer items-center p-2 md:p-3 gap-2 ${
              fullView ? "" : "w-full justify-center"
            }`}
          >
            {
              <ToggleButton
                id="dark-mode"
                value={darkMode}
                functionHandler={darkModeHandler}
              />
            }
            {fullView && (
              <button onClick={() => darkModeHandler()} className=" ">
                Dark mode
              </button>
            )}
          </div>

          <div
            className={`${
              fullView ? "" : "justify-center"
            } flex items-center gap-3`}
          >
            <div className="flex items-center justify-center h-10 w-10 aspect-square rounded-full overflow-hidden">
              <img src="/logo512.png" alt="avatar" className="w-full h-auto" />
            </div>
            {fullView && (
              <div className=" ">
                <h6 className=" font-semibold">Azeez Adewale</h6>
                <p className=" text-sm">adewale.d.a@outlook.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullMenuView;
