import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../AppContext';
import SearchBar from '../SearchBar';

const Trending = () => {
  const { trending, setTrending } = React.useContext(AppContext);

  React.useEffect(() => {
    handleTrending();
  }, []);

  const handleTrending = async () => {
    const res = await fetch('/api/trending');
    const giphs = await res.json();
    setTrending(giphs.data);
  };

  return (
    <div>
      <TrendingContainer>
        <h3>Trending GIF's </h3>
        <TrendingList>
          {trending.length > 0 &&
            trending.map((giph) => {
              return (
                <a key={giph.id} href={giph.url}>
                  <img src={giph.images.downsized.url} />
                </a>
              );
            })}
        </TrendingList>
      </TrendingContainer>
    </div>
  );
};

const TrendingContainer = styled.div`
  padding-top: 20px;
  h3 {
    color: #fff;
  }
`;

const TrendingList = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  overflow-x: scroll;
  margin-top: 10px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  img {
    height: 200px;
  }
`;
export default Trending;
