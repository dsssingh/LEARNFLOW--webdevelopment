export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e0e7926ad2msh887bb5c1bc2ec3ep170b57jsn3ba2f836c7bf",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
}

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e0e7926ad2msh887bb5c1bc2ec3ep170b57jsn3ba2f836c7bf",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
}

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options)
    const data = await res.json()

    return data
  } catch (error) {
    console.log(error.message)
  }
}
