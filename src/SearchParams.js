import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("chal ra hai");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
