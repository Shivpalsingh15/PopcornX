'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getPersonByTVCredits(id) {
  try {
    let response = await fetch(
      `${baseUrl}/person/${id}/tv_credits`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getPersonByTVCredits
