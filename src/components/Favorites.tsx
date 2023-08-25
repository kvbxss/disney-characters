import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useCharacterStore } from "../store/characterStore";
import TvShowsTooltip from "./Tooltip";
import { FaRegStar, FaStar } from "react-icons/fa";

const Favorites: FunctionComponent = () => {
  const { data, favorite, filteredFavData, setFavorite, setFilteredFavData } =
    useCharacterStore();

  return (
    <div>
      <Title>My Favorites</Title>
      <Table>
        <Row>
          <TableHead>Picture</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Films count</TableHead>
          <TableHead>Favorites</TableHead>
        </Row>
        {filteredFavData.map((characterId) => {
          const character = data.find((char) => char._id === characterId);
          const isFavorite = favorite.includes(characterId);

          const ToggleFavorite = () => {
            if (isFavorite) {
              const updatedFavorites = favorite.filter(
                (id) => id !== characterId
              );
              setFavorite(updatedFavorites);
              setFilteredFavData(updatedFavorites);
            } else {
              setFavorite([...favorite, characterId]);
              setFilteredFavData([...filteredFavData, characterId]);
            }
          };
          return (
            <Row key={characterId}>
              <TableData>
                <Image src={character?.imageUrl} alt="photo"></Image>
              </TableData>
              <TableData>
                {character?.name} &nbsp;
                {character?.tvShows && character.tvShows.length > 0 && (
                  <TvShowsTooltip tvShows={character?.tvShows} />
                )}
              </TableData>
              <TableData>{character?.films.length}</TableData>
              <TableData>
                <StarIcon>
                  {isFavorite ? (
                    <Star onClick={ToggleFavorite} />
                  ) : (
                    <EmptyStar onClick={ToggleFavorite} />
                  )}
                </StarIcon>
              </TableData>
            </Row>
          );
        })}
      </Table>
    </div>
  );
};

export default Favorites;

const Title = styled.h2`
  font-size: 30px;
  font-family: "Mukta", sans-serif;
  color: #f2f2f2;
  margin: 40px;
  text-align: left;
`;

const Table = styled.table`
  width: 100;
  margin: 40px;
  color: #f2f2f2;
  font-family: "Mukta", sans-serif;
`;

const Row = styled.tr`
  display: table-row;
  width: 100%;
`;
const TableHead = styled.th`
  padding: 12px;
  text-align: left;
`;

const TableData = styled.td`
  display: table-cell;
  padding: 12px;
  text-align: left;
`;

const Image = styled.img`
  width: 100px;
  object-fit: cover;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;
const StarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Star = styled(FaStar)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const EmptyStar = styled(FaRegStar)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
