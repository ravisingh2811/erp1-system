import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SavingsIcon from "@mui/icons-material/Savings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "../style.css";

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
                      backgroundColor: "#adfaed75",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h2">
                        <SavingsIcon sx={{ fontSize: 40 }} />
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span> $1700 </span>
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
                      backgroundColor: "#0000ff2b",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h2">
                        <MonetizationOnIcon sx={{ fontSize: 40 }} />
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span> $ 1300 </span>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Toatal Order
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Card sx={{ height: 60 + "vh", mt: 2 }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ p: 0.3, backgroundColor: "#5ee1ff7a" }}>
                    <CardContent>
                      <span>$5000k</span>
                      <br />
                      <span>Total Income</span>
                    </CardContent>
                  </Card>
                  <Card sx={{ p: 0.3, backgroundColor: "aliceblue" }}>
                    <CardContent>
                      <span>$5000k</span>
                      <br />
                      <span>Total Income</span>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ height: 60 + "vh", backgroundColor: "#66a2de73" }}
                  >
                    <CardContent>
                      <h3>Popular Product</h3>
                      <Accordion defaultExpanded>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3-content"
                          id="panel3-header"
                        >
                          Accordion Actions
                        </AccordionSummary>
                        <AccordionDetails>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          Accordion 1
                        </AccordionSummary>
                        <AccordionDetails>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          Accordion 2
                        </AccordionSummary>
                        <AccordionDetails>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3-content"
                          id="panel3-header"
                        >
                          Accordion Actions
                        </AccordionSummary>
                        <AccordionDetails>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
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
