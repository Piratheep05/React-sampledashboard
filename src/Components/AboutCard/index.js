import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../Assests/img1.png";
import home from "../../Assests/home.jpg";

export default function AboutCard() {
  return (
    <Card sx={{ maxWidth: 1545 }}>
      <CardMedia sx={{ height: 240 }} image={home} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          ITUM
        </Typography>
        <Typography variant="h6" color="black">
          The Institute of Technology was established on 10th March 2000 by the
          Honourable Minister of Education and Higher Education primarily to
          conduct NDT and other similar level courses at the University of
          Moratuwa.
        </Typography>
      </CardContent>
    </Card>
  );
}
