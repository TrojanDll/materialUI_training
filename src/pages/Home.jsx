import { Box, Container } from "@mui/material";
import React from "react";
import NewsList from "../components/NewsList";
import Appeal from "../components/Appeal";

const Home = ({ newsItems }) => {
  return (
    <Box>
      <Container>
        <NewsList newsItems={newsItems} />
        <Appeal />
      </Container>
    </Box>
  );
};

export default Home;
