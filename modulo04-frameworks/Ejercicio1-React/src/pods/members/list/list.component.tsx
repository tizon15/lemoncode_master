import { routes } from "@/core";
import { FilterAlt } from "@mui/icons-material";
import { Avatar, Button, Paper, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";

interface Props {
  members: MemberEntity[];
  inputOrganization: string;
  setInputOrganization: (value: string) => void;
  fetchMembers: () => void;
}

export const ListPageComponent: React.FC<Props> = (props) => {
  const { members, inputOrganization, setInputOrganization, fetchMembers } = props;
  const [page, setPage] = React.useState(0);
  const [membersPerPage, setMembersPerPage] = React.useState(5);
   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setMembersPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  return (
    <>
      <div className="filter-container">
        <TextField
          size="small"
          value={inputOrganization}
          onChange={(e) => {
            setInputOrganization(e.target.value);
          }}
        ></TextField>
        <Button variant="contained" onClick={fetchMembers} endIcon={<FilterAlt />} sx={{ backgroundColor: "#2f4858", marginLeft: "1rem" }}>
          Filter
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
          {(membersPerPage > 0 ? members?.slice(page * membersPerPage, page * membersPerPage + membersPerPage) : members)?.map((member) => (
            <TableRow key={member?.id}>
              <TableCell>
                <Avatar src={member?.avatar_url} sx={{ width: 56, height: 56 }} />
              </TableCell>
              <TableCell>{member?.id}</TableCell>
              <TableCell>
                <Link to={routes.details(member.login)}>{member?.login}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={members?.length}
              className="TableCellHeader"
              page={page}
              rowsPerPage={membersPerPage}
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
