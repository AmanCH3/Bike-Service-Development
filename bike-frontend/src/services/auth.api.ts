import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { GetAuthResponse, loginDetailsRequestBody } from "./auth.type";

const BASE_URL = `${BASE_API_URL}/api/auth`; //customer

export const getCredentials = async (): Promise<GetAuthResponse[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const loginFn = async (body: loginDetailsRequestBody) => {
  const response = await axios.post(BASE_URL, body);
  return response.data;
};
