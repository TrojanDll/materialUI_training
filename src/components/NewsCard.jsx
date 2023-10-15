import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import image from "./../img/omg.jpg";

const NewsCard = ({
  header,
  description,
  type = "university",
  imgSource = image,
}) => {
  function getChipLabel(type) {
    const labels = {
      news: "Новости",
      social: "Социальная жизнь",
      university: "Жизнь ВУЗа",
    };
    return labels[type];
  }

  const chipLabel = getChipLabel(type);
  console.log(chipLabel);

  return (
    <Box
      sx={{
        borderRadius: 5,
        padding: "20px",
        backgroundColor: "primary.light",
        position: "relative",
        marginTop: "20px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <Box
            sx={{ width: "100%", borderRadius: 4 }}
            component="img"
            src={imgSource}
            alt="green iguana"
          />
        </Grid>

        <Grid item sm={9}>
          <Typography color="secondary.deep" component="h3" variant="h4">
            {header}
          </Typography>
          <Typography sx={{ marginTop: "20px" }} variant="body1">
            {description}
          </Typography>
        </Grid>
      </Grid>

      <Chip
        sx={{
          backgroundColor: `markers.${type}`,
          color: "#ffffff",
          position: "absolute",
          right: "20px",
          top: "20px",
        }}
        label={chipLabel}
      />
    </Box>
  );
};

export default NewsCard;
