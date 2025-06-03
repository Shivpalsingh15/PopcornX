'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getMovieByAlternativeTitles(id) {
  try {
    let response = await fetch(
      `${baseUrl}/movie/${id}/alternative_titles`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getMovieByAlternativeTitles
