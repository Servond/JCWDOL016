import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ICounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (payload: number) => void;
}

// tanpa menyimpan ke storage
const useCounterStore = create<ICounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementByAmount: (payload) =>
    set((state) => ({ count: state.count + payload })),
}));

// menyimpan ke storage
// const useCounterStore = create<
//   ICounterStore,
//   [["zustand/persist", Pick<ICounterStore, "count">]]
// >(
//   persist(
//     (set) => ({
//       count: 0,
//       increment: () => set((state) => ({ count: state.count + 1 })),
//       decrement: () => set((state) => ({ count: state.count - 1 })),
//       incrementByAmount: (payload) =>
//         set((state) => ({ count: state.count + payload })),
//     }),
//     {
//       name: "counter-store",
//       storage: createJSONStorage(() => sessionStorage),
//       partialize: (state) => ({
//         count: state.count,
//       }),
//     }
//   )
// );

export default useCounterStore;
