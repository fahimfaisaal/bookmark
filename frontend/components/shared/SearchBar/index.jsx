import { InputBase, useTheme } from '@mui/material';
import { useDeferredValue, useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { SearchContainer } from './Styles';

const SearchBar = ({
  searchHandler,
  normal = true,
  initialState = '',
  placeholder = 'Search Books (at least 3 char)'
}) => {
  const theme = useTheme();
  const [focus, setFocus] = useState(false);
  const [searchText, setSearchText] = useState(initialState);
  const deferredText = useDeferredValue(searchText);

  useEffect(() => {
    searchHandler && searchHandler(deferredText);
  }, [deferredText]);

  useEffect(() => {
    setSearchText(initialState);
  }, [initialState]);

  const changeHandler = (e) => setSearchText(e.target.value);

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
              background: `${theme.palette.background.default}`
            }
          : { border: `1px solid ${theme.palette.background.dark}` }
      }
      normal={normal}
    >
      <BiSearch />
      <InputBase
        value={searchText}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={changeHandler}
        fullWidth={true}
      />
    </SearchContainer>
  );
};

export default SearchBar;
