import React from "react";
import { Link } from "react-router-dom";
import { ListContext } from "./providers/listProvider";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const {inputOrganization, setInputOrganization} = React.useContext(ListContext)
  React.useEffect(() => {
    fetchMembers();
  }, []);
  const fetchMembers = () => {
    fetch(`https://api.github.com/orgs/${inputOrganization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <input
        type="text"
        value={inputOrganization}
        onChange={(e) => {
          setInputOrganization(e.target.value);
        }}
      ></input>
      <button onClick={fetchMembers}>Filter</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
