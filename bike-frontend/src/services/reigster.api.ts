// register.type.ts
export interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  contactNumber: string;
  address: string;
}

export interface GetRegisterRequestBody {
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address: string;
}
