'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getMovieByReleaseDates(id) {
  try {
    let response = await fetch(
      `${baseUrl}/movie/${id}/release_dates`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getMovieByReleaseDates
