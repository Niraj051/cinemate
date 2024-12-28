import {Routes,Route} from "react-router-dom";
import { MovieList,MovieDetail,Search,PageNotfound } from "..";
import React from "react";



export const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="" element={<MovieList api="movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList api="movie/popular" />} />
        <Route path="movies/top" element={<MovieList api="movie/top_rated"/>} />
        <Route path="movies/up" element={<MovieList api="movie/upcoming" />} />
        <Route path="search" element={<Search api="search/movie" />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </div>
  )
}
