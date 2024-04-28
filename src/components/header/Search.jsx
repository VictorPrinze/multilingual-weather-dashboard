// Search.js

import { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data"; // Import the updated function
import { useDebounce } from "../../hooks";
import { useTranslation } from "react-i18next";

function Search() {
  const { setSelectedLocation } = useContext(LocationContext);
  const { t } = useTranslation();
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const doSearch = useDebounce(async (term) => {
    try {
      const fetchedLocation = await getLocationByName(term);
      setSearchResults(fetchedLocation ? [fetchedLocation] : []);
      setShowResults(true);
    } catch (error) {
      console.error("Error fetching location:", error);
      // Handle error, e.g., display a message to the user
    }
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  function handleItemClick(location) {
    setSelectedLocation({ 
      location: location.name, 
      latitude: location.lat, 
      longitude: location.lon 
    });
    setShowResults(false);
  }

  function handleSearchIconClick() {
    const value = document.querySelector('.search-input').value;
    doSearch(value);
  }

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none search-input"
          type="search"
          placeholder={t("search.location")}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={handleSearchIconClick}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
      {showResults && (
        <ul className="absolute bg-black/80 text-white w-full top-full left-0 z-10 rounded-b-md">
          {searchResults.map((result, index) => (
            <li
              key={index} // Use index as key since result.id is not available
              className="py-2 px-3 cursor-pointer hover:bg-black/60"
              onClick={() => handleItemClick(result)}
            >
              {result.name}, {result.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
