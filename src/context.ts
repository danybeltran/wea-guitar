import { createContext, useContext, useState } from "react";

interface IFilter {
  price?: string | undefined;
  name?: string | undefined;
}

type filterUpdater = (field: "price" | "name", value: string) => void;

interface IFilters {
  updateFilter?: filterUpdater;
  opened?: boolean;
  toggleOpened?: () => void;
  filters?: IFilter;
}

export const FiltersContext = createContext<IFilters>({});

export function useFilters(): IFilters {
  /** When calling the hook, by default use the current context value */
  const [filters, setFilters] = useState<IFilter>();
  const [opened, setShowFilters] = useState(false);
  const updateFilter: filterUpdater = (field, value) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };
  const toggleOpened = () => {
    setShowFilters((opened) => {
      if (opened) {
        setFilters({});
      }
      return !opened;
    });
  };
  return { filters, updateFilter, opened, toggleOpened };
}

export const useFiltersContext = () => useContext(FiltersContext);
