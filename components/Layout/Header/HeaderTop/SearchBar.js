import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBarStyles";
import Link from "next/link";
import styles from "./SearchBar.module.css";
import { convertToPath } from "../../../../lib/utils";
import { useContext } from "react";
import filtersContext from "../../../../src/context/filtersContext";
import { Box } from "@mui/system";

const SearchBar = ({ color }) => {
  const { handleSearch, results, handleListClick } = useContext(filtersContext);

  return (
    <Search>
      <Box>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: color }} />
        </SearchIconWrapper>
        <StyledInputBase
          onKeyUp={handleSearch}
          onChange={handleSearch}
          placeholder="Search for name, sport, type..."
          type="search"
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
      {Boolean(results.length) && (
        <div className={styles.searchList}>
          <ul>
            {results.map((result) => {
              return (
                <li
                  onClick={handleListClick}
                  key={result.id + "result"}
                  className={styles.listContainer}>
                  <Link href={`/store/${convertToPath(result.name)}`}>
                    <a className={styles.listItem}>{result.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Search>
  );
};

export default SearchBar;
