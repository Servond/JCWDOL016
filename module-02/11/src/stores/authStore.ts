import { create } from "zustand";

interface IUser {
  name: string;
  email: string;
  avatar: string;
  role: string;
}

interface IAuthStore {
  user: IUser | null;
  onAuthSucess: (user: IUser | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  onAuthSucess: (payload) => set(() => ({ user: payload })),
  clearAuth: () => set(() => ({ user: null })),
}));

export default useAuthStore;
