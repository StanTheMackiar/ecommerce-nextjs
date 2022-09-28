import SearchIcon from "@mui/icons-material/Search";
import filtersContext from "../../../../src/context/filtersContext";
import { useContext } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBarStyles";

const SearchBar = ({ color }) => {
  const {handleSearch, search} = useContext(filtersContext)
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: color }} />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={handleSearch}
        placeholder="Search for name, sport, type..."
        value={search}
        type="search"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
