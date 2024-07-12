import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { CreateOrderRequestBody, GetOrdersResponse } from "./orders.type";

const BASE_URL = `${BASE_API_URL}/appointment`;

export const getOrders = async (): Promise<GetOrdersResponse[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createOrder = async (body: CreateOrderRequestBody) => {
  const response = await axios.post(BASE_URL, body);
  return response.data;
};
