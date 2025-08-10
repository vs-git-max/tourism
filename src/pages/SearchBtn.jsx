import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBtn = () => {
  return (
    <div className="flex items-center gap-1.5">
      <SearchIcon />
      <span>Search</span>
    </div>
  );
};

export default SearchBtn;
