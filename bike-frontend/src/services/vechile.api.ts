import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { createVechileRequestBody, getVechileResponse } from "./vechile.type";
//  ==============Base url for bike==========
const BASE_URL = `${BASE_API_URL}/bike`;

export const getVechile = async (): Promise<getVechileResponse[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
// =============post Data==================
export const createVechile = async (body: createVechileRequestBody) => {
  const response = await axios.post(BASE_URL, body);
  return response.data;
};
