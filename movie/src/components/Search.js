import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    props.handleSearch(search);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
