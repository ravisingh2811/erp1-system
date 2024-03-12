import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Box from "@mui/material/Box";
import Divider from "@mui/joy/Divider";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from '@mui/joy/Stack';
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

function Experience() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Sidebar />
        <Card style={{ width: 100 + "vh", minHeight: 40 + "vh" }}>
          <Box sx={{ mb: 1 }}>
          <Stack direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}>
            
            <Typography sx={{ fontWeight: "bolder" }} variant="h1">
              GeeksForGeeks
            </Typography>
            <Typography variant="h2">
              Technical Content Reviewer
            </Typography>
            <Typography variant="body1">
              September 2023 - February 2024
            </Typography>
            
            <AspectRatio
              ratio="2"
              maxHeight={200}
              sx={{ flex: 1, minWidth: 100, borderRadius: "20%" }}
            >
              <img
                src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                srcSet="https://media.geeksforgeeks.org/gfg-gg-logo.svg 5x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            </Stack>
            <hr />
            <Typography variant="body1">
              <ul>
                <li>
                  Authored 15+ high-quality articles on Software Testing, OOPS,
                  Data Structures, Algorithms, and DBMS.
                </li>
                <li>
                  Reviewed over 500+ articles to ensure compliance with platform
                  guidelines and maintain credibility.
                </li>
                <li>
                  Enhanced and optimized 15+ existing articles for improved
                  accuracy and relevance.
                </li>
                <li>
                  Collaborated effectively with the GeeksForGeeks editorial team
                  to uphold content quality and consistency.
                </li>
              </ul>
            </Typography>
          </Box>
        </Card>
        <Card style={{ width: 100 + "vh", minHeight: 40 + "vh" , marginTop:5 }}>
          <Box sx={{ mb: 1 }}>
          <Stack direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}>
            
            <Typography sx={{ fontWeight: "bolder" }} variant="h1">
              GeeksForGeeks
            </Typography>
            <Typography variant="h2">
              Technical Content Reviewer
            </Typography>
            <Typography variant="body1">
              September 2023 - February 2024
            </Typography>
            
            <AspectRatio
              ratio="2"
              maxHeight={200}
              sx={{ flex: 1, minWidth: 100, borderRadius: "20%" }}
            >
              <img
                src="https://thinkrealty.com/wp-content/uploads/2023/01/TR_v2_4color.png"
                srcSet="https://thinkrealty.com/wp-content/uploads/2023/01/TR_v2_4color.png 5x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            </Stack>
            <hr />
            <Typography variant="body1">
              <ul>
                <li>
                  Authored 15+ high-quality articles on Software Testing, OOPS,
                  Data Structures, Algorithms, and DBMS.
                </li>
                <li>
                  Reviewed over 500+ articles to ensure compliance with platform
                  guidelines and maintain credibility.
                </li>
                <li>
                  Enhanced and optimized 15+ existing articles for improved
                  accuracy and relevance.
                </li>
                <li>
                  Collaborated effectively with the GeeksForGeeks editorial team
                  to uphold content quality and consistency.
                </li>
              </ul>
            </Typography>
          </Box>
        </Card>
      </div>
    </>
  );
}

export default Experience;
