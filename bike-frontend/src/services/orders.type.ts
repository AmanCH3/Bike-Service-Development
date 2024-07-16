export interface GetOrdersResponse {
  appointmentId: number;
  serviceId: number;
  customerId: number;
  date: string;
  status: string;
  paymentFirst: number;
  paymentType: string;
}

export interface CreateOrderRequestBody {
  appointmentId: number;
  serviceId: number;
  customerId: number;
  date: string;
  status: string;
  paymentFirst: number;
  paymentType: string;
}
