import React from "react";
import { useEffect, useState } from "react";
import getAllTrending from "src/apis/trending/getAllTrending";
import { LuArrowRight } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";



export default function AllTimeTrending() {
  const [allTrendApiResponse, setAllTrendApiResponse] = useState([]);
  const [currentTimeWindow, setCurrentTimeWindow] = useState("day");
  const [starting, setstarting] = useState(0);
  const [ending, setending] = useState(5);

  useEffect(() => {
    async function getAllTrendingData(currentTimeWindow) {
      try {
        const allTrending = await getAllTrending(currentTimeWindow);
        setAllTrendApiResponse(allTrending.results || []);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    }
    getAllTrendingData(currentTimeWindow);
  }, [currentTimeWindow]);

  console.log(starting);
  console.log(ending);

  const handlePrevFive = () => {
    setstarting((prev) => Math.max(prev - 5, 0));
    setending((prev) => Math.max(prev - 5, 5));
  };
  
  const handleNextFive = () => {
    if (ending < allTrendApiResponse.length) {
      setstarting((prev) => prev + 5);
      setending((prev) => Math.min(prev + 5, allTrendApiResponse.length));
    }
  };
  
 
  return (
    <div className="p-4 text-gray-200">
      <div className="flex justify-between items-center text-xs">
        <h1 className=" font-bold   ">All Time 10 Trending</h1>
        <select
          onChange={(e) => setCurrentTimeWindow(e.target.value)}
          name=""
          id=""
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
        <span>View more</span>
      </div>
      <div className="flex  overflow-hidden w-full gap-1 relative ">
        {
          starting > 0 && 
        
        <button
        disabled={starting == 0}
        onClick={handlePrevFive}
        className="absolute  top-[50%] bg-gradient-to-l from-black via-blue-950 to-transparent p-1 rounded-full -left-1 z-50 "
        >
                    <LuArrowLeft/>

        </button>

        }
        {allTrendApiResponse.slice(starting, ending).map((movie, index) => (
          <div
            key={movie.id}
            className="min-w-[15vw]  md:min-w-[13vw] text-gray-500 font-bold cursor-pointer ml-2 md:ml-8 "
          >
            <div className="relative ">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="object-cover rounded mx-auto md:h-[20vh]"
              />
              <div className="absolute -bottom-2 -left-2 text-3xl md:-bottom-5 md:text-6xl text-gray-300 md:-left-8">
              {starting + index + 1}
              </div>
            </div>
            {/* <div className="">
              <p>Media: {movie.media_type.toUpperCase()}</p>
              </div> */}
          </div>
        ))}
        {
          ending < allTrendApiResponse.length && 
        <button
        disabled={ending == allTrendApiResponse.length}
        onClick={handleNextFive}
        className="absolute top-[50%] bg-gradient-to-l from-black via-blue-950 to-transparent p-1  -right-1 rounded-full  z-50"
        >
          <LuArrowRight/>
        </button>
        }
      </div>
    </div>
  );
}
