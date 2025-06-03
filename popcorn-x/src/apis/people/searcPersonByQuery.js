'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//query required

async function searcPersonByQuery() {
  try {
    let response = await fetch(
      `${baseUrl}/search/person`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default searcPersonByQuery
