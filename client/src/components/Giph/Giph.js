import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Giph = () => {
  const { value } = useParams();
  const { giphs } = React.useContext(AppContext);
  return (
    <div>
      <SearchValue>{value}</SearchValue>
      <GiphsGrid>
        {giphs.length > 0 &&
          giphs.map((giph) => {
            return (
              <a key={giph.id} href={giph.url}>
                <img src={giph.images.downsized.url} />
              </a>
            );
          })}
      </GiphsGrid>
    </div>
  );
};

const SearchValue = styled.h1`
  color: #fff;
  font-size: 40px;
  margin: 15px 0px 10px 0px;
`;

const GiphsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    height: 200px;
    width: auto;
    margin: 10px;
  }
`;
export default Giph;
