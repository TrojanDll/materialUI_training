import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const LoginWindow = () => {
  const [login, setLogin] = useState(false);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: 4,
      }}
    >
      <Grid item md={6} display={login ? "block" : "none"}>
        <Box
          sx={{
            padding: "25px",
            borderRadius: 5,
            backgroundColor: "#e4f4fb",
            width: "100%",
          }}
        >
          <Typography sx={{ textAlign: "center" }} component="h2" variant="h4">
            Вход
          </Typography>

          <TextField
            sx={{
              marginTop: 2,
              width: "100%",
            }}
            color="secondary"
            id="outlined-basic"
            label="Почта"
            variant="outlined"
          />

          <TextField
            sx={{
              marginTop: 2,
              width: "100%",
            }}
            color="secondary"
            id="outlined-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <Button
              size="large"
              sx={{ paddingLeft: "25px", paddingRight: "25px" }}
              type="submit"
              variant="contained"
            >
              Войти
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Button
              color="secondary"
              sx={{ color: "black" }}
              variant="outlined"
              onClick={() => setLogin(false)}
            >
              Регистрация
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid item md={6} display={login ? "none" : "block"}>
        <Box
          sx={{
            padding: "25px",
            borderRadius: 5,
            backgroundColor: "#e4f4fb",
            width: "100%",
          }}
        >
          <Typography sx={{ textAlign: "center" }} component="h2" variant="h4">
            Регистрация
          </Typography>

          <TextField
            sx={{
              marginTop: 2,
              width: "100%",
            }}
            color="secondary"
            id="outlined-basic"
            label="Почта"
            variant="outlined"
          />

          <TextField
            sx={{
              marginTop: 2,
              width: "100%",
            }}
            color="secondary"
            id="outlined-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
          />

          <TextField
            sx={{
              marginTop: 2,
              width: "100%",
            }}
            color="secondary"
            id="outlined-password-input"
            label="Подтвердите пароль"
            type="password"
            autoComplete="current-password"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <Button
              color="secondary"
              size="large"
              sx={{ paddingLeft: "25px", paddingRight: "25px" }}
              type="submit"
              variant="contained"
            >
              Регистрация
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Button
              color="primary"
              sx={{ color: "black" }}
              variant="outlined"
              onClick={() => setLogin(true)}
            >
              Вход
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginWindow;
