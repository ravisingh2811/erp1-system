import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Box from "@mui/material/Box";
import Divider from "@mui/joy/Divider";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

function Experience() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Sidebar />
        {/* //Experience no 1 */}
        <Card style={{ width: 100 + "vh", minHeight: 35 + "vh" }}>
          <Box sx={{ mb: 1 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Typography sx={{ fontWeight: "bolder" }} variant="h1">
                GeeksForGeeks
              </Typography>
              <Typography variant="h2">Technical Content Reviewer</Typography>
              <Typography variant="body1">September 2023</Typography>
              <Typography variant="body1">February 2024</Typography>

              <AspectRatio
                ratio="4.5"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 100, borderRadius: "1%" }}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png"
                  srcSet="https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png 5x"
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
        {/* Expercince no 2 */}
        <Card
          style={{ width: 100 + "vh", minHeight: 35 + "vh", marginTop: 15 }}
        >
          <Box sx={{ mb: 1 }}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Typography sx={{ fontWeight: "bolder" }} variant="h1">
                Think Realty
              </Typography>
              <Typography variant="h2">PHP Developer Intern</Typography>
              <Typography variant="body1">November 2021</Typography>
              <Typography variant="body1">January 2022</Typography>

              <AspectRatio
                ratio="4.5"
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
                  Maintained and enhanced a CRM system, focusing on improving
                  user experience and adding new functionality based on company
                  requirements.
                </li>
                <li>
                  Implemented a chat API and PHP integration to streamline
                  communication by sending details to customers via WhatsApp
                  through a specific link.
                </li>
                <li>
                  Contributed to the development of an automated invoicing
                  system by using a PHP library.
                </li>
                <li>
                  Used PHP, AJAX, jQuery, API, SQL, and JavaScript to create
                  interactive and responsive web applications.
                </li>
              </ul>
            </Typography>
          </Box>
        </Card>
        {/* Expercince no 3 */}
        <Card
          style={{ width: 100 + "vh", minHeight: 35 + "vh", marginTop: 15 }}
        >
          <Box sx={{ mb: 1 }}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Typography sx={{ fontWeight: "bolder" }} variant="h1">
                Hawk Digital
              </Typography>
              <Typography variant="h2">Web Developer Intern</Typography>
              <Typography variant="body1">March 2021</Typography>
              <Typography variant="body1">November 2021</Typography>
              <AspectRatio
                ratio="4.5"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 100, borderRadius: "20%" }}
              >
                <img
                  src="https://hawkdigital.agency/wp-content/uploads/thegem-logos/logo_1f25f9fbb3bdbb338b463cf41a3368d3_2x.png"
                  srcSet="https://hawkdigital.agency/wp-content/uploads/thegem-logos/logo_1f25f9fbb3bdbb338b463cf41a3368d3_2x.png 5x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </Stack>
            <hr />
            <Typography variant="body1">
              <ul>
                <li>
                  Managed and Developed 15+ websites ensuring adherence to
                  client specifications.
                </li>
                <li>
                  Specialized in WordPress customization and SEO optimization to
                  enhance visibility and search rankings.
                </li>
                <li>
                  Crafted responsive, feature-rich websites using PHP, MySQL,
                  HTML, CSS, and JavaScript.
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
