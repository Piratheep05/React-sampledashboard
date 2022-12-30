import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import log1 from "../../Assests/log1.JPG";
import lockimg3 from "../../Assests/lockimg3.jpg";
import img from "../../Assests/img1.png";
import lockimg from "../../Assests/lockimg.JPG"

export default function AboutCard() {
  return (
    <Card sx={{ maxWidth: 1545 }}>
      <CardMedia sx={{ height: 240 }} image={lockimg} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          Who we are
        </Typography>
        <Typography variant="h6" color="black">
          We listen to the security industry. We talk to the security industry.
          We write about the security industry. We originate, curate and collate
          relevant and useful information for the security industry. And we make
          sure all our content is presented in a user-friendly fashion. Our team
          is global, based from offices located in London, Atlanta and Mumbai.
          Contact us if you have something useful to contribute to the security
          industry.
        </Typography>
      </CardContent>
    </Card>
  );
}
