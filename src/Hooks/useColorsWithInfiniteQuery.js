import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  // pageParam -> returns the page number
  return axios(
    `http://localhost:3004/favouriteColor?_limit=2&&_page=${pageParam}`
  );
};

// (1) - useInfiniteQuery
// Used for making inifnite scrolling with pagination.

// (2) - getNextPageParam
// fetched data for next page.
// lastPage - returns last page
// pages - returns currently fetched pages

export const useColorsWithInfiniteQuery = () => {
  return useInfiniteQuery(["colors-page"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages?.length < 5) {
        return pages?.length + 1;
      } else {
        return undefined;
      }
    },
  });
};
