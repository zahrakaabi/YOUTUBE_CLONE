/* -------------------------------------------- */
/*                   DEPENDENCIES               */
/* -------------------------------------------- */
// Packages
import axios from 'axios';

// URLs
import { YTB_VIDEOS_URLS } from './URLs';

/* -------------------------------------------- */
/*       FETCH YOUTUBE V3 VIDEOS OPTIONS        */
/* -------------------------------------------- */
const OPTIONS = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

/* -------------------------------------------- */
/*            FETCH YOUTUBE V3 VIDEOS           */
/* -------------------------------------------- */
export const fetchAPI = async (url) => {
    const {data} = await axios.get(`${YTB_VIDEOS_URLS}/${url}`, OPTIONS);
    //destruct data from result
    return data;
}
    