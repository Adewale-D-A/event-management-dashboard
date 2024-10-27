import React, { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { toggleMenuView } from "../stores/appFunctionality/navMenuFunctions";
import { Link } from "react-router-dom";
import Loader from "../pages/loader";
import NavigationMenu from "./navigationMenu";
import BarsIcon from "../assets/icons/bar";
import MobileMenu from "./mobile-menu";

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
    <main className=" flex w-full dark:bg-dark bg-white items-stretch">
      <nav className=" z-20 fixed top-0">
        <NavigationMenu />
      </nav>
      <div
        className={`${
          fullView ? " md:ml-[260px]" : " md:ml-20"
        } w-full transition-all`}
      >
        <div className="w-full webkit-sticky top-0  bg-white dark:bg-dark-500 z-10 py-5 px-5 md:px-10 flex items-center gap-2 text-primary">
          <div className="w-full flex justify-between">
            <h5 className="w-full text-xl md:text-2xl hidden md:block font-semibold text-dark dark:text-white">
              {pageTitle}
            </h5>
            <div className="flex items-center gap-5 w-full md:justify-end">
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
            </div>{" "}
            {!fullView && (
              <button
                type="button"
                title="toggle-bar"
                onClick={() => toggleMenu()}
                className=" h-fit block md:hidden dark:text-white"
              >
                {<BarsIcon className=" size-8" />}
              </button>
            )}
          </div>
        </div>
        <div className=" w-full min-h-screen">
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
            <div className="max-w-screen-2xl w-full h-full mb-16">
              {children}
            </div>
          </div>
        </div>
        <div className="w-full webkit-sticky bottom-0 block md:hidden z-10 border-t dark:border-t-white bg-white dark:bg-dark">
          <MobileMenu />
        </div>
      </div>
      {fullView && (
        <div
          className=" fixed top-0 left-0 w-full h-screen z-[18] block md:hidden backgrop-bg-filter"
          onClick={() => toggleMenu()}
        ></div>
      )}
    </main>
  );
}

export default MainLayout;
