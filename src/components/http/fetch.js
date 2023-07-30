import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const APIKEY = "37130003-29aca13880db3956cb217721f";
const hitsOnPage = 12;


export async function fetchGallery(keyword, page) {
  try {
    const {data} = await axios.get("", {
      baseURL: BASE_URL,
      params: { 
            key: APIKEY,
            q: keyword,
            page: page,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: hitsOnPage,
      }
    });
      // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}