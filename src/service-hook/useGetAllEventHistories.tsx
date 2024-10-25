import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { updateEventHistories } from "../stores/services/event-histories";
import { pagination } from "../types/pagination";
import pageOne from "../assets/event-history-pg-1.json";
import pageTwo from "../assets/event-history-pg-2.json";
import pageThree from "../assets/event-history-pg-3.json";
import { eventHistory } from "../types/event-history";

//axios instace interceptor for access token integration and refresh tokens
export default function useGetAllEventHistories({
  page = 1,
  sortStatus = "All",
  sort,
  search,
}: {
  page?: number;
  sortStatus?: "All" | "Complete" | "In Progress" | string;
  sort?: "desc" | "asc" | string;
  search?: string;
}) {
  const dispatch = useAppDispatch();
  const {
    status,
    data,
    pagination: store_pagination,
  } = useAppSelector((state) => state.eventHsitories.value);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const [pagination, setPagination] = useState<pagination>({} as any);
  const getAllApartmentList = useCallback(async () => {
    try {
      setIsLoading(true);
      //check store if this requested data has been saved previously and retirve it
      //if not, make a new request and save into store
      const foundPage = store_pagination.find(
        (item) => item?.pagination_data?.current_page === page
      );
      if (foundPage && sortStatus === "All" && !sort && !search) {
        setPagination(foundPage?.pagination_data);
        dispatch(updateEventHistories({ data: foundPage?.data }));
      } else {
        let Reformed = pageOne as eventHistory[];
        // handle filtering
        if (sortStatus === "Complete" || sortStatus === "In Progress") {
          Reformed = [...pageOne, ...pageTwo, ...pageThree]?.filter((item) =>
            item?.status?.toLowerCase().includes(sortStatus.toLowerCase())
          );
        }
        // handle sorting
        if (sort) {
          Reformed = [...Reformed].sort(function (a, b) {
            if (sort === "desc") {
              return b?.event_name?.localeCompare(a?.event_name);
            } else {
              return a?.event_name?.localeCompare(b?.event_name);
            }
          });
        }
        if (search) {
          Reformed = [...pageOne, ...pageTwo, ...pageThree]?.filter((item) =>
            item?.event_name?.toLowerCase().includes(search.toLowerCase())
          );
        }

        const paginatedResult = {
          current_page: 1,
          last_page: 1,
          per_page: Reformed?.length,
          total: Reformed?.length,
          from: 1,
          to: Reformed?.length,
        };
        dispatch(updateEventHistories({ data: Reformed }));
        setPagination(paginatedResult);
      }
      setIsLoading(false);
    } catch (error) {
      setIsFailed(true);
    }
  }, [page, sortStatus, sort, search]);

  useEffect(() => {
    getAllApartmentList();
  }, [page, sortStatus, sort, search]);

  return {
    data,
    isLoading,
    isFailed,
    setIsFailed,
    retryFunction: getAllApartmentList,
    pagination,
  };
}
