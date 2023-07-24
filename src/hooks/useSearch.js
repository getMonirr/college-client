import { useContext } from "react";
import { SearchContext } from "../provider/SearchProvider";

export const useSearch = () => {
  return useContext(SearchContext);
};
