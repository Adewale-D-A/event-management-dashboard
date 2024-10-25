import { useCallback, useEffect, useState } from "react";
import { eventHistory } from "../types/event-history";
import pageOne from "../assets/event-history-pg-1.json";
import pageTwo from "../assets/event-history-pg-2.json";
import pageThree from "../assets/event-history-pg-3.json";

//axios instace interceptor for access token integration and refresh tokens
export default function useGetEventHistory({ id }: { id?: number }) {
  const [data, setData] = useState<eventHistory>({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const getEventHistory = useCallback(async () => {
    try {
      const foundPage = [...pageOne, ...pageTwo, ...pageThree].find(
        (item) => item?.id === id
      );
      setIsLoading(true);
      setData(
        foundPage || {
          id: 21,
          event_name: "Cloud Innovation Summit",
          date: "2024-10-15",
          speaker: "Jane Doe",
          status: "Completed",
        }
      );
      setIsLoading(false);
    } catch (error) {
      setIsFailed(true);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getEventHistory();
    }
  }, [id]);

  return {
    data,
    isLoading,
    isFailed,
    setIsFailed,
    retryFunction: getEventHistory,
  };
}
