import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UsersItem from "./UsersItem";

const UsersList = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        itgem
        md={6}
        sx={{
          backgroundColor: "#e4f4fb",
          width: "100%",
          padding: "20px",
        }}
      >
        <UsersItem />
      </Grid>
    </Grid>
  );
};

export default UsersList;
