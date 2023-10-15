import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: "75px",
        backgroundColor: "#e4f4fb",
        width: "200px",
        height: "100%",
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: "20px" }}>
        <Button
          component={Link}
          to="/admin"
          sx={{ width: "100%" }}
          variant="contained"
        >
          Список пользователей
        </Button>
        <Button
          component={Link}
          to="/admin/news"
          sx={{ width: "100%" }}
          variant="contained"
        >
          Новостной блок
        </Button>
        <Button component={Link} sx={{ width: "100%" }} variant="contained">
          Расписание
        </Button>
        <Button component={Link} sx={{ width: "100%" }} variant="contained">
          Список обращений
        </Button>
      </Box>
    </Box>
  );
};

export default AdminMenu;
