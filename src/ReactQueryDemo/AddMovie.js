import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddMovie } from "../Hooks/useMovieDetails";
import { useMoviesName } from "../Hooks/useMoviesName";

export default function AddMovie() {
  const [movieDetail, setMovieDetail] = useState({
    title: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieDetail({ ...movieDetail, [name]: value });
  };

  const onSuccess = () => {
    setMovieDetail({
      title: "",
      author: "",
    });
  };

  const data = useAddMovie(onSuccess);

  // (1) - mutate
  // Used for calling the mutate query
  const { mutate: addMovie } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movieDetail);
  };
  const handleOnSuccessGetList = () => {
    console.log("Successfully getting list");
  };

  const handleOnErrorGetList = () => {
    console.log("Failed to fetched the list");
  };

  const { data: listOfMovie, refetch } = useMoviesName(
    handleOnSuccessGetList,
    handleOnErrorGetList
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="movie name"
          value={movieDetail.title || ""}
        />
        <input
          type="text"
          onChange={handleChange}
          name="author"
          placeholder="author name"
          value={movieDetail.author || ""}
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={refetch}>Fetched list</button>
      <div>
        {listOfMovie?.data?.length &&
          listOfMovie?.data?.map((el, i) => {
            return (
              <div key={i}>
                <Link to={`/series/${el.id}`}>{el.title}</Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
