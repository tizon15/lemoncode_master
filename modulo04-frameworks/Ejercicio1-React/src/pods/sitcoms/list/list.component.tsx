import { routes } from "@/core";
import { Search } from "@mui/icons-material";
import { Button, Paper, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CharacterEntity } from "../detail/detail.vm";

interface Props {
  characters: CharacterEntity[];
  inputSearch: string;
  isSearching: boolean;
  setInputSearch: (value: string) => void;
  fetchCharacters: (value: string) => void;
}

export const SitcomListComponent: React.FC<Props> = (props) => {
  const { characters, inputSearch, setInputSearch, fetchCharacters, isSearching } = props;
  const [page, setPage] = React.useState(0);
  const [charactersPerPage, setCharactersPerPage] = React.useState(5);

  const handleInputChange = (e: { target: { value: string } }) => {
    setInputSearch(e.target.value);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCharactersPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <div className="filter-container">
        <TextField size="small" value={inputSearch} placeholder="Search by name" onChange={handleInputChange}></TextField>
        <Button
          variant="contained"
          disabled={isSearching}
          onClick={() => fetchCharacters(inputSearch)}
          endIcon={<Search />}
          sx={{ backgroundColor: "#2f4858", marginLeft: "1rem" }}
        >
          {isSearching ? "..." : "Search"}
        </Button>
      </div>
      <Table component={Paper} sx={{ minWidth: 700 }} size="small" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className="TableCellHeader">Avatar</TableCell>
            <TableCell className="TableCellHeader">Id</TableCell>
            <TableCell className="TableCellHeader">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(charactersPerPage > 0
            ? characters?.slice(page * charactersPerPage, page * charactersPerPage + charactersPerPage)
            : characters
          )?.map((character) => (
            <TableRow key={character.id}>
              <TableCell className="TableCellBody">
                <img src={character.image} />
              </TableCell>
              <TableCell>
                <span>{character.id}</span>
              </TableCell>
              <TableCell>
                <Link to={routes.sitcomDetails(character.id)}>{character.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={characters?.length}
              className="TableCellHeader"
              page={page}
              rowsPerPage={charactersPerPage}
              rowsPerPageOptions={[5, 10, 20, { label: "All", value: -1 }]}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};
