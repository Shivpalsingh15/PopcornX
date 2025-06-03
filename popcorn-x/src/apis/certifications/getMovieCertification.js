'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getMovieCertification() {
  try {
    let response = await fetch(
      `${baseUrl}/certification/movie/list`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getMovieCertification
