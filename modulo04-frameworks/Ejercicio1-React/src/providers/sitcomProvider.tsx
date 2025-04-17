import React from "react";
import { CharacterEntity } from "../components/sitcom/list";

interface InputContext {
  characterSearched: CharacterEntity;
  setCharacterSearched: (value: any) => void;
}
export const SitcomListContext = React.createContext<InputContext>({
  characterSearched: null,
  setCharacterSearched: (value) => {},
});

export const SitcomListProvider = (props: { children: any }) => {
  const [characterSearched, setCharacterSearched] = React.useState();
  return (
    <SitcomListContext.Provider
      value={{ characterSearched, setCharacterSearched }}
    >
      {props.children}
    </SitcomListContext.Provider>
  );
};
