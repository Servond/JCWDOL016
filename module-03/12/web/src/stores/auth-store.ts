import { create } from "zustand";
import { deleteCookie } from "cookies-next";

export interface IUser {
  name: string;
  email: string;
  role: string;
}

interface IAuthStore {
  user: IUser | null;
  onAuthSuccess: (user: IUser | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  onAuthSuccess: (payload) => set(() => ({ user: payload })),
  clearAuth: () => {
    set(() => ({ user: null }));
    deleteCookie("access_token");
  },
}));

export default useAuthStore;
