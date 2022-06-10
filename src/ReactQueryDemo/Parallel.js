import axios from "axios";
import React from "react";
import { useQuery, useQueries } from "react-query";

export default function Parallel({ queryIds }) {
  // (1)
  // Parallel query
  // const fetchMovies = () => { return axios('http://localhost:3333/posts')}
  // const fetchComments = () => { return axios('http://localhost:3333/comments')}

  // const { data: moviesList } = useQuery("fetch-movies",fetchMovies);
  // const { data: comments } = useQuery("fetch-comments",fetchComments);

  // console.log('movieList :>> ', moviesList);
  // console.log('comments :>> ', comments);

  // (2)
  // Dynamic parallel queries
  // useQueries returns array of result of all the query which is executed on value of given array.
  const fetchMovies = (id) => {
    return axios(`http://localhost:3004/posts/${id}`);
  };
  const result = useQueries(
    queryIds.map((queryId) => {
      return {
        queryKey: `parallelId-${queryId}`,
        queryFn: () => fetchMovies(queryId),
      };
    })
  );
  console.log("result :>> ", result);

  return (
    <div>
      {result?.map((el, i) => {
        return (
          <div key={i}>
            {el?.data?.data?.id}. {el?.data?.data?.title} by{" "}
            {el?.data?.data?.author}
          </div>
        );
      })}
    </div>
  );
}
