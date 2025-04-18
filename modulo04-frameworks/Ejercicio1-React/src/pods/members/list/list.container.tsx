import React from "react";
import { ListContext } from "../../../core/providers/listProvider";
import { ListPageComponent } from "./list.component";
import { MemberEntity } from "./list.vm";

export const ListPageContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { inputOrganization, setInputOrganization } = React.useContext(ListContext);

  React.useEffect(() => {
    fetchMembers();
  }, []);
  const fetchMembers = () => {
    fetch(`https://api.github.com/orgs/${inputOrganization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
      .catch(() => setMembers([]));
  };

  return (
    <ListPageComponent
      members={members}
      fetchMembers={fetchMembers}
      inputOrganization={inputOrganization}
      setInputOrganization={setInputOrganization}
    />
  );
};
