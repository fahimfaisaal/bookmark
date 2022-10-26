/** @format */

import { InputBase, useTheme } from '@mui/material';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { SearchContainer } from './Styles';

const SearchBar = ({
  normal,
  placeholder = 'Search Books (at least 3 char)',
  width = '300px',
}) => {
  const theme = useTheme();
  const [focus, setFocus] = useState(false);
  const handleOnFocus = () => {
    setFocus(true);
  };
  const handleOnBlur = () => {
    setFocus(false);
  };

  return (
    <SearchContainer
      sx={
        focus
          ? {
              border: `1px solid ${theme.palette.primary.main}`,
              background: `${theme.palette.background.default}`,
            }
          : { border: `1px solid ${theme.palette.background.dark}` }
      }
      normal={normal}
      width={width}
    >
      <BiSearch />
      <InputBase
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        fullWidth={true}
      />
    </SearchContainer>
  );
};

export default SearchBar;
