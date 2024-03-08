import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';

function Home() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Stack spacing={2} direction="row">
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
            </Stack>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={6} md={4}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
