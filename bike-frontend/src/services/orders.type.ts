export interface GetOrdersResponse {
  id: string;
  date: string;
  customer: string;
  amount: string;
  payment: string;
  status: string;
}

export interface CreateOrderRequestBody {
  serviceId: number;
  customerId: number;
  date: string;
  status: string;
  paymentFirst: number;
  paymentType: string;
}
