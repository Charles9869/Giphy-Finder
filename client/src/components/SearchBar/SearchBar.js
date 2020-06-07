import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const { setGiphs } = React.useContext(AppContext);
  const [searchInput, setSearchInput] = React.useState('');

  const history = useHistory();

  const handleSearch = async () => {
    const res = await fetch(`/api/search?input=${searchInput}`);
    const giphsArray = await res.json();
    setGiphs(giphsArray.data);
    if (giphsArray.data.length > 0) history.push(`/search/${searchInput}`);
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder='Search all the GIFs'
        value={searchInput}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
            setSearchInput('');
          }
        }}
      ></SearchInput>
      <button onClick={handleSearch}>
        <SearchIcon></SearchIcon>
      </button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  height: 52px;
  display: flex;
  button {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: orange;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  height: 100%;
  background-color: #fff;
  outline: none;
  border: none;
  width: 100%;
  padding-left: 10px;
  font-size: 20px;
`;

const SearchIcon = styled(BsSearch)`
  color: #fff;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
`;
export default SearchBar;
