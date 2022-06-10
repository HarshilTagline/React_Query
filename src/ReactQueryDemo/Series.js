import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useMoviesName } from "../Hooks/useMoviesName";

export default function Series() {
  const onSuccess = (data) => {
    console.log("After success", data);
  };

  const onError = (error) => {
    console.log("After error", error);
  };

  const fetchData = () => {
    return axios("http://localhost:3333/posts");
  };

  // (1)
  // For getting data from the server and error handling.
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData)

  // (2)
  // For clearing cache after the specified time in cacheTime.
  // default value of cacheTime is 5 minutes.
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{cacheTime: 5000})

  // (3)
  // For reduce the number of requests.
  // staleTime make the query fresh during the specified time and can't fetch the next request if query is in fresh state.
  // default value of staleTime is 0 seconds.
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{staleTime: 30000})

  // (4)
  // refetchOnMount is fetching the data from the api when component is mounted.
  // Default value of refetchOnMount is true.
  // true => always fetch the data when component is mounted but.(When staleTime is active, data will be not fetched).
  // false => fetch data first time but not every time.
  // 'always' => always fetch the data when component is mounted but.(When staleTime is active, data will be fetched).
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{refetchOnMount: true})

  // (5)
  // refetchOnWindowFocus is fetch the data on window focus.
  // Default value is true.
  // true => always fetch the data when window is focused but.(When staleTime is active, data will be not fetched).
  // false => Not fetch the data when window is focused.
  // 'always' => always fetch the data when window is focused but.(When staleTime is active, data will be fetched).
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{staleTime: 30000, refetchOnWindowFocus: true})

  // (6)
  // refetchInterval is fetching data in time interval(Polling).
  // Default value of refetchInterval is false.
  // refetchIntervalInBackground is fetching data in background interval(Polling).
  // Default value of refetchIntervalInBackground is false.
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{refetchInterval: 2000, refetchIntervalInBackground: true})

  // (7)
  // enabled is enable the query to fetch data.
  // Default value is true.
  // false => query is not fetching data on mounting.
  // refetch is enabled the query to fetch data on click or whenever the user needs.
  // const {isLoading, data, isError, isFetching, error, refetch } = useQuery("getList",fetchData,{enabled: false})

  // (8)
  // onSuccess => callback function for performing some effects after successful fetch the data.
  // onError => callback function for performing some effects after failed(error) to fetch the data.
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{onSuccess: onSuccess, onError: onError})

  // (9)
  // select is able to fetch the data with transformation data.
  // We can perform map, filter or any other operations on data any get the desired results.
  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{onSuccess: onSuccess, onError: onError, select: (data)=> {
  //   const fetchDataOnTitle = data?.data?.filter((el) => el.title.includes("Iron man")).map((el) => el.title)
  //   return fetchDataOnTitle
  // } })

  // (10)
  // useMoviesName is custom hook for getting data of movies names.
  // We can use this in every component whenever need.
  // We can pass the onSuccess, onError and others to hooks to perform events after the query.
  const { isLoading, data, isError, isFetching, error } = useMoviesName(
    onSuccess,
    onError
  );

  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{onSuccess: onSuccess, onError: onError, select: (data)=> {
  //   const fetchDataOnTitle = data?.data?.filter((el) => el.title.includes("Iron man")).map((el) => el.title)
  //   return fetchDataOnTitle
  // } })

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error?.message}</div>}
      {/* {data && data?.data?.map((el,i) => {
          return (
              <p key={i}>{i+1}. {el.title} is made by {el.author}.</p>
          )
      })} */}
      {data &&
        data.data.map((el, i) => {
          return (
            <div key={i}>
              <Link to={`/series/${el.id}`}>{el.title}</Link>
            </div>
          );
        })}
      {/* <input type="button" value="fetch data on click" onClick={refetch} /> */}
    </>
  );
}
