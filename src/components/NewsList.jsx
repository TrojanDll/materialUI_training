import { Box } from "@mui/material";
import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ newsItems }) => {
  console.log(newsItems);
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      {newsItems.map((item) => (
        <NewsCard
          key={item.id}
          header={item.header}
          description={item.description}
          type={item.type}
          imgSource={item.imgSource}
        />
      ))}
    </Box>
  );
};

export default NewsList;
