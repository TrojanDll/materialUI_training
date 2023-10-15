import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { CalendarMonth, Edit, Login } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            columnGap: "20px",
            height: "75px",
          }}
        >
          <Box
            sx={{ display: "flex", columnGap: "20px", alignItems: "center" }}
          >
            <Typography variant="h6" component="div">
              ДГТУ
            </Typography>

            <Button
              component={Link}
              to="/home"
              color="secondary"
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
            >
              Главная
            </Button>

            <Button
              component={Link}
              to="/about"
              color="secondary"
              variant="contained"
              size="large"
              startIcon={<CalendarMonth />}
            >
              Расписание
            </Button>

            <Button
              component="a"
              href="#appeal"
              color="secondary"
              variant="contained"
              size="large"
              startIcon={<Edit />}
            >
              Обратиться к ректору
            </Button>
          </Box>

          <Button
            component={Link}
            to="/login"
            color="secondary"
            variant="contained"
            size="large"
            sx={{ borderWidth: "2px" }}
            startIcon={<Login />}
          >
            Вход
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "75px", position: "static" }}></Box>
    </>
  );
};

export default Header;
