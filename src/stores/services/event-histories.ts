import { createSlice } from "@reduxjs/toolkit";
import { pagination } from "../../types/pagination";
import { eventHistory } from "../../types/event-history";

import pageOne from "../../assets/event-history-pg-1.json";
import pageTwo from "../../assets/event-history-pg-2.json";
import pageThree from "../../assets/event-history-pg-3.json";

export const eventHistories = createSlice({
  name: "event-histories",
  initialState: {
    value: {
      status: false,
      pagination: [
        {
          pagination_data: {
            current_page: 1,
            last_page: 3,
            per_page: 10,
            total: 30,
            from: 1,
            to: 10,
          },
          data: pageOne,
        },
        {
          pagination_data: {
            current_page: 2,
            last_page: 3,
            per_page: 10,
            total: 30,
            from: 11,
            to: 20,
          },
          data: pageTwo,
        },
        {
          pagination_data: {
            current_page: 3,
            last_page: 3,
            per_page: 10,
            total: 30,
            from: 21,
            to: 30,
          },
          data: pageThree,
        },
      ] as {
        pagination_data: pagination;
        data: eventHistory[];
      }[],
      data: [] as eventHistory[],
    },
  },
  reducers: {
    updateEventHistories: (state, action) => {
      state.value.status = true;
      state.value.data = action?.payload?.data;
    },
    addEventHistoryToList: (state, action) => {
      state.value.data = [...state.value.data, action?.payload];
      //include in pagination data
      const pagination_data = [...state.value.pagination];
      const lastIndex = pagination_data?.length - 1;
      const addedItem = pagination_data.map((item, index) => {
        if (lastIndex === index) {
          return {
            pagination_data: item?.pagination_data,
            data: [...item.data, action?.payload],
          };
        } else {
          return item;
        }
      });
      state.value.pagination = addedItem;
    },
    addToPaginationHistory: (state, action) => {
      const found = state.value?.pagination?.find(
        (item) =>
          item?.pagination_data?.current_page ===
          action?.payload?.pagination_data?.current_page
      );
      if (!found) {
        state.value.pagination = [
          ...state.value.pagination,
          {
            pagination_data: action?.payload?.pagination_data,
            data: action?.payload?.data,
          },
        ];
      }
    },
    removeEventHistoryInList: (state, action) => {
      const { id } = action?.payload;
      const currentArray = [...state.value.data];
      const currentIndex = currentArray.findIndex(
        (v: { id: number }) => v.id === id
      );
      if (currentIndex >= 0) {
        currentArray.splice(currentIndex, 1);
        state.value.data = currentArray;
      }
      //remove from paginated data
      const pagination_data = [...state.value.pagination];
      const removed = pagination_data.map((item, index) => {
        const sencondFilter = item.data.filter((data, i) => {
          return !(Number(data.id) === Number(id));
        });
        return {
          pagination_data: { ...item.pagination_data },
          data: sencondFilter,
        };
      });
      state.value.pagination = removed;
    },
    replaceEventHistoryInList: (state, action) => {
      const { id } = action?.payload;
      const currentArray = state.value.data;
      const currentIndex = currentArray.findIndex(
        (v: { id: number }) => v.id === id
      );
      if (currentIndex >= 0) {
        currentArray.splice(currentIndex, 1, action?.payload);
        state.value.data = currentArray;
      }
      //REPLACE pagination data
      const pagination_data = [...state.value.pagination];
      const replacedItem = pagination_data.map((item, index) => {
        const sencondFilter = item.data.map((data, i) => {
          if (Number(data.id) === Number(id)) {
            return { ...action.payload };
          } else {
            return data;
          }
        });
        return {
          pagination_data: { ...item.pagination_data },
          data: sencondFilter,
        };
      });
      state.value.pagination = replacedItem;
    },
    clearEventHistoriesList: (state) => {
      state.value.status = false;
      state.value.data = [];
    },
  },
});

export const {
  updateEventHistories,
  addEventHistoryToList,
  addToPaginationHistory,
  removeEventHistoryInList,
  replaceEventHistoryInList,
  clearEventHistoriesList,
} = eventHistories.actions;

export default eventHistories.reducer;
