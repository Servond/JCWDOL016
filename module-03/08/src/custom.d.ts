export type User = {
  email: string;
  role: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
