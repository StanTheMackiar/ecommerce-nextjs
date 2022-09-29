import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
  display: "flex",
  justifyContent: "center",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  zIndex: 10,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    backgroundColor: "rgba(41, 110, 212, 0.1)",
    width: "15em",
    borderRadius: "0.5rem",
    "&:focus": {
      boxShadow: "0 0 5px 1px lightblue",
    },
    [theme.breakpoints.up("sm")]: {
      "&:focus": {
        boxShadow: "0 0 5px 1px rgba(35, 112, 180, 0.5)",
      },
    },
  },
}));
