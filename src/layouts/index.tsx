import React, { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { toggleMenuView } from "../stores/appFunctionality/navMenuFunctions";
import { Link } from "react-router-dom";
import Loader from "../pages/loader";
import NavigationMenu from "./navigationMenu";
import MenuIcon from "../assets/icons/menu";
import NotificationIcon from "../assets/icons/notification";
import ChevronDoubleRight from "../assets/icons/chevron-double-right";

interface layoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: layoutProps) {
  const dispatch = useAppDispatch();
  //get status of side menu from redux store
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );
  const {
    breadCrumb,
    pageTitle,
    pageDescription,
    setFailedToLoad,
    retryRequest,
    isLoading,
    failedToLoad,
  } = useAppSelector((state) => state?.pageProperties?.value);

  //toggle side bar menu using reux dispatcher
  const toggleMenu = useCallback(() => {
    dispatch(toggleMenuView());
  }, []);

  return (
    <main className=" flex w-full h-screen overflow-hidden dark:bg-dark bg-white">
      <nav className="z-10">
        <NavigationMenu />
      </nav>
      <div className=" w-full h-screen overflow-y-auto ">
        <div className="w-full webkit-sticky top-0 z-[8] py-5 h-16 px-5 md:px-10">
          <div className="flex items-center gap-2 text-primary">
            {!fullView && (
              <button
                type="button"
                title="toggle-bar"
                onClick={() => toggleMenu()}
                className=" h-fit"
              >
                {<ChevronDoubleRight />}
              </button>
            )}
            <div className="w-full flex justify-between">
              <h5 className="w-full text-xl md:text-2xl font-semibold text-dark dark:text-white">
                {pageTitle}
              </h5>
              <div className="flex items-center gap-5 w-full justify-end">
                <div className=" relative group w-full flex justify-end cursor-pointer">
                  <NotificationIcon />
                  {/* <div className=" group-hover:flex absolute top-0 right-0 w-full hidden pt-10 justify-end">
                      <NotificationsMenu />
                    </div> */}
                </div>
                <Link
                  to="#"
                  className="flex items-center justify-center w-8 h-8 aspect-square rounded-full overflow-hidden"
                >
                  <img
                    src="/logo192.png"
                    alt="avatar"
                    className="w-full h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-y-auto overflow-x-hidden pb-36 h-[calc(100vh-4rem)] px-5 md:px-10">
          <div className={`w-full ${isLoading ? "block" : "hidden"}`}>
            <Loader
              failed={failedToLoad}
              setFailed={setFailedToLoad}
              tryAgain={retryRequest}
            />
          </div>
          <div
            className={`w-full flex-col gap-10 mt-10 items-center justify-center ${
              isLoading ? "hidden" : "flex"
            }`}
          >
            <div className="max-w-screen-2xl w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
