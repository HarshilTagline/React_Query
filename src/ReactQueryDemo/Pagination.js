import React, { useState } from "react";
import { useColorsWithPagination } from "../Hooks/useColorsWithPagination";

export default function Pagination() {
  // (1) Example of a Pagination

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError, error, isFetching } =
    useColorsWithPagination(pageNumber);

  if (isLoading) {
    return <>Loading....</>;
  }
  if (isError) {
    return <>{error?.message}</>;
  }

  return (
    <div>
      <div>
        {data?.data?.map((el) => {
          return (
            <div key={el?.id}>
              {el?.id}. {el?.color}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        disabled={pageNumber <= 1 || isFetching}
        onClick={() => setPageNumber((page) => page - 1)}
      >
        Prev
      </button>
      <button
        type="button"
        disabled={pageNumber >= 5 || isFetching}
        onClick={() => setPageNumber((page) => page + 1)}
      >
        Next
      </button>
      {isFetching && <div>In background loading...</div>}
    </div>
  );
}
