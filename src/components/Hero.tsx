import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { getDisneyCharacters } from "../services/Api";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useCharacterStore } from "../store/characterStore";

const Hero: FunctionComponent = () => {
  const {
    data,
    favorite,
    filteredFavData,
    setData,
    setFavorite,
    setFilteredFavData,
  } = useCharacterStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDisneyCharacters();
      setData(result);
    };
    fetchData();
  }, []);

  const toggleFavorite = (characterId: number) => {
    const isFavorite = favorite.includes(characterId);
    if (isFavorite) {
      const updatedFavorites = favorite.filter((id) => id !== characterId);
      setFavorite(updatedFavorites);
      setFilteredFavData(updatedFavorites);
    } else {
      setFavorite([...favorite, characterId]);
      setFilteredFavData([...filteredFavData, characterId]);
    }
  };

  const charactersWithMostFilms = data
    .slice()
    .sort((a, b) => b.films.length - a.films.length)
    .slice(0, 3);

  return (
    <HeroContainer>
      <TextWrapper>
        <Text>Most popular Disney characters</Text>
      </TextWrapper>
      <CardWrapper>
        {charactersWithMostFilms.map((character, index) => (
          <Card key={index}>
            <CardImage src={character.imageUrl} alt={character.name} />
            <CardText>
              <CardTitle>
                {character.name}
                &nbsp;
                {favorite.includes(character._id) ? (
                  <Star onClick={() => toggleFavorite(character._id)} />
                ) : (
                  <EmptyStar onClick={() => toggleFavorite(character._id)} />
                )}
              </CardTitle>

              <CardSubtitle>
                Films: {character.films.length}
                <br />
                Tv-Shows: {character.tvShows.length}
              </CardSubtitle>
            </CardText>
          </Card>
        ))}
      </CardWrapper>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f2f2f2;

  @media (max-width: 1024px) {
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  font-size: 60px;
  font-family: "Mukta", sans-serif;
  color: #011936;
  font-weight: 500;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 350px;
  background-color: #011936;
  border-radius: 10px;
  margin: 20px;

  &:hover {
    background-color: #273f5c;
    scale: 1.1;
    transition: 0.5s ease-out;
  }
`;

const CardImage = styled.img`
  height: 250px;
  width: 300px;
  border-radius: 10px 10px 0px 0px;
`;

const CardText = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 100px;
`;

const CardTitle = styled.h2`
  font-size: 30px;
  font-family: "Mukta", sans-serif;
  color: #f2f2f2;
  font-weight: 500;
  text-decoration: none;
`;

const CardSubtitle = styled.h3`
  font-size: 20px;
  font-family: "Mukta", sans-serif;
  color: #f2f2f2;
  font-weight: 500;
  text-decoration: none;
`;

const Star = styled(FaStar)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const EmptyStar = styled(FaRegStar)`
  height: 20px;
  width: 20px;
  border-radius: 50%;

  cursor: pointer;
`;
