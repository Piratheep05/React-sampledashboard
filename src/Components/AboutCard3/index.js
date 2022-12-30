import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import log1 from "../../Assests/log1.Jpg";
import lockimg3 from "../../Assests/lockimg3.jpg";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { IconButton } from "@mui/material";

export default function AboutCard2() {
  return (
    <Card sx={{ maxWidth: 745 }}>
      {/* <CardMedia sx={{ height: 240 }} image={lockimg3} /> */}
      {/* <CardMedia > */}
      <IconButton sx={{ mr: 2}} >
        <HandshakeIcon sx={{ fontSize: "40px" }}/>
      </IconButton>
      {/* </CardMedia> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          Intergrity
        </Typography>
        <Typography variant="h6" color="black">
          Perhaps a little old fashioned, but it is a core value of
          SourceSecurity.com. Timely, accurate and relevant information
          published in accordance with Our 10 Guiding Principles of Editorial
          Content.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
