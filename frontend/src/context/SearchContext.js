import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
  const [name, setName] = useState("");
  const [hostId, setHostId] = useState(null);
  const [avg_Rating, setAvgRating] = useState(0);
  const [system, setSystem] = useState("");
  const [planet, setPlanet] = useState("");
  const [region, setRegion] = useState("");
  const [arrangements, setArrangements] = useState("");

  return (
    <SearchContext.Provider
      value={
        {
          name, hostId, avg_Rating, system, planet, region, arrangements
        }
      }
    >
      {children}
    </SearchContext.Provider>
  );
}
