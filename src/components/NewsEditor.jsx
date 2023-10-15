import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const NewsEditor = ({ getNews }) => {
  const [category, setCategory] = useState("");

  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      header: "Какой то заголовок",
      description: "Какое то описание",
      type: "news",
      imgSource:
        "https://img.freepik.com/premium-photo/worker-creating-fence-near-orange-sparks-in-smithy_7502-9147.jpg?w=1380",
    },
    {
      id: 2,
      header: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, deserunt quisquam nemo sint, dolores nisi mollitia aspernatur quo fugit debitis veniam reprehenderit tempora rem qui ipsum error architecto. Obcaecati, asperiores!",
      type: "social",
      imgSource:
        "https://img.freepik.com/premium-photo/person-taking-care-of-electric-car_23-2149362839.jpg?w=1380",
    },
    {
      id: 3,
      header: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, deserunt quisquam nemo sint, dolores nisi mollitia aspernatur quo fugit debitis veniam reprehenderit tempora rem qui ipsum error architecto. Obcaecati, asperiores!",
      type: "university",
      imgSource:
        "https://img.freepik.com/premium-photo/person-taking-care-of-electric-car_23-2149362839.jpg?w=1380",
    },
    {
      id: 4,
      header: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, deserunt quisquam nemo sint, dolores nisi mollitia aspernatur quo fugit debitis veniam reprehenderit tempora rem qui ipsum error architecto. Obcaecati, asperiores!",
      type: "social",
      imgSource:
        "https://img.freepik.com/premium-photo/person-taking-care-of-electric-car_23-2149362839.jpg?w=1380",
    },
    {
      id: 5,
      header: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, deserunt quisquam nemo sint, dolores nisi mollitia aspernatur quo fugit debitis veniam reprehenderit tempora rem qui ipsum error architecto. Obcaecati, asperiores!",
      type: "news",
      imgSource:
        "https://img.freepik.com/premium-photo/person-taking-care-of-electric-car_23-2149362839.jpg?w=1380",
    },
    {
      id: 6,
      header: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, deserunt quisquam nemo sint, dolores nisi mollitia aspernatur quo fugit debitis veniam reprehenderit tempora rem qui ipsum error architecto. Obcaecati, asperiores!",
      type: "social",
      imgSource:
        "https://img.freepik.com/premium-photo/person-taking-care-of-electric-car_23-2149362839.jpg?w=1380",
    },
  ]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  getNews(newsItems);

  return (
    <Box component="form">
      <TextField
        id="outlined-basic"
        label="Заголовок поста"
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Текст поста"
        multiline
        minRows={4}
        maxRows={10}
      />
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категория"
          onChange={handleCategoryChange}
        >
          <MenuItem value={"news"}>Новости</MenuItem>
          <MenuItem value={"social"}>Социальная жизнь</MenuItem>
          <MenuItem value={"university"}>Жизнь ВУЗа</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NewsEditor;
