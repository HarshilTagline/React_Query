import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios("http://localhost:3004/posts");
};

export const useMoviesName = (onSuccess, onError) => {
  return useQuery("getList", fetchData, {
    onSuccess: onSuccess,
    onError: onError,
    //     , select: (data)=> {
    //     // const fetchDataOnTitle = data?.data?.filter((el) => el.title.includes("Iron man")).map((el) => el.title)
    //     const fetchDataOnTitle = data?.data?.map((el) => el.title)
    //     return fetchDataOnTitle
    // }
  });
};
