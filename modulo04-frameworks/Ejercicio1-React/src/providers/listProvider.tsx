import React from "react";

interface InputContext {
  inputOrganization: string;
  setInputOrganization: (value: string) => void;
}
export const ListContext = React.createContext<InputContext>({
  inputOrganization: "",
  setInputOrganization: (value) => {},
});

export const ListProvider = (props: { children: any }) => {
  const [inputOrganization, setInputOrganization] = React.useState("lemoncode");
  return (
    <ListContext.Provider value={{ inputOrganization, setInputOrganization }}>
      {props.children}
    </ListContext.Provider>
  );
};
