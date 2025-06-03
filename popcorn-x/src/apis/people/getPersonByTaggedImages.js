'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getPersonByTaggedImages(id) {
  try {
    let response = await fetch(
      `${baseUrl}/person/${id}/tagged_images`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getPersonByTaggedImages
