import React from "react";
import { useMovieDetails } from "../Hooks/useMovieDetails";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useMovieDetails(id);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error?.message}</div>}
      {data && (
        <div>
          A {data?.data?.title} is made by {data?.data?.author}.
        </div>
      )}
    </>
  );
}
