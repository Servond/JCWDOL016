export type User = {
  email: string;
  name: string;
  role: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
