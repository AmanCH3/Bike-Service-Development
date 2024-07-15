import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { createServiceRequestBody, GetServiceResponse } from "./service.type";

const BASE_URL_SERVICE = `${BASE_API_URL}/service`;

export const getService = async (): Promise<GetServiceResponse[]> => {
  const response = await axios.get(BASE_URL_SERVICE);
  return response.data;
};

export const createSerivce = async (body: createServiceRequestBody) => {
  const response = await axios.post(BASE_URL_SERVICE, body);
  return response.data;
};
