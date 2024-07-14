import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { GetAuthResponse, CreateDetailsRequestBody } from "./auth.type";

const BASE_URL = `${BASE_API_URL}/customer/details`; //customer

export const getRegister = async (): Promise<GetAuthResponse[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createDetails = async (body: CreateDetailsRequestBody) => {
  const response = await axios.post(BASE_URL, body);
  return response.data;
};
