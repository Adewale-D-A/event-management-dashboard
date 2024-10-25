import { useCallback } from "react";
import LoaderIcon from "../../assets/icons/loader";
import { pagination } from "../../types/pagination";
import ChevronLeft from "../../assets/icons/chevron-left";
import ChevronRight from "../../assets/icons/chevron-right";

export default function Pagination({
  pagination,
  setCurrentPage,
  isLoading,
  label,
}: {
  pagination: pagination;
  setCurrentPage: Function;
  isLoading: boolean;
  label?: string;
}) {
  // productsArray next function
  const showNextproductsArray = useCallback(() => {
    if (pagination?.total >= pagination?.current_page * pagination?.per_page) {
      setCurrentPage((prev: number) => prev + 1);
    }
  }, [pagination]);

  // productsArray next previous
  const showPrevproductsArray = useCallback(() => {
    if (!(pagination?.current_page < 1)) {
      setCurrentPage((prev: number) => prev - 1);
    }
  }, [pagination]);
  return (
    <div className="w-full flex items-center justify-start gap-2 my-8">
      <button
        title="previous"
        type="button"
        disabled={pagination?.current_page < 2 || isLoading}
        className={`${
          pagination?.current_page < 2
            ? "border-gray-500 cursor-not-allowed bg-gray-200 dark:bg-dark-500"
            : "hover:bg-primary hover:text-white border-primary cursor-pointer "
        } size-10 aspect-square p-3 flex items-center justify-center transition-all `}
        onClick={() => showPrevproductsArray()}
      >
        {isLoading ? (
          <LoaderIcon className=" h-4 w-4 animate-spin" />
        ) : (
          <ChevronLeft className=" h-3 w-3" />
        )}
      </button>
      <div className="flex gap-2  justify-between md:justify-center ">
        {Array.from({ length: pagination?.last_page }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentPage(index + 1)}
            className={` min-h-5 min-w-5 aspect-square flex items-center justify-center rounded-full p-3 hover:border hover:border-primary transition-all cursor-pointer ${
              index + 1 === pagination?.current_page
                ? "border-primary bg-primary-500 text-white "
                : ""
            }}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        type="button"
        title="next"
        disabled={
          pagination?.last_page <= pagination?.current_page || isLoading
        }
        className={`${
          pagination?.last_page <= pagination?.current_page
            ? "border-gray-500 cursor-not-allowed"
            : "hover:bg-primary hover:text-white dark:border-none cursor-pointer border "
        }  size-10 aspect-square  p-3 flex items-center justify-center transition-all dark:bg-dark-500 `}
        onClick={() => showNextproductsArray()}
      >
        {isLoading ? (
          <LoaderIcon className=" h-4 w-4 animate-spin" />
        ) : (
          <ChevronRight className=" h-3 w-3" />
        )}
      </button>
    </div>
  );
}
