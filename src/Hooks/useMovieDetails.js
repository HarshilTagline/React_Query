import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchData = ({ queryKey }) => {
  // queryKey returns the array which is passed in useQuery.
  const id = queryKey[1];
  return axios(`http://localhost:3004/posts/${id}`);
};

const addMovie = (data) => {
  return axios.post(`http://localhost:3004/posts/`, data);
};

export const useMovieDetails = (id) => {
  //   return useQuery(["getList", id], () => fetchData(id));

  // (1)
  // useQueryClient returns the data of all queries which are already cached.
  // By using getQueryData() function, we can get particular query data.

  // (2) - initialData
  // It is used for providing the initial data to the query.
  // It is used the data of cached queries.
  // For avoiding the initial loading on low network connection.

  const queryClient = useQueryClient();

  // Without passing id in fetchData
  return useQuery(["getList", id], fetchData, {
    initialData: () => {
      const detail = queryClient
        .getQueryData("getList")
        ?.data?.find((el) => el?.id?.toString() === id?.toString());
      if (detail) {
        return { data: detail };
      } else {
        return undefined;
      }
    },
  });
};

export const useAddMovie = (onSuccess) => {
  // useMutation - function for performing mutation

  // (1) invalidateQueries
  // Used for calling the particular query after successfully called the mutation

  // (2) setQueriesData
  // Used for set data into the query cache after successfully called the mutation
  // oldQueryData - it is current(old) data of that particular query

  // (3) onMutate
  // run when mutation called
  // cancelQueries -> For cancelling the particular query

  // (4) onSettled
  // Run after successfully mutation the query
  const queryClient = useQueryClient();
  return useMutation(addMovie, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("getList");
    //   queryClient.setQueriesData("getList", (oldQueryData) => {
    //     return { ...oldQueryData, data: [...oldQueryData.data, data.data] };
    //   });
    //   onSuccess(data);
    // },
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("getList");
      const previousHeroData = queryClient.getQueriesData("getList");
      queryClient.setQueriesData("getList", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return { previousHeroData };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueriesData("getList", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("getList");
      onSuccess();
    },

    // onSuccess runs before onSettled

    // onSuccess: async () => {
    //   console.log("I'm first!")
    // },
    // onSettled: async () => {
    //   console.log("I'm second!")
    // },
  });
};
