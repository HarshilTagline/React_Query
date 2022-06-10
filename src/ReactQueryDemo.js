import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function ReactQueryDemo() {

    const fetchData = () => { return axios('http://localhost:3333/posts')}

    const {isLoading, data, isError, isFetching, error } = useQuery("getList",fetchData)
    console.log(isLoading, data, isError, isFetching, error);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error?.message}</div>}
      {data && data?.data?.map((el,i) => {
          return (
              <p key={i}>{i+1}. {el.title} is made by {el.author}.</p>
          )
      })}
    </>
  );
}
