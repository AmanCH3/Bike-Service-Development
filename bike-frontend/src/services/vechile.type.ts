export interface getVechileResponse {
  bikeId: number;
  brand: string;
  model: string;
  registrationNumber: string;
}

export interface createVechileRequestBody {
  customerID?: number;
  brand: string;
  model: string;
  registrationNumber: string;
}
