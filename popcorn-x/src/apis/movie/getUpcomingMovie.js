'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getUpcomingMovie() {
  try {
    let response = await fetch(
      `${baseUrl}/movie/upcoming`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getUpcomingMovie
