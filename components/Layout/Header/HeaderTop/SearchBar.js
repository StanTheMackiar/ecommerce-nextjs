import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    zIndex: 999,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '15em',
      backgroundColor: 'rgba(41, 110, 212, 0.1)',
      borderRadius: '0.5rem',
      '&:focus': {
        width: '15rem',
        boxShadow: '0 0 5px 1px lightblue',
      },
      [theme.breakpoints.up('sm')]: {
        width: '20em',
        '&:focus': {
          width: '25em',
          boxShadow: '0 0 5px 1px rgba(35, 112, 180, 0.5)',
        },
      },
    },
  }));

const SearchBar = ({color}) => {
  return (
         <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color: color}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              type='search'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  )
}

export default SearchBar