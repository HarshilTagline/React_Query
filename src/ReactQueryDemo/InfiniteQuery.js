import React from "react";
import { useColorsWithInfiniteQuery } from "../Hooks/useColorsWithInfiniteQuery";

export default function InfiniteQuery() {
  // (1) hasNextPage
  // Returns boolean - Whether next page is availbale or not

  // (2) fetchNextPage
  // Used for fetching next page

  // (3) isFetchingNextPage
  // Returns the boolean - While fetching next page

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useColorsWithInfiniteQuery();

  if (isLoading) {
    return <>Loading....</>;
  }
  if (isError) {
    return <>{error?.message}</>;
  }

  return (
    <div>
      <div>
        {data?.pages?.map((page, i) => {
          return (
            <React.Fragment key={i}>
              {page?.data?.map((el) => {
                return (
                  <div key={el?.id}>
                    {el?.id}. {el?.color}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
      <button
        disabled={!hasNextPage || isFetchingNextPage || isFetching}
        onClick={fetchNextPage}
      >
        Load more
      </button>
    </div>
  );
}
