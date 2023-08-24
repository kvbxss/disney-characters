import React, { FunctionComponent } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import TvShowsTooltip from "./Tooltip";
import { useFavoriteStore } from "../store/favoriteStore";
import { useCharacterStore } from "../store/characterStore";
import { ICharacter } from "../services/interface";

export const Favorites: FunctionComponent = () => {
  const { favorite, filteredFavData, setFavorite, setFilteredFavData } =
    useFavoriteStore();
  const { data: characters } = useCharacterStore();

  const getArray = JSON.parse(localStorage.getItem("favorite") || "0");

  //   const characterId = data.map((character) => character._id);
  //   const isFavorite = favorite.includes(characterId);

  const ToggleFavorite = (id: number) => {
    characters.filter((character) => {
      if (character._id === id) {
        setFavorite({ ...character, isFavorite: true });
      }

      console.log(character);
    });
    setFilteredFavData(character);
  };

  // pobrać obecne postaci
  // sprawdzić czy postać jest w ulubionych
  // setFavorit({...favorite, isFavorite: true})

  // useEffect(() => {
  //   if (getArray !== 0) {
  //     setFavorite([...getArray]);
  //   }
  // }, [getArray]);

  // useEffect(() => {
  //   filterData(searchTerm);
  // }, [searchTerm, filteredFavData]);

  return (
    <>
      <Title>My Favorites</Title>
      <Table>
        <Row>
          <TableHead>Picture</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Films count</TableHead>
          <TableHead>Favorites</TableHead>
        </Row>
        {favorite.length > 0 &&
          favorite?.map((character) => {
            return (
              <Row key={character._id}>
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
                    <Star onClick={() => ToggleFavorite(character)} />
                  </StarIcon>
                </TableData>
              </Row>
            );
          })}
      </Table>
    </>
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
