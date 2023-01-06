import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { IconButton } from "@mui/material";
import classimg from "../../../Assests/classimg.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function AboutCard2() {
  return (
    <Card sx={{ maxWidth: 1500 }}>
      <CardMedia sx={{ height: 240 }} image={classimg} />
      {/* <CardMedia > */}
      {/* </CardMedia> */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Introduction course
        </Typography>
        <Typography variant="h6" color="black">
          The primary aim of the National Diploma in Technology (NDT) course is
          to produce mid-level professionals required by the industry of our
          country in various engineering technology disciplines. We conduct the
          NDT programme inEnglish medium in ten disciplines with a total intake
          of 800. The breakdown is as follows:
        </Typography>
        <List component="nav" aria-label="mailbox folders">
          
          <Typography variant="h6" color="black">
            Chemical Engineering Technology 50
          </Typography>
          <Typography variant="h6" color="black">
            Civil Engineering Technology 200
          </Typography>
          <Typography variant="h6" color="black">
            Electrical Engineering Technology 100
          </Typography>{" "}
          <Typography variant="h6" color="black">
            Electronic and Telecommunication Engineering Technology 100
          </Typography>{" "}
          <Typography variant="h6" color="black">
            Marine Engineering Technology 20
          </Typography>{" "}
          <Typography variant="h6" color="black">
            Mechanical Engineering Technology 100
          </Typography>{" "}
          <Typography variant="h6" color="black">
            Nautical Studies 20
          </Typography>{" "}
          <Typography variant="h6" color="black">
            Polymer Technology 50
          </Typography>
          <Typography variant="h6" color="black">
            Textile and Clothing Technology 60
          </Typography>
          <Typography variant="h6" color="black">
            Information Technology 100
          </Typography>
        </List>
        <Typography variant="h6" color="black">
          At the end of the three years of education and training, the
          successful students are awarded the National Diploma in Technology
          with an Ordinary, Credit or Distinction pass, as per the performance
          criteria approved by the University. The latest academic curriculum in
          operation at the ITUM was introduced in the year 2018 for the first
          year students and in 2019 for the second year students. This
          curriculum revision changed the annual academic system of the NDT
          programme to the semester system.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
