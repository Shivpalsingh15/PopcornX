'use client'

import options from "../options";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//query required

async function getTvProvidersWorldwide() {
  try {
    let response = await fetch(
      `${baseUrl}/watch/providers/tv`,
      options
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getTvProvidersWorldwide
