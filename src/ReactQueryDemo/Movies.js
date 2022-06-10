// import axios from "axios";
import React from "react";
// import { useQuery } from "react-query";
import { useMoviesName } from "../Hooks/useMoviesName";

export default function Movies() {
  const onSuccess = (data) => {
    console.log("After success 22222", data);
  };

  const onError = (error) => {
    console.log("After error 22222", error);
  };

  // const fetchData = () => { return axios('http://localhost:3333/posts')}

  // const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData,{cacheTime: 5000})
  const { isLoading, data, isError, isFetching, error } = useMoviesName(
    onSuccess,
    onError
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error?.message}</div>}
      {data &&
        data?.data?.map((el, i) => {
          return (
            <p key={i}>
              {i + 1}. {el.title} is made by {el.author}.
            </p>
          );
        })}
      {/* {data && data.map((el,i) => {
        return (
          <p key={i}>{el}</p>
        )
      })} */}
    </>
  );
}
