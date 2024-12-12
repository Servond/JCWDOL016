export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IUserPayload {
  name: string;
  email: string;
  password: string;
}
