'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getPersonByChanges(id) {
  try {
    let response = await fetch(
      `${baseUrl}/person/${id}/changes`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getPersonByChanges
