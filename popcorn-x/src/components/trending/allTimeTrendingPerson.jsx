import React from "react";
import { useEffect, useState } from "react";
import getAllTrendingPerson from "src/apis/trending/getAllTrendingPerson";

export default function AllTimeTrendingPerson() {
  const [allTrendPersonApiResponse, setAllTrendPersonApiResponse] = useState(
    []
  );

  useEffect(() => {
    async function getAllTrendPerson() {
      try {
        const allTrendingPerson = await getAllTrendingPerson();
         setAllTrendPersonApiResponse(allTrendingPerson.results || []);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    }
    getAllTrendPerson();
  }, []);
  return (
    <div className="p-4 text-gray-200">
      <div className="flex justify-between items-center">
        <h1 className=" font-bold   ">All Time Trending Person</h1>
        <span>View more</span>
      </div>
      <div className="flex overflow-x-scroll w-full gap-2">
        {allTrendPersonApiResponse?.map((Person) => (
          <div
            key={Person.id}
            className="shadow-lg    min-w-[20vw] text-gray-200"
          >
            <img
              src={
                Person.profile_path
                  ? `https://image.tmdb.org/t/p/w500${Person.profile_path}`
                  : Person.gender === 2
                  ? "https://cdn-icons-png.flaticon.com/512/4140/4140051.png" // Female
                  : "https://cdn-icons-png.flaticon.com/512/4140/4140048.png" // Male
              }
              alt={Person.title}
              className="object-cover rounded mx-auto h-[50vh]"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold  ">
                {Person.name || "Name is Missing."}
              </h2>

              <p className=" font-semibold  ">known for: 
                {Person.known_for_department || "Title is Missing."}
              </p>
              {/* <p className="text-sm ">{Person.overview.slice(0, 120)}...</p> */}
               <p>Popularity: {Person.popularity}</p>

              <p>{Person.original_language}</p>
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
