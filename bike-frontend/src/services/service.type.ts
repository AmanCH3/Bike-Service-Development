export interface GetServiceResponse {
  serviceName: String;
  serviceDescription: String;
  cost: number;
}

export interface createServiceRequestBody {
  serviceId: number;
  serviceName: String;
  serviceDescription: String;
  cost: number;
}
