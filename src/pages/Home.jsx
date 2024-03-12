import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import SavingsIcon from "@mui/icons-material/Savings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "../style.css";
import ChartGeo from "../component/Chart";
import CountUp from "react-countup";
import Chart3d from "../component/Chart3d";

function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{
                      p: 1.5,
                      minWidth: 49 + "%",
                      height: 194,
                      backgroundColor: "#a8a8ff8a",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h2">
                        <SavingsIcon sx={{ fontSize: 40 }} />
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span>
                          ${" "}
                          <CountUp
                            delay={1}
                            start={0}
                            end={6372638}
                            duration={4}
                          />
                          K
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      p: 1.5,
                      minWidth: 49 + "%",
                      height: 194,
                      backgroundColor: "#a8a8ff8a",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h2">
                        <MonetizationOnIcon sx={{ fontSize: 40 }} />
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span>
                          ${" "}
                          <CountUp
                            delay={1}
                            start={0}
                            end={918392}
                            duration={4}
                          />
                          K
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Toatal Order
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Card sx={{ height: 60 + "vh", mt: 2 }}>
                  <CardContent>
                    <ChartGeo />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ p: 0.3, backgroundColor: "#5ee1ff7a" }}>
                    <CardContent>
                      <span>
                        ${" "}
                        <CountUp
                          delay={1}
                          start={0}
                          end={237238}
                          duration={4}
                        />
                        K
                      </span>
                      <br />
                      <span>Total Income</span>
                    </CardContent>
                  </Card>
                  <Card sx={{ p: 0.3, backgroundColor: "#5ee1ff7a" }}>
                    <CardContent>
                      <span>
                        ${" "}
                        <CountUp delay={1} start={0} end={30020} duration={4} />
                        K
                      </span>
                      <br />
                      <span>Total Income</span>
                    </CardContent>
                  </Card>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <h3 style={{ textAlign: "center" }}>Popular Product</h3>
                      <Chart3d />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Home;
