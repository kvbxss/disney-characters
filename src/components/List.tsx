import React, { FunctionComponent, useEffect } from "react";
import { styled } from "styled-components";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import Search from "./Search";
import Favorites from "./Favorites";
import { ICharacter } from "../services/interface";
import { getDisneyCharacters } from "../services/Api";
import { FaRegStar, FaStar } from "react-icons/fa";
import TvShowsTooltip from "./Tooltip";
import { useCharacterStore } from "../store/characterStore";
import { useFavoriteStore } from "../store/favoriteStore";

const List: FunctionComponent = () => {
  const { data, setData } = useCharacterStore();

  const columnHelper = createColumnHelper<ICharacter>();

  const { setFavorite, setFilteredFavData } = useFavoriteStore();
  const { data: characters } = useCharacterStore();

  const ToggleFavorite = (id: number) => {
    characters.find((character) => {
      if (character._id === id) {
        setFavorite({ ...character, isFavorite: !character.isFavorite });
      }
    });
  };

  // setFilteredFavData(character);

  const columns = [
    columnHelper.accessor("imageUrl", {
      header: "Picture",
      cell: (tableProps) => (
        <Image src={tableProps.row.original.imageUrl} alt="character" />
      ),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (tableProps) => (
        <p>
          {tableProps.row.original.name} &nbsp;
          {tableProps.row.original.tvShows.length > 0 && (
            <TvShowsTooltip tvShows={tableProps.row.original.tvShows} />
          )}
        </p>
      ),
    }),
    columnHelper.accessor("films", {
      header: "Films count",
      cell: (tableProps) => <p>{tableProps.row.original.films.length}</p>,
    }),

    columnHelper.display({
      id: "Favorites",
      header: "Favorites",
      cell: (tableProps) => {
        return (
          <StarIcon>
            {tableProps.row.original.isFavorite ? (
              <Star
                onClick={() => ToggleFavorite(tableProps.row.original._id)}
              />
            ) : (
              <EmptyStar
                onClick={() => ToggleFavorite(tableProps.row.original._id)}
              />
            )}
          </StarIcon>
        );
      },
    }),
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDisneyCharacters();
      setData(result);
    };
    fetchData();
  }, []);

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ListContainer>
      <Search />
      <TablesContainer>
        <Characters>
          <Title>Disney Characters</Title>
          <Table>
            <Row>
              {table.getHeaderGroups().map((headerGroup) => (
                <React.Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </React.Fragment>
              ))}
              {/* <TableHead>Picture</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Films count</TableHead>
                        <TableHead>Favorites</TableHead> */}
            </Row>

            {table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                <Row>
                  {row.getVisibleCells().map((cell) => (
                    <TableData key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableData>
                  ))}
                </Row>
              </React.Fragment>
            ))}
          </Table>
        </Characters>
        <FavoritesWrap>
          <Favorites />
        </FavoritesWrap>
      </TablesContainer>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TablesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;
  margin: 40px;
  gap: 15px;
`;

const Characters = styled.div`
  background-color: #011936;
  height: 1000px;
  width: 50%;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  word-wrap: normal;
  border-radius: 10px;
  overflow: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ed254e;
    border-radius: 5px;
    &:hover {
      background-color: #e3627c;
    }
  }
`;

const FavoritesWrap = styled.div`
  background-color: #011936;
  height: 1000px;
  width: 50%;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  word-wrap: normal;
  border-radius: 10px;
  overflow: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ed254e;
    border-radius: 5px;
    &:hover {
      background-color: #e3627c;
    }
  }
`;

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
