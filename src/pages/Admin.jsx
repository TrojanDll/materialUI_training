import { Box } from "@mui/material";
import React from "react";
import AdminMenu from "../components/AdminMenu";
import UsersList from "../components/UsersList";

const Admin = () => {
  return (
    <Box>
      <AdminMenu />
      <UsersList />
    </Box>
  );
};

export default Admin;
