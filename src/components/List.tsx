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

const columnHelper = createColumnHelper<ICharacter>();

const columns = [
    columnHelper.accessor("imageUrl", {
        header: "Picture",
        cell: tableProps => <Image src={tableProps.row.original.imageUrl} alt='character' />,
    }),
    columnHelper.accessor("name", {
        header: "Name",
    }),
    columnHelper.accessor("films", {
        header: "Films count",
        cell: tableProps => <p>{tableProps.row.original.films.length}</p>,
    }),
    columnHelper.display( {
        header: "Favorites",
    }),
]


const List: FunctionComponent = () => {
    const [data , setData] = useState<ICharacter[]>([])

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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableData>
                ))}
              </Row>
            </React.Fragment>
          ))}
         
                </Table>
            </Characters>
            <Favorites>
                <Title>My Favorites</Title>
                <Table>
                <Row>
                <TableHead>Name</TableHead>
                </Row>
                </Table>
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
    background-color: #273f5c;
    height: fit-content;
    width: 50%;
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    flex-direction: column;
    word-wrap: normal;
    border-radius: 10px;
`

const Favorites = styled.div`
    background-color: #273f5c;
    height: 1000px;
    width: 50%;
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    flex-direction: column;
    word-wrap: normal;
    border-radius: 10px;
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