'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getAllTrendingPerson() {
  try {
    let response = await fetch(
      `${baseUrl}/trending/person/day?language=en-US`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getAllTrendingPerson
