export interface GetServiceResponse {
  serviceId: number;
  serviceName: String;
  description: String;
  cost: number;
}

export interface createServiceRequestBody {
  serviceId: number;
  serviceName: String;
  serviceDescription: String;
  cost: number;
}
