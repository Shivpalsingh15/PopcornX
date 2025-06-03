import React from "react";
import { useEffect, useState } from "react";
import getAllTrendingTV from "src/apis/trending/getAllTrendingTV";

export default function AllTimeTrendingTV() {
  const [allTrendTVApiResponse, setAllTrendTVApiResponse] = useState([]);

  useEffect(() => {
    async function getAllTrendTV() {
      try {
        const allTrendingTV = await getAllTrendingTV();
        console.log(allTrendingTV);
        setAllTrendTVApiResponse(allTrendingTV.results || []);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    }
    getAllTrendTV();
  }, []);
  return (
    <div className="p-4 text-gray-200">
      <div className="flex justify-between items-center">
        <h1 className=" font-bold   ">All Time Trending TV</h1>
        <span>View more</span>
      </div>
      <div className="flex overflow-x-scroll w-full gap-2">
        {allTrendTVApiResponse?.map((TV) => (
          <div
            key={TV.id}
            className="shadow-lg    min-w-[20vw] text-gray-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${TV.poster_path}`}
              alt={TV.title}
              className="object-cover rounded mx-auto"
            />
            <div className="">
              <h2 className="text-lg font-semibold mt-2 ">
                {TV.title || "Title is Missing."}
              </h2>
              <p className="text-sm ">{TV.overview.slice(0, 120)}...</p>
              <p>{TV.media_type}</p>

              <p>{TV.original_language}</p>
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
