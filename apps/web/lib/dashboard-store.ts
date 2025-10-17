import { create } from 'zustand';

export type DashboardFilter = {
  key: string;
  value: string | number | null;
};

type DashboardState = {
  filters: DashboardFilter[];
  setFilter: (filter: DashboardFilter) => void;
  clearFilters: () => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  filters: [],
  setFilter: (filter) =>
    set((state) => {
      const existing = state.filters.filter((item) => item.key !== filter.key);
      return { filters: [...existing, filter] };
    }),
  clearFilters: () => set({ filters: [] })
}));
