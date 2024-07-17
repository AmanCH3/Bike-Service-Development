export interface getVechileResponse {
  bikeId: number;
  brand: string;
  modal: string;
  registrationNumber: string;
}

export interface createVechileRequestBody {
  customerID: number;
  brand: string;
  modal: string;
  registrationNumber: string;
}
