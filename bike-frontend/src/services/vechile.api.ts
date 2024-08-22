import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { createVechileRequestBody, getVechileResponse } from "./vechile.type";
import { json } from "react-router-dom";
//  ==============Base url for bike==========
export const BASE_URL = `${BASE_API_URL}/bike`;
export const POST_BIKE_URL = `${BASE_URL}/details`;

export const getVechile = async (): Promise<getVechileResponse[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
// =============post Data==================
// Example of createVechile function
export const createVechile = async (formData: createVechileRequestBody) => {
  console.log("formdata", formData);
  try {
    const response = await fetch(`${POST_BIKE_URL}`, {
      method: "POST",
      body: JSON.stringify({
        customerId: formData.customerID,
        brand: formData.brand,
        model: formData.model,
        registrationNumber: formData.registrationNumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(formData);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in createVechile:", error);
    throw error;
  }
};
