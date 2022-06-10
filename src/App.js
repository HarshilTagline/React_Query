// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router";
import Home from "./ReactQueryDemo/Home";
import Series from "./ReactQueryDemo/Series";
import Movies from "./ReactQueryDemo/Movies";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import MovieDetail from "./ReactQueryDemo/MovieDetail";
import Parallel from "./ReactQueryDemo/Parallel";
import Dependent from "./ReactQueryDemo/Dependent";
import Pagination from "./ReactQueryDemo/Pagination";
import InfiniteQuery from "./ReactQueryDemo/InfiniteQuery";
import AddMovie from "./ReactQueryDemo/AddMovie";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/series">Series</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/parallel">Parallel Query</NavLink>
            </li>
            <li>
              <NavLink to="/dependent">Dependent Query</NavLink>
            </li>
            <li>
              <NavLink to="/pagination">Pagination</NavLink>
            </li>
            <li>
              <NavLink to="/infinite-query">Infinite query</NavLink>
            </li>
            <li>
              <NavLink to="/add-movie">Add movie</NavLink>
            </li>
          </ul>
        </>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/series/:id" element={<MovieDetail />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route
            exact
            path="/parallel"
            element={<Parallel queryIds={[1, 3, 11]} />}
          />
          <Route
            exact
            path="/dependent"
            element={<Dependent emailId={"email@example.com"} />}
          />
          <Route exact path="/pagination" element={<Pagination />} />
          <Route exact path="/infinite-query" element={<InfiniteQuery />} />
          <Route exact path="/add-movie" element={<AddMovie />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
