import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";

const Appeal = () => {
  const roles = [
    {
      value: "Студент",
      label: "Студент",
    },
    {
      value: "Абитуриент",
      label: "Абитуриент",
    },
    {
      value: "Родитель",
      label: "Родитель",
    },
    {
      value: "Школьник",
      label: "Школьник",
    },
    {
      value: "Сотрудник",
      label: "Сотрудник",
    },
    {
      value: "Организация",
      label: "Организация",
    },
    {
      value: "Выпускник",
      label: "Выпускник",
    },
    {
      value: "Житель города",
      label: "Житель города",
    },
  ];
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const themes = [
    {
      value: "Обучение в университете",
      label: "Обучение в университете",
    },
    {
      value: "Бытовые вопросы (общежития)",
      label: "Бытовые вопросы (общежития)",
    },
    {
      value: "Воспитательная работа",
      label: "Воспитательная работа",
    },
    {
      value: "Другое",
      label: "Другое",
    },
    {
      value: "Спортивная жизнь",
      label: "Спортивная жизнь",
    },
    {
      value: "Студенческое самоуправление",
      label: "Студенческое самоуправление",
    },
    {
      value: "Социальная сфера",
      label: "Социальная сфера",
    },
    {
      value: "Абитуриенты",
      label: "Абитуриенты",
    },
  ];
  const [theme, setTheme] = useState("");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <Box
      id="appeal"
      sx={{
        marginTop: "20px",
        padding: 3,
        backgroundColor: "secondary.light",
        borderRadius: "20px",
      }}
      component="form"
    >
      <Typography
        color="primary.deep"
        sx={{ textAlign: "center" }}
        variant="h4"
      >
        Обратиться к ректору
      </Typography>

      <Grid mt={1} container spacing={4}>
        <Grid item md={6}>
          <TextField
            id="outlined-basic"
            label="ФИО"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item md={3}>
          <TextField
            id="outlined-basic"
            label="Группа"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item md={3}>
          <TextField
            id="outlined-basic"
            label="Номер телефона"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item md={4}>
          <TextField
            required
            id="outlined-basic"
            label="Почта"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item md={4}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-label">Кто вы?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Кто вы?"
              onChange={handleRoleChange}
            >
              {roles.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={4}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-label">Тема вопроса</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={theme}
              label="Тема вопроса"
              onChange={handleThemeChange}
            >
              {themes.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={12}>
          <TextField
            minRows={4}
            required
            multiline
            id="outlined-basic"
            label="Ваше обращение"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "end" }}>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Отправить
        </Button>
      </Box>
    </Box>
  );
};

export default Appeal;
