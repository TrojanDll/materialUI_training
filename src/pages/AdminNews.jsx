import React, { useState } from "react";
import AdminMenu from "../components/AdminMenu";
import { Box } from "@mui/material";
import NewsList from "../components/NewsList";
import NewsEditor from "../components/NewsEditor";

const AdminNews = ({ getNewsApp }) => {
  const [news, setNews] = useState([]);

  function getNews(news) {
    setNews(news);
    getNewsApp(news);
  }

  return (
    <Box>
      <AdminMenu />
      <Box sx={{ width: "600px", marginLeft: "400px" }}>
        <NewsEditor getNews={getNews} />
        <NewsList newsItems={news} />
      </Box>
    </Box>
  );
};

export default AdminNews;
