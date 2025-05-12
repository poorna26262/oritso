import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex mb-4">
      <input
        className="flex-grow p-2 border rounded"
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="ml-2 bg-green-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
