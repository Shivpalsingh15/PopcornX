"use client";

import { useEffect, useState } from "react";
import getAllTrending from "src/apis/trending/getAllTrending";
import ReactPaginate from "react-paginate";
import AllTimeTrending from "src/components/trending/allTimeTrending";
import AllTimeTrendingMovie from "src/components/trending/allTimeTrendingMovie";
import AllTimeTrendingTV from "src/components/trending/allTimeTrendingTV";
import AllTimeTrendingPerson from "src/components/trending/allTimeTrendingPerson";

export default function Home() {

  return (
 <div>
  <AllTimeTrending/>
  <AllTimeTrendingMovie/>
  <AllTimeTrendingTV/>
  <AllTimeTrendingPerson/>

 </div>
  );
}
