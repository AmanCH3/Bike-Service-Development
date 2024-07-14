// auth.type.ts
export interface GetAuthResponse {
  token: string;
  UserId: string;
  UserType: string;
}

export interface loginDetailsRequestBody {
  email: string;
  password: string;
}

export interface ApiResponse {
  data: GetAuthResponse;
}
