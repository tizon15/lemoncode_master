import { useDebounce } from "@uidotdev/usehooks";
import React from "react";
import { CharacterEntity } from "../detail/detail.vm";
import { SitcomListComponent } from "./list.component";

export const SitcomListContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(inputSearch, 500);
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
      const response = await fetch(`https://rickandmortyapi.com/api/character/${searchBy}`);
      const data = response.json();
      return data;
    } catch {
      console.error("Error retrieving the data");
    }
  };

  return (
    <SitcomListComponent
      characters={characters}
      fetchCharacters={fetchCharacters}
      inputSearch={inputSearch}
      isSearching={isSearching}
      setInputSearch={setInputSearch}
    />
  );
};
