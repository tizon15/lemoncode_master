import { FilterAlt, Search } from "@mui/icons-material";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SitcomListContext } from "../../providers/sitcomProvider";

export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginEntity;
  location: LocationEntity;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface OriginEntity {
  name: string;
  url: string;
}

export interface LocationEntity {
  name: string;
  url: string;
}

export const SitcomListPage: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const {characterSearched , setCharacterSearched } =React.useContext(SitcomListContext)
  const [page, setPage] = React.useState(0);
  const [charactersPerPage, setCharactersPerPage] = React.useState(5);
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((json) => setCharacters(json.results));  }, []);
  const fetchCharactersByName = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputSearch}`)
      .then((response) => response.json())
      .then((json) => setCharacters(json.results));
  };
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCharactersPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
        <div className="filter-container">
          <TextField
            size="small"
            value={inputSearch}
            placeholder="Search by name"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          ></TextField>
          <Button
            variant="contained"
            onClick={fetchCharactersByName}
            endIcon={<Search />}
            sx={{ backgroundColor: "#2f4858", marginLeft: "1rem" }}
          >
            Search
          </Button>
        </div>
      <Table
        component={Paper}
        sx={{ minWidth: 700 }}
        size="small"
        stickyHeader
        aria-label="sticky table"
      >
        {/* <div className="list-user-list-container"> */}
        <TableHead>
          {/* <span className="list-header">Avatar</span> */}
          <TableRow>
            <TableCell className="TableCellHeader">Avatar</TableCell>
            <TableCell className="TableCellHeader">Id</TableCell>
            <TableCell className="TableCellHeader">Name</TableCell>
            {/* <span className="list-header">Id</span>
        <span className="list-header">Name</span> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {(charactersPerPage > 0
            ? characters.slice(
                page * charactersPerPage,
                page * charactersPerPage + charactersPerPage
              )
            : characters
          ).map((member) => (
            <TableRow key={member.id}>
              <TableCell className="TableCellBody">
                <img src={member.image} />
              </TableCell>
              <TableCell>
                <span>{member.id}</span>
              </TableCell>
              <TableCell>
                <Link to={`/sitcomdetail/${member.name}`} onClick={()=>{setCharacterSearched(member)}}>{member.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={characters.length}
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
