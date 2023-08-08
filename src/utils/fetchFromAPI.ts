import axios from "axios";

const enum Domain {
  YoutubeDomain = "youtube-v31.p.rapidapi.com",
}

const BASE_URL = `https://${Domain.YoutubeDomain}`;

axios.defaults.baseURL = BASE_URL;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": Domain.YoutubeDomain,
  },
};

export const fetchFromAPI = async <T>(url: string) => {
  try {
    const { data } = await axios.get<T>(`/${url}`, options);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data from the API.");
  }
};
