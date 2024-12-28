import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import cinemate from "../assest/cinemate.png";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  console.log(params.id);
  const [data, SetData] = useState({});
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : cinemate;
  useEffect(() => {
    async function FetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=853363394f3bf94210b9aeeff596fdb4`
      );
      const json = await response.json();
      SetData(json);
    }
    FetchMovie();
  }, [params]);
  console.log(params);
  useTitle(`Result for ${data.title}/cinemate`);

  return (
    <main>
      <section className="flex justify-around  flex-wrap py-5">
        <div className="max-w-xs">
          <img className="rounded" src={image} alt={data.title} />
        </div>

        <div className="max-w-2xl ml-3  text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl  text-center lg:text-left font-bold my-3">
            {data.title}
          </h1>
          <p className="my-4">{data.overview}</p>
          {data.genres ? (
            <p>
              {data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200  rounded dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center py-5">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span
              
              className=" text-gray-900  dark:text-white"
            >
              {`${data.vote_count} reviews`}
            </span>
          </div>
          <p className="pb-1">
            <span className="mr-2 font-bold">Runtime:</span>
            <span className="font-bold">{data.runtime} min.</span>
          </p>
          <p className="py-2">
            <span className="mr-2 font-bold">Budget:</span>
            <span className="font-bold">{data.budget}</span>
          </p>
          <p className="py-2">
            <span className="mr-2 font-bold">Revenu:</span>
            <span className="font-bold">{data.revenue}</span>
          </p>
          <p className="py-2">
            <span className="mr-2 font-bold">Release_date:</span>
            <span className="font-bold">{data.release_date}</span>
          </p>
           <p className="py-2">
            <span className="mr-2 font-bold">IMDB code:</span>
           <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank" rel="noreferrer">
              <span className="font-bold">{data.imdb_id}</span>
           </a>
          </p> 
          
        </div>
      </section>
    </main>
  );
};
