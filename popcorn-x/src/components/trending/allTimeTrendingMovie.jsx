import React from "react";
import { useEffect, useState } from "react";
import getAllTrendingMovie from "src/apis/trending/getAllTrendingMovie";

export default function AllTimeTrendingMovie() {
  const [allTrendMovieApiResponse, setAllTrendMovieApiResponse] = useState([]);

  useEffect(() => {
    async function getAllTrendMovie() {
      try {
        const allTrendingMovie = await getAllTrendingMovie();
         setAllTrendMovieApiResponse(allTrendingMovie.results || []);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    }
    getAllTrendMovie();
  }, []);
  return (
    <div className="p-4 text-gray-200">
      <div className="flex justify-between items-center">
        <h1 className=" font-bold   ">All Time Trending Movie</h1>
        <span>View more</span>
      </div>
      <div className="flex overflow-x-scroll w-full gap-2">
        {allTrendMovieApiResponse?.map((movie) => (
          <div
            key={movie.id}
            className="shadow-lg    min-w-[20vw] text-gray-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="object-cover rounded mx-auto"
            />
            <div className="">
              <h2 className="text-lg font-semibold mt-2 ">
                {movie.title || "Title is Missing."}
              </h2>
              <p className="text-sm ">{movie.overview.slice(0, 120)}...</p>
              <p>{movie.media_type}</p>

              <p>{movie.original_language}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-6 gap-2"}
        pageClassName={"px-3 py-1 border rounded"}
        activeClassName={"bg-blue-500 text-white"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
      /> */}
    </div>
  );
}
