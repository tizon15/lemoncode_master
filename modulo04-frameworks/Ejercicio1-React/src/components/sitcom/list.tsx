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
import { useDebounce } from "@uidotdev/usehooks";

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
  const { characterSearched, setCharacterSearched } =
    React.useContext(SitcomListContext);
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const debouncedSearchTerm = useDebounce(inputSearch, 500);
  const [isSearching, setIsSearching] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [charactersPerPage, setCharactersPerPage] = React.useState(5);
  React.useEffect(() => {
    const initialFetch = async () => {
      const data = await fetchCharacters();
      setCharacters(data.results);
    };
    initialFetch;
  }, []);
  React.useEffect(() => {
    const searchHN = async () => {
      let results = [];
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const data = await fetchCharacters(debouncedSearchTerm);
        results = data.results;
      } else {
        const data = await fetchCharacters();
        results = data.results;
      }

      setIsSearching(false);
      setCharacters(results);
    };

    searchHN();
  }, [debouncedSearchTerm]);
  const fetchCharacters = async (searchTerm?: string) => {
    try {
      const searchBy = searchTerm ? `?name=${searchTerm}` : "";
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${searchBy}`
      );
      const data = response.json();
      return data;
    } catch {
      console.error("Error retrieving the data");
    }
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputSearch(e.target.value);
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
          onChange={handleInputChange}
        ></TextField>
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
      <Table
        component={Paper}
        sx={{ minWidth: 700 }}
        size="small"
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="TableCellHeader">Avatar</TableCell>
            <TableCell className="TableCellHeader">Id</TableCell>
            <TableCell className="TableCellHeader">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(charactersPerPage > 0
            ? characters?.slice(
                page * charactersPerPage,
                page * charactersPerPage + charactersPerPage
              )
            : characters
          )?.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="TableCellBody">
                <img src={member.image} />
              </TableCell>
              <TableCell>
                <span>{member.id}</span>
              </TableCell>
              <TableCell>
                <Link
                  to={`/sitcomdetail/${member.name}`}
                  onClick={() => {
                    setCharacterSearched(member);
                  }}
                >
                  {member.name}
                </Link>
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
