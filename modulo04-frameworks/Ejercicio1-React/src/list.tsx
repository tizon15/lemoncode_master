import { FilterAlt } from "@mui/icons-material";
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
import { ListContext } from "./providers/listProvider";
interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { inputOrganization, setInputOrganization } =
    React.useContext(ListContext);
  const [page, setPage] = React.useState(0);
  const [membersPerPage, setMembersPerPage] = React.useState(5);
  React.useEffect(() => {
    fetchMembers();
  }, []);
  const fetchMembers = () => {
    fetch(`https://api.github.com/orgs/${inputOrganization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
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
    setMembersPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <h2>Hello from List page</h2>
      <div className="filter-container">
        <TextField
          size="small"
          value={inputOrganization}
          onChange={(e) => {
            setInputOrganization(e.target.value);
          }}
        ></TextField>
        <Button
          variant="contained"
          onClick={fetchMembers}
          endIcon={<FilterAlt />}
          sx={{ backgroundColor: "#2f4858", marginLeft: "1rem" }}
        >
          Filter
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
          {(membersPerPage > 0
            ? members.slice(
                page * membersPerPage,
                page * membersPerPage + membersPerPage
              )
            : members
          ).map((member) => (
            <TableRow key={member.id}>
              <TableCell className="TableCellBody">
                <img src={member.avatar_url} />
              </TableCell>
              <TableCell>
                <span>{member.id}</span>
              </TableCell>
              <TableCell>
                <Link to={`/detail/${member.login}`}>{member.login}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={members.length}
              className="TableCellHeader"
              page={page}
              rowsPerPage={membersPerPage}
              rowsPerPageOptions={[5, 10, 20]}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};
