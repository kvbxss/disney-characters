import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { FaTv } from 'react-icons/fa';

interface TvShowsTooltipProps {
  tvShows: string[];
}

const TvShowsTooltip: FunctionComponent<TvShowsTooltipProps> = ({ tvShows }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <ToolTipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaTv />
      {showTooltip && (
        <ToolTip>
          <ul>
            {tvShows.map((film, index) => (
              <li key={index}>{film}</li>
            ))}
          </ul>
        </ToolTip>
      )}
    </ToolTipContainer>
  );
};

export default TvShowsTooltip;

const ToolTipContainer = styled.span`
    position: relative;
    display: inline-block;
    cursor: pointer;

    &:hover {
        color: #e3627c;
        scale: 1.1;
        transition: 0.5s ease-out;
    }
    `

const ToolTip = styled.div`
    width: 200px;
    position: absolute;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 10px;
    z-index: 1;
    display: flex;
    box-shadow: 0 0 5px #ccc;
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 5px;
    }
    `