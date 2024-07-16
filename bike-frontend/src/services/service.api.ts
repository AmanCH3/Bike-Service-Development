import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { createServiceRequestBody, GetServiceResponse } from "./service.type";

export const BASE_URL_SERVICE = `${BASE_API_URL}/service`;
export const POST_URL_SERVICE = `${BASE_URL_SERVICE}/details`;

export const getService = async (): Promise<GetServiceResponse[]> => {
  const response = await axios.get(BASE_URL_SERVICE);
  return response.data;
};

// ===========for the post ============
export const createSerivce = async (body: createServiceRequestBody) => {
  const response = await axios.post(POST_URL_SERVICE, body);
  return response.data;
};
