import React from "react";
import { useEffect, useState } from "react";
import getAllTrending from "src/apis/trending/getAllTrending";

export default function AllTimeTrending() {
  const [allTrendApiResponse, setAllTrendApiResponse] = useState([]);
  const [currentTimeWindow, setCurrentTimeWindow] = useState("day");

  useEffect(() => {
    async function getAllTrendingData(currentTimeWindow) {
      try {
        const allTrending = await getAllTrending(currentTimeWindow);
        console.log(allTrending.results.length);
        setAllTrendApiResponse(allTrending.results || []);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    }
    getAllTrendingData(currentTimeWindow);
  }, [currentTimeWindow]);
  return (
    <div className="p-4 text-gray-200">
      <div className="flex justify-between items-center">
        <h1 className=" font-bold   ">All Time 10 Trending</h1>
        <select onChange={(e)=>setCurrentTimeWindow(e.target.value)} name="" id="">
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
        <span>View more</span>
      </div>
      <div className="flex overflow-x-scroll w-full gap-1">
        {allTrendApiResponse.slice(0,10).map((movie, index) => (
          <div
            key={movie.id}
            className="  min-w-[15vw] text-gray-500 font-bold cursor-pointer ml-10"
          >
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="object-cover rounded mx-auto h-[40vh]"
              />
              <div className="absolute -bottom-5 text-9xl text-gray-300 -left-12">
                {index + 1}
              </div>
            </div>
            <div className="">
              {/* <h2 className="text-lg font-semibold mt-2 ">
                {movie.title || "Title is Missing."}
              </h2>
              <p className="text-sm ">{movie.overview.slice(0, 60)}...</p> */}
              <p>Media: {movie.media_type.toUpperCase()}</p>

              {/* <p>{movie.original_language}</p> */}
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
