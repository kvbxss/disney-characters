import React, { FunctionComponent, useEffect, useState, useCallback } from 'react';
import { styled } from 'styled-components';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper
} from '@tanstack/react-table';
import Search from './Search';
import { ICharacter } from '../services/interface';
import { getDisneyCharacters } from '../services/Api';
import { FaRegStar, FaStar } from 'react-icons/fa';
import TvShowsTooltip from './Tooltip';


interface ITableProps {
    searchTerm: string;
}


const List: FunctionComponent<ITableProps> = ({searchTerm}) => {
    const [data , setData] = useState<ICharacter[]>([])
    const [favorite, setFavorite] = useState([] as Array<number>)  
    const [filteredData, setFilteredData] = useState<ICharacter[]>([]);

    const getArray = JSON.parse(localStorage.getItem('favorite') || '0')


    const filterData = useCallback(
        (searchTerm: string) => { 
            const filteredFavorite = favorite.filter((characterId) => {
                const character = data.find((char) => char._id === characterId);
                return character?.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFavorite(filteredFavorite);
        },
        [data, favorite]
    );

    const columnHelper = createColumnHelper<ICharacter>();

const columns = [
    columnHelper.accessor("imageUrl", {
        header: "Picture",
        cell: tableProps => <Image src={tableProps.row.original.imageUrl} alt='character' />,
    }),
    columnHelper.accessor("name", {
        header: "Name",
        cell: tableProps => <p>{tableProps.row.original.name} &nbsp; 

        
        {tableProps.row.original.tvShows.length > 0 && 
        <TvShowsTooltip tvShows={tableProps.row.original.tvShows}/>}</p>,
    }),
    columnHelper.accessor("films", {
        header: "Films count",
        cell: tableProps => <p>{tableProps.row.original.films.length}</p>,
    }),

    columnHelper.display( {
        id: "Favorites", 
        header: "Favorites",
        cell: tableProps => {
            const characterId = tableProps.row.original._id;
            const isFavorite = favorite.includes(characterId);

            const ToggleFavorite = () => {
                if (isFavorite) {
                    setFavorite(favorite.filter(id => id !== characterId));
                } else {
                    setFavorite([...favorite, characterId]);
                }
            }
            return (
                <>
                    {isFavorite ? <Star onClick={ToggleFavorite} /> : <EmptyStar onClick={ToggleFavorite} />}
                </>
            )
        }, 
    }),
]


    useEffect(() => {
        if (getArray !== 0) {
            setFavorite([...getArray]) 
        }
    }, [getArray])

    useEffect(() => {
        const fetchData = async () => {
        const result = await getDisneyCharacters();
        setData(result);
        setFilteredData(result);
        };
        fetchData();
    }, []);

    useEffect(() => {
        filterData(searchTerm);
      }, [searchTerm, filterData]);




    const table = useReactTable({
        data: filteredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

  const renderFavoriteCharacters = (searchTerm: string) => {
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
                    {favorite.map((characterId) => {
                        const character = data.find((char) => char._id === characterId);
                        return (
                            <Row key={characterId}>
                                <TableData><Image src={character?.imageUrl} alt='photo'></Image></TableData>
                                <TableData>{character?.name} &nbsp;
                                {character?.tvShows && character.tvShows.length > 0 &&
                                <TvShowsTooltip tvShows={character?.tvShows}/>}
                                </TableData>
                                <TableData>{character?.films.length}</TableData>
                                <TableData>
                                    <StarIcon>
                                        <Star />
                                    </StarIcon>
                                </TableData>

                            </Row>
                        );
                    })}
                </Table>
            </div>
        );
    };

    
    return (
      <ListContainer>
        <Search handleSearch={filterData}/>
        <TablesContainer >
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableData>
                ))}
              </Row>
            </React.Fragment>
          ))}
         
                </Table>
            </Characters>
            <Favorites>
                {renderFavoriteCharacters(searchTerm)}
            </Favorites>
        </TablesContainer>
      </ListContainer>
    );
}

export default List;

const ListContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

const TablesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 80%;
    margin: 40px;
    gap: 15px;
`

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
`

const Favorites = styled.div`
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
`

const Title = styled.h2`
    font-size: 30px;
    font-family: "Mukta", sans-serif;
    color: #f2f2f2;
    margin: 40px;
    text-align: left;
    `

const Table = styled.table`
    width: 100;
    margin: 40px;
    color: #f2f2f2;
    font-family: "Mukta", sans-serif;
    `

const Row = styled.tr`
    display: table-row;
    width: 100%;

    `
const TableHead = styled.th`
    padding: 12px;
    text-align: left;
    `

const TableData = styled.td`
    display: table-cell;
    padding: 12px;
    text-align: left;
    `

const Image = styled.img`
    width: 100px;
    object-fit: cover;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    `
const StarIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    `

const Star = styled(FaStar)`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    `

    const EmptyStar = styled(FaRegStar)`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    `