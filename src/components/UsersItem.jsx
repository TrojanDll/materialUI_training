import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const UsersItem = () => {
  return (
    <Box
      sx={{
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Grid container>
        <Grid item md={6}>
          <Typography sx={{ textAlign: "center" }}>72402</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ textAlign: "center" }}>
            example@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UsersItem;
