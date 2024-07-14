import axios from "axios";

export const BASE_API_URL = "http://localhost:8080";

export const postData = async (url: string, data: any) => {
  try {
    const response = await axios.post(`${BASE_API_URL}${url}`, data);
    return response;
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
};
