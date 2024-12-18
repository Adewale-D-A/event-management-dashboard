import { useAppSelector } from "../stores/hooks";
import FullMenuView from "./fullView";

function NavigationMenu() {
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );

  return (
    <div
      className={`${
        fullView ? "fixed md:relative top-0 left-0" : ""
      } bg-white dark:bg-dark-500`}
    >
      <FullMenuView />
    </div>
  );
}

export default NavigationMenu;
