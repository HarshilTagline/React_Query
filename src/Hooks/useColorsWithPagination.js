import axios from "axios";
import { useQuery } from "react-query";

const fetchColors = (number) => {
  // _limit => limit of records per page.
  // _page => page number for getting records of that page.
  return axios(
    `http://localhost:3004/favouriteColor?_limit=2&&_page=${number}`
  );
};

// (1) = keepPreviousData
// For keep previous data while fetching the next page.
// By default is false

export const useColorsWithPagination = (pageNumber) => {
  return useQuery(["colors-page", pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData: true,
  });
};
